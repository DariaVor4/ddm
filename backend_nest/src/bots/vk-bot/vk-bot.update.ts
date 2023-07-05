import {
  Ctx, Hears, InjectVkApi, Update,
} from 'nestjs-vk';
import { VK } from 'vk-io';
import { VkBotContext } from './vk-bot-context';
import { PublicEndpoint } from '../../api/auth/decorators/public.decorator';
import { Roles } from '../../api/auth/decorators/roles.decorator';
import UserRoleEnum from '../../api/auth/interfaces/user-role.enum';
import { BotsMessagesService } from '../services/bots-messages.service';

/**
 * Обработчик событий VK бота.
 */
@PublicEndpoint()
@Roles(UserRoleEnum.Any)
@Update()
export class VkBotUpdate {
  constructor(
    @InjectVkApi() private readonly bot: VK,
    private readonly botsMessagesService: BotsMessagesService,
  ) {}

  /**
   * Обработчик команды /start.
   * Если команда была выполнена по ref-ссылке, то VK-аккаунт будет привязан к веб-аккаунту.
   * @param ctx Текущий контекст.
   */
  @Hears(/^\/?(начать|привет|старт|start|hi|hello)!*$/i)
  async start(@Ctx() ctx: VkBotContext) {
    await ctx.send(await this.botsMessagesService.getStartMessage(ctx.referralValue, ctx.senderId.toString(), ctx.state.userId));
  }

  /**
   * Обработчик команды /help.
   * @param ctx Текущий контекст.
   */
  @Hears(/^\/?(помощь|помоги|help|команды)$/i)
  async help(@Ctx() ctx: VkBotContext) {
    await ctx.send(this.botsMessagesService.getHelpMessage());
  }
}
