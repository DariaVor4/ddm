import {
  BadRequestException, Injectable, InternalServerErrorException, NotFoundException,
} from '@nestjs/common';
import ms from 'ms';
import crypto from 'crypto';
import { UserEntity } from '@prisma/client';
import { compact, isNil } from 'lodash';
import { SubscriptionsService } from '../../subscriptions/subscriptions.service';
import { BotEnum } from '../bot.enum';
import { TelegramBotService } from '../telegram-bot/telegram-bot.service';
import { VkBotService } from '../vk-bot/vk-bot.service';
import { elseThrow, throwCb } from '../../common';
import { PrismaService } from '../../prisma/prisma.service';

/**
 * Интерфейс запроса на подключение аккаунта к боту.
 */
interface IConnectionRequest {
  userId: string,
  timeoutId: ReturnType<typeof setTimeout>,
  botType: BotEnum,
}

/**
 * Сервис для работы с ботами.
 */
@Injectable()
export class BotsCommonService {
  /**
   * Время жизни запроса на подключение веб-аккаунта к боту.
   */
  private readonly CONNECT_REQUEST_TIMEOUT = ms('10m');

  /**
   * Хранит запросы на подключение аккаунта к Telegram боту.
   */
  public connectRequests: Map<string, IConnectionRequest> = new Map();

  constructor(
    private readonly prisma: PrismaService,
    private readonly telegramBotService: TelegramBotService,
    private readonly vkBotService: VkBotService,
    private readonly subscriptionsService: SubscriptionsService,
  ) { }

  /**
   * Получение имени поля в таблице пользователя по перечислению ботов.
   * @param botType Тип бота.
   * @returns Имя поля в таблице пользователя.
   */
  private getIdKey(botType: BotEnum): keyof Pick<UserEntity, 'telegramId' | 'vkId'> {
    return botType === BotEnum.Telegram ? 'telegramId' : 'vkId';
  }

  /**
   * Создает запрос на подключение аккаунта к боту.
   * @param userId Идентификатор пользователя.
   * @param botType Тип бота.
   */
  public async createConnectionLink(userId: string, botType: BotEnum) {
    // Get user and check if he already has connected bot.
    const user = await this.prisma.userEntity.findUniqueOrThrow({ where: { id: userId } })
      .catch(throwCb(new NotFoundException('Пользователь не найден')))
      .then((user1) => (user1[this.getIdKey(botType)] ? elseThrow(new BadRequestException('Telegram бот уже был подключен к аккаунту')) : user1));
    // Create connection referral string.
    const ref = crypto.createHash('sha256').update(user.id + botType + user.updatedAt.toISOString()).digest('hex');
    // Clear old requests and create new one.
    clearTimeout(this.connectRequests.get(ref)?.timeoutId);
    this.connectRequests.set(ref, {
      userId,
      botType,
      timeoutId: setTimeout(() => this.connectRequests.delete(ref), this.CONNECT_REQUEST_TIMEOUT),
    });
    // Return referral link.
    if (botType === BotEnum.Telegram) {
      return this.telegramBotService.getConnectionLink(ref);
    } if (botType === BotEnum.Vk) {
      return this.vkBotService.getConnectionLink(ref);
    }
    throw new InternalServerErrorException(`Неизвестный тип бота: ${botType satisfies never}`);
  }

  /**
   * Подключение аккаунта к боту.
   * @param ref Реферальная строка.
   * @param externalId Идентификатор пользователя во внешней системе.
   */
  public async connect(ref: string, externalId: string) {
    // Get request and check if it exists.
    const connectRequest = this.connectRequests.get(ref);
    if (!connectRequest) {
      throw new NotFoundException('По указанной ссылке запрос на подключение к боту не найден, причины: профиль был изменён, открыта некорректная или старая ссылка, время на подключение истекло');
    }
    // Remove used request.
    clearTimeout(connectRequest.timeoutId);
    this.connectRequests.delete(ref);
    // Check if bot is already connected to another user.
    if (await this.prisma.userEntity.findUnique({
      where: { [this.getIdKey(connectRequest.botType)]: externalId }, select: { id: true },
    })) {
      throw new BadRequestException('Данный аккаунт уже подключен к другому веб-профилю');
    }
    // Update user external id, publish to subscription.
    await Promise.all([
      this.prisma.userEntity.update({
        where: { id: connectRequest.userId },
        data: { [this.getIdKey(connectRequest.botType)]: externalId },
      }),
      this.subscriptionsService.publishBotConnected({ botType: connectRequest.botType, userId: connectRequest.userId }),
    ]);
    // Return user id.
    return connectRequest.userId;
  }

  /**
   * Отключение аккаунта от бота.
   * @param userId Идентификатор пользователя.
   * @param botType Тип бота.
   */
  public async disconnect(userId: string, botType: BotEnum) {
    // Check if user has connected bot.
    if (!await this.prisma.userEntity.count({
      where: { id: userId, [this.getIdKey(botType)]: { not: null } },
    })) {
      throw new BadRequestException(`${botType} бот не был подключен к аккаунту`);
    }
    // Disconnect bot.
    await this.prisma.userEntity.update({
      where: { id: userId },
      data: { [this.getIdKey(botType)]: null },
    });
  }

  /**
   * Рассылка сообщения пользователям.
   */
  public async sendMessages(users: Pick<UserEntity, 'telegramId' | 'vkId'>[], message: string, botTypes?: BotEnum[]) {
    // Получение внешних идентификаторов.
    const telegramIds = compact(users.map((user) => user.telegramId));
    const vkIds = compact(users.map((user) => user.vkId));
    // Отправка сообщений в указанных ботов.
    const [tgResult, vkResult] = await Promise.all([
      (isNil(botTypes) || botTypes.includes(BotEnum.Telegram))
        ? await this.telegramBotService.sendMessages(telegramIds, message) : undefined,
      (isNil(botTypes) || botTypes.includes(BotEnum.Vk))
        ? await this.vkBotService.sendMessages(vkIds, message) : undefined,
    ]);
    return { tgResult, vkResult };
  }
}
