import {
  Ctx, Help, Start, Update,
} from 'nestjs-telegraf';
import { InternalServerErrorException } from '@nestjs/common';
import { compact, isError, isString } from 'lodash';
import { PublicEndpoint } from '../api/auth/decorators/public.decorator';
import { Roles } from '../api/auth/decorators/roles.decorator';
import UserRoleEnum from '../api/auth/interfaces/user-role.enum';
import { TelegrafAppContext } from './telegraf-app-context';
import { TelegramBotService } from './telegram-bot.service';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Обработчик событий Telegram бота.
 */
@Roles(UserRoleEnum.Any)
@PublicEndpoint()
@Update()
export class TelegramBotUpdate {
  constructor(
    private readonly telegramBotService: TelegramBotService,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Обработчик команды /start.
   * Если команда была выполнена по ref-ссылке, то telegram-аккаунт будет привязан к веб-аккаунту.
   * @param ctx Текущий контекст.
   */
  @Start()
  async start(@Ctx() ctx: TelegrafAppContext) {
    if (!ctx.from?.id) {
      throw new InternalServerErrorException('Не удалось получить id пользователя');
    }
    const userId = ctx.state.userId || (ctx.startPayload
      ? await this.telegramBotService.connectUser(ctx.startPayload, ctx.from.id).catch((error: Error) => error)
      : undefined);
    const isErr = isError(userId);
    const selectFio = { select: { lastName: true, firstName: true, patronymic: true } };
    const fio = isString(userId)
      ? await this.prisma.userEntity.findFirstOrThrow({
        where: { id: userId },
        select: { employee: selectFio, student: { select: { passport: selectFio } } },
      }).then((user) => compact([
        user.student?.passport?.lastName || user.employee?.lastName,
        user.student?.passport?.firstName || user.employee?.firstName,
        user.student?.passport?.patronymic || user.employee?.patronymic,
      ]).join(' ') || 'Имя не указано')
      : undefined;
    await ctx.reply(compact([
      '👋 Добро пожаловать в Telegram бота Визового центра при ВолгГТУ!',
      isErr ? `❌ Возникла ошибка при подключении бота к веб-аккаунту: «${userId.message}»` : undefined,
      isString(userId)
        ? [`✅ Вы успешно подключены к своему аккаунту как ${fio}.`, '🤓 Здесь Вы будете получать важные уведомления в режиме реального времени.']
        : '⚠ Вы не подключены к своему веб-аккаунту, пожалуйста, войдите в свой аккаунт на сайте и повторите попытку подключения бота.',
    ]).flat().join('\n\n'));
  }

  /**
   * Обработчик команды /help.
   * @param ctx Текущий контекст.
   */
  @Help()
  async help(@Ctx() ctx: TelegrafAppContext) {
    await ctx.reply('У меня нет команд, но я могу отправлять Вам важные уведомления как только они появятся.');
  }
}
