import {
  BadRequestException, Injectable, NotFoundException, OnModuleInit,
} from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import type { UserFromGetMe } from 'typegram';
import crypto from 'crypto';
import ms from 'ms';
import { TelegrafAppContext } from './telegraf-app-context';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Сервис для работы с ботом Telegram.
 */
@Injectable()
export class TelegramBotService implements OnModuleInit {
  /**
   * Время жизни запроса на подключение аккаунта к Telegram боту.
   */
  private readonly CONNECT_REQUEST_TIMEOUT = ms('15m');

  /**
   * Информация о боте Telegram.
   */
  public readonly botInfo: UserFromGetMe;

  /**
   * Хранит запросы на подключение аккаунта к Telegram боту.
   */
  public connectRequests: Map<string, { userId: string, timeoutId: ReturnType<typeof setTimeout> }> = new Map();

  constructor(
    @InjectBot() private readonly bot: Telegraf<TelegrafAppContext>,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Получает информацию о боте Telegram при инициализации модуля.
   */
  async onModuleInit() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // noinspection JSConstantReassignment
    this.botInfo = await this.bot.telegram.getMe();
  }

  /**
   * Создает запрос на подключение аккаунта к Telegram боту.
   * @param userId Идентификатор пользователя.
   * @returns Реф-ссылка на Telegram бота.
   * @throws {BadRequestException} Telegram бот уже был подключен к аккаунту.
   */
  public async createConnectRequest(userId: string) {
    if (await this.prisma.userEntity.count({ where: { id: userId, telegramId: { not: null } } })) {
      throw new BadRequestException('Telegram бот уже был подключен к аккаунту');
    }
    clearTimeout(this.connectRequests.get(userId)?.timeoutId);
    const userIdHash = crypto.createHash('sha256').update(userId).digest('hex');
    this.connectRequests.set(userIdHash, {
      userId,
      timeoutId: setTimeout(() => this.connectRequests.delete(userIdHash), this.CONNECT_REQUEST_TIMEOUT),
    });
    return `https://t.me/${this.botInfo.username}?start=${userIdHash}`;
  }

  /**
   * Подключает аккаунт к Telegram боту.
   * @param userIdHash SHA256 хэш id пользователя.
   * @param telegramId Идентификатор пользователя в Telegram.
   * @returns Идентификатор пользователя.
   */
  public async connectUser(userIdHash: string, telegramId: number): Promise<string> {
    const connectRequest = this.connectRequests.get(userIdHash);
    if (!connectRequest) {
      throw new NotFoundException('По указанной ссылке не найдено запроса на подключение аккаунта к Telegram боту, возможно, была открыта некорректная или старая ссылка');
    }
    clearTimeout(connectRequest.timeoutId);
    this.connectRequests.delete(userIdHash);
    await this.prisma.userEntity.update({
      where: { id: connectRequest.userId },
      data: { telegramId },
    });
    return connectRequest.userId;
  }
}
