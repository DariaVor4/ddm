import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import {
  Args, Mutation, Query, Resolver, Subscription, Int,
} from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { isEmpty } from 'lodash';
import type { PartialDeep } from 'type-fest';
import { Prisma } from '@prisma/client';
import {
  extractPick, ifDebug, isRoleAdmin, strictAdditionalMerge, strictKeys, strictMediumOmit, throwCb, UUID,
} from '../../common';
import { NotificationEntityScalarFieldEnum, NotificationToUserEntityScalarFieldEnum } from '../../generated/prisma-nestjs-graphql';
import { PrismaSelector } from '../../prisma/decorators/prisma-selector.decorator';
import { PaginationInput } from '../../prisma/inputs/pagination.input';
import { PrismaService } from '../../prisma/prisma.service';
import { SubscriptionEnum } from '../../subscriptions/subscription.enum';
import { SubscriptionsService } from '../../subscriptions/subscriptions.service';
import { IGraphqlWsContext } from '../../types/IGraphqlWsContext';
import { CurrentSession, ISessionContext } from '../auth/decorators/current-session.decorator';
import { PublicEndpoint } from '../auth/decorators/public.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/user-role.enum';
import { NotificationsSendInput } from './inputs/notifications-send.input';
import { NotificationService } from './notification.service';
import { UserNotificationObject, UserNotificationObjectSelect } from './objects/user-notification.object';

@Resolver()
export class NotificationResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationService: NotificationService,
    private readonly subscriptionsService: SubscriptionsService,
  ) {}

  /**
   * Рассылка уведомлений.
   * @param input Входные данные.
   * @returns Флаг успешности операции.
   */
  @Mutation(() => Boolean, {
    description: 'Рассылка уведомлений',
  })
  @Roles(UserRoleEnum.Admin)
  async notificationsSend(
    @Args('input') input: NotificationsSendInput,
  ): Promise<boolean> {
    return this.notificationService.notificationsSend(input);
  }

  /**
   * Получение уведомлений пользователя.
   * @param session Текущая сессия.
   * @param select Поля для выборки.
   * @param pagination Пагинация.
   * @param userId Идентификатор пользователя.
   * @param search Поисковая строка.
   * @returns Уведомления пользователя.
   * @throws {ForbiddenException} Если пользователь не является администратором и запрашивает уведомления другого пользователя.
   */
  @Query(() => [UserNotificationObject], {
    description: 'Получение уведомлений пользователя',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async notifications(
    @CurrentSession() session: ISessionContext,
    @PrismaSelector<UserNotificationObject>() select: UserNotificationObjectSelect,
    @Args('pagination', { nullable: true }) pagination?: PaginationInput,
    @Args('userId', { type: UUID, nullable: true }) userId?: string,
    @Args('search', { nullable: true }) search?: string,
  ): Promise<PartialDeep<UserNotificationObject>[]> {
    const userIdToUse = userId ?? session.userId;
    if (userIdToUse !== session.userId && !isRoleAdmin(session.roles)) {
      throw new ForbiddenException(ifDebug('Вы не можете просматривать уведомления других пользователей'));
    }
    const selectNotificationToUserEntity = extractPick(select, ...strictKeys(NotificationToUserEntityScalarFieldEnum));
    const selectNotificationEntity = extractPick(strictMediumOmit(select, ...strictKeys(selectNotificationToUserEntity)), ...strictKeys(NotificationEntityScalarFieldEnum));
    return this.prisma.notificationToUserEntity.findMany({
      where: {
        userId: userIdToUse,
        notification: !search ? undefined : {
          OR: [{
            title: { mode: Prisma.QueryMode.insensitive, contains: search },
          }, {
            content: { mode: Prisma.QueryMode.insensitive, contains: search },
          }],
        },
      },
      select: {
        ...selectNotificationToUserEntity,
        userId: true,
        notification: {
          select: {
            ...selectNotificationEntity,
            id: true,
          },
        },
      },
      orderBy: [{ isRead: 'asc' }, { createdAt: 'desc' }],
      skip: pagination?.skip,
      take: pagination?.take || 3,
    })
      .then((result) => result.map((n) => strictAdditionalMerge(n.notification, n)));
  }

  /**
   * Количество непрочитанных уведомлений пользователя.
   * @param session Текущая сессия.
   * @param userId Идентификатор пользователя.
   * @returns Количество непрочитанных уведомлений пользователя.
   */
  @Query(() => Int, {
    description: 'Количество непрочитанных уведомлений пользователя',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async notificationsUnreadCount(
    @CurrentSession() session: ISessionContext,
    @Args('userId', { type: UUID, nullable: true }) userId?: string,
  ): Promise<number> {
    const userIdToUse = userId || session.userId;
    if (userIdToUse !== session.userId && !isRoleAdmin(session.roles)) {
      throw new ForbiddenException(ifDebug('Вы не можете просматривать уведомления других пользователей'));
    }
    return this.prisma.notificationToUserEntity.count({
      where: { userId: userIdToUse, isRead: false },
    });
  }

  /**
   * Сколько всего уведомлений у пользователя.
   * @param session Текущая сессия.
   * @param userId Идентификатор пользователя.
   * @returns Количество уведомлений пользователя.
   */
  @Query(() => Int, {
    description: 'Сколько всего уведомлений у пользователя',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async notificationsTotalCount(
    @CurrentSession() session: ISessionContext,
    @Args('userId', { type: UUID, nullable: true }) userId?: string,
  ): Promise<number> {
    const userIdToUse = userId || session.userId;
    if (userIdToUse !== session.userId && !isRoleAdmin(session.roles)) {
      throw new ForbiddenException(ifDebug('Вы не можете просматривать уведомления других пользователей'));
    }
    return this.prisma.notificationToUserEntity.count({
      where: { userId: userIdToUse },
    });
  }

  /**
   * Получение уведомления.
   * Помечает уведомление как прочитанное.
   * @param session Текущая сессия.
   * @param select Поля для выборки.
   * @param notificationId Идентификатор уведомления.
   * @param userId Идентификатор пользователя, если нужно уведомление другого пользователя.
   * @returns Уведомление.
   * @throws {NotFoundException} Уведомление не найдено.
   */
  @Query(() => UserNotificationObject, {
    description: 'Получение уведомления. Помечает уведомление как прочитанное.',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async notification(
    @CurrentSession() session: ISessionContext,
    @PrismaSelector<UserNotificationObject>() select: UserNotificationObjectSelect,
    @Args('notificationId', { type: UUID }) notificationId: string,
    @Args('userId', { type: UUID, nullable: true }) userId?: string,
  ): Promise<PartialDeep<UserNotificationObject>> {
    // Получаем уведомление
    const selectNotificationToUserEntity = extractPick(select, ...strictKeys(NotificationToUserEntityScalarFieldEnum));
    const selectNotificationEntity = extractPick(strictMediumOmit(select, ...strictKeys(selectNotificationToUserEntity)), ...strictKeys(NotificationEntityScalarFieldEnum));
    const notification = await this.prisma.notificationToUserEntity.findFirstOrThrow({
      where: {
        notificationId,
        // Если пользователь не администратор, то он может просматривать только свои уведомления
        userId: (isRoleAdmin(session.roles) && userId) || session.userId,
      },
      select: {
        ...selectNotificationToUserEntity,
        notification: {
          select: {
            ...selectNotificationEntity,
            id: true,
          },
        },
        isRead: true,
        userId: true,
      },
    })
      .then((nToU) => strictAdditionalMerge(nToU.notification, nToU))
      .catch(throwCb(new NotFoundException('Уведомление не найдено')));
    // Помечаем уведомление как прочитанное, если оно принадлежит текущему пользователю
    if (session.userId === notification.userId && !notification.isRead) {
      notification.isRead = true;
      await this.prisma.notificationToUserEntity.update({
        where: { userId_notificationId: { userId: session.userId, notificationId } },
        data: { isRead: true },
      });
    }
    return notification;
  }

  /**
   * Подписка на уведомления.
   * @returns Уведомление.
   */
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  @Subscription(() => UserNotificationObject, {
    description: 'Подписка на уведомления',
    filter: (payload: UserNotificationObject, _, context: IGraphqlWsContext) => payload.userId === context.extra.user.userId,
    resolve: (payload: UserNotificationObject) => payload,
  })
  async notificationSubscription(): Promise<AsyncIterator<UserNotificationObject>> {
    return this.subscriptionsService.asyncIterator(SubscriptionEnum.NotificationSubscription);
  }

  /**
   * Удаление уведомлений.
   * При передаче userId и notificationId удаляются указанные уведомления у указанных пользователя.
   * При передаче только userId удалятся ВСЕ уведомления для указанных пользователей.
   * При передаче только notificationId указанные уведомления удалятся сразу у всех пользователей.
   * @param session Текущая сессия.
   * @param notificationIds Идентификаторы уведомлений.
   * @param userIds Идентификаторы пользователей.
   * @returns Флаг успешности операции.
   * @throws {BadRequestException} Если не указаны идентификаторы уведомлений или пользователей.
   */
  @Mutation(() => Boolean, {
    description: 'Удаление уведомлений. '
      + 'При передаче userId и notificationId удаляются указанные уведомления у указанных пользователя. '
      + 'При передаче только userId удалятся ВСЕ уведомления для указанных пользователей. '
      + 'При передаче только notificationId указанные уведомления удалятся сразу у всех пользователей.',
  })
  @Roles(UserRoleEnum.Admin)
  async notificationsDelete(
    @CurrentSession() session: ISessionContext,
    @Args('notificationIds', { nullable: true, type: () => [GraphQLUUID] }) notificationIds?: string[],
    @Args('userIds', { nullable: true, type: () => [GraphQLUUID] }) userIds?: string[],
  ) {
    if (isEmpty(notificationIds) && isEmpty(userIds)) {
      throw new BadRequestException('Необходимо указать хотя бы один идентификатор уведомления или пользователя');
    }
    // TODO: add saving bots messages ids into database and removing notifications both with bots messages.
    return this.prisma.$transaction(async (transaction) => {
      const { count: notificationToUserEntityCount } = await transaction.notificationToUserEntity.deleteMany({
        where: isEmpty(notificationIds) ? {
          userId: { in: userIds ?? [] },
        } : {
          userId: { in: userIds ?? [] },
          notificationId: { in: notificationIds ?? [] },
        },
      });
      const { count: notificationEntityCount } = await transaction.notificationEntity.deleteMany({
        where: { id: { in: isEmpty(userIds) ? notificationIds ?? [] : [] } },
      });
      return notificationToUserEntityCount + notificationEntityCount > 0;
    });
  }
}
