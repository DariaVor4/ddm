import { ForbiddenException } from '@nestjs/common';
import {
  Args, Mutation, Query, Resolver, Subscription,
} from '@nestjs/graphql';
import { CurrentSession, ISessionContext } from '../api/auth/decorators/current-session.decorator';
import { PublicEndpoint } from '../api/auth/decorators/public.decorator';
import { Roles } from '../api/auth/decorators/roles.decorator';
import UserRoleEnum from '../api/auth/interfaces/user-role.enum';
import { UserNotificationNoContentObject } from '../api/notification/objects/user-notification-no-content.object';
import { ifDebug, isRoleAdmin } from '../common';
import { IBotConnectedPayload } from '../subscriptions/payloads/bot-connected-payload';
import { SubscriptionEnum } from '../subscriptions/subscription.enum';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';
import { IGraphqlWsContext } from '../types/IGraphqlWsContext';
import { BotEnum } from './bot.enum';
import { BotConnectionInput } from './inputs/bot-connection.input';
import { BotsCommonService } from './services/bots-common.service';

/**
 * Резолвер для ботов.
 */
@Resolver()
export class BotsResolver {
  constructor(
    private readonly botsService: BotsCommonService,
    private readonly subscriptionsService: SubscriptionsService,
  ) {}

  /**
   * Подключение бота к аккаунту.
   * @param session Текущая сессия.
   * @param input Входные данные.
   * @returns Реф-ссылка на Telegram бота.
   * @throws {BadRequestException} Telegram бот уже был подключен к аккаунту.
   */
  @Query(() => String)
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  public async botConnectionLink(
    @CurrentSession() session: ISessionContext,
    @Args('input') input: BotConnectionInput,
  ): Promise<string> {
    if (input.userId && input.userId !== session.userId && !isRoleAdmin(session.roles)) {
      throw new ForbiddenException(ifDebug('Вы не можете подключить бота к чужому аккаунту'));
    }
    return this.botsService.createConnectionLink(input.userId || session.userId, input.botType);
  }

  /**
   * Отключение бота от аккаунта.
   * @param session Текущая сессия.
   * @param input Входные данные.
   */
  @Mutation(() => Boolean)
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  public async botDisconnect(
    @CurrentSession() session: ISessionContext,
    @Args('input') input: BotConnectionInput,
  ): Promise<boolean> {
    if (input.userId && input.userId !== session.userId && !isRoleAdmin(session.roles)) {
      throw new ForbiddenException(ifDebug('Вы не можете отключить бота от чужого аккаунта'));
    }
    await this.botsService.disconnect(input.userId || session.userId, input.botType);
    return true;
  }

  /**
   * Подписка на подключение бота к аккаунту.
   */
  @PublicEndpoint()
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  @Subscription(() => BotEnum, {
    filter(payload: IBotConnectedPayload, variables, context: IGraphqlWsContext) {
      return payload.userId === context.extra.user.userId;
    },
    resolve: (payload: IBotConnectedPayload) => payload.botType,
  })
  async botConnected(): Promise<AsyncIterator<BotEnum>> {
    return this.subscriptionsService.asyncIterator(SubscriptionEnum.BotConnected);
  }
}
