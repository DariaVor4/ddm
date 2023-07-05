import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ifDebug, isRoleAdmin } from '@common';
import { ForbiddenException } from '@nestjs/common';
import { CurrentSession, ISessionContext } from '../api/auth/decorators/current-session.decorator';
import { BotsCommonService } from './services/bots-common.service';
import { Roles } from '../api/auth/decorators/roles.decorator';
import UserRoleEnum from '../api/auth/interfaces/user-role.enum';
import { BotConnectionInput } from './inputs/bot-connection.input';

/**
 * Резолвер для ботов.
 */
@Resolver()
export class BotsResolver {
  constructor(
    private readonly botsService: BotsCommonService,
  ) {}

  /**
   * Подключение бота к аккаунту.
   * @param session Текущая сессия.
   * @param input Входные данные.
   * @returns Реф-ссылка на Telegram бота.
   * @throws {BadRequestException} Telegram бот уже был подключен к аккаунту.
   */
  @Mutation(() => String)
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  public async botConnect(
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
}
