import {
  Ctx, Hears, Start, Update,
} from 'nestjs-telegraf';
import { PublicEndpoint } from '../../api/auth/decorators/public.decorator';
import { Roles } from '../../api/auth/decorators/roles.decorator';
import UserRoleEnum from '../../api/auth/interfaces/user-role.enum';
import { TelegrafBotContext } from './telegraf-bot-context';
import { TelegramBotService } from './telegram-bot.service';
import { PrismaService } from '../../prisma/prisma.service';
import { BotsMessagesService } from '../services/bots-messages.service';

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
    private readonly botsMessagesService: BotsMessagesService,
  ) {}

  /**
   * Обработчик команды /start.
   * Если команда была выполнена по ref-ссылке, то telegram-аккаунт будет привязан к веб-аккаунту.
   * @param ctx Текущий контекст.
   */
  @Start()
  @Hears(/^\/?(начать|привет|старт|start|hi|hello)!*$/i)
  async start(@Ctx() ctx: TelegrafBotContext) {
    await ctx.reply(await this.botsMessagesService.getStartMessage(ctx.startPayload, ctx.from?.id.toString(), ctx.state.userId));
  }

  /**
   * Обработчик команды /help.
   * @param ctx Текущий контекст.
   */
  @Hears(/^\/?(помощь|помоги|help|команды)$/i)
  async help(@Ctx() ctx: TelegrafBotContext) {
    await ctx.reply(this.botsMessagesService.getHelpMessage());
  }
}
