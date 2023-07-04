import { Mutation, Resolver } from '@nestjs/graphql';
import { BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Roles } from '../api/auth/decorators/roles.decorator';
import UserRoleEnum from '../api/auth/interfaces/user-role.enum';
import { CurrentSession, ISessionContext } from '../api/auth/decorators/current-session.decorator';
import { TelegramBotService } from './telegram-bot.service';

/**
 * Резолвер для бота Telegram.
 */
@Resolver()
export class TelegramBotResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly telegramBotService: TelegramBotService,
  ) {}

  /**
   * Подключение бота Telegram к аккаунту.
   * @param session Текущая сессия.
   * @returns Реф-ссылка на Telegram бота.
   * @throws {BadRequestException} Telegram бот уже был подключен к аккаунту.
   */
  @Mutation(() => String, {
    description: 'Подключение бота Telegram к аккаунту. Возвращает реф-ссылку на Telegram бота.',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async telegramBotConnect(
    @CurrentSession() session: ISessionContext,
  ) {
    return this.telegramBotService.createConnectRequest(session.userId);
  }

  /**
   * Отключение бота Telegram от аккаунта.
   * @param session Текущая сессия.
   * @returns Успешность отключения.
   * @throws {BadRequestException} Telegram бот не был подключен к аккаунту.
   */
  @Mutation(() => Boolean, {
    description: 'Отключение бота Telegram от аккаунта',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async telegramBotDisconnect(
    @CurrentSession() session: ISessionContext,
  ) {
    if (await this.prisma.userEntity.findFirst({
      where: { id: session.userId, telegramId: null },
    })) {
      throw new BadRequestException('Telegram бот не был подключен к аккаунту');
    }
    await this.prisma.userEntity.update({
      where: { id: session.userId },
      data: { telegramId: null },
    });
    return true;
  }
}
