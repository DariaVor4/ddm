import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import {
  Args, Mutation, Query, Resolver, Subscription,
} from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { isEmpty } from 'lodash';
import type { PartialDeep } from 'type-fest';
import {
  extractPick, ifDebug, isRoleAdmin, strictKeys, strictMediumOmit, strictAdditionalMerge, throwCb, UUID,
} from '../../common';
import { NotificationEntityScalarFieldEnum, NotificationToUserEntityScalarFieldEnum } from '../../generated/prisma-nestjs-graphql';
import { PrismaSelector } from '../../prisma/decorators/prisma-selector.decorator';
import { PaginationInput } from '../../prisma/inputs/pagination.input';
import { PrismaService } from '../../prisma/prisma.service';
import { IGraphqlWsContext } from '../../types/IGraphqlWsContext';
import { CurrentSession, ISessionContext } from '../auth/decorators/current-session.decorator';
import { PublicEndpoint } from '../auth/decorators/public.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/user-role.enum';
import { NotificationsSendInput } from './inputs/notifications-send.input';
import { NotificationConstants } from './notification.constants';
import { NotificationService } from './notification.service';
import { UserNotificationNoContentObject, UserNotificationNoContentObjectSelect } from './objects/user-notification-no-content.object';
import { UserNotificationObject, UserNotificationObjectSelect } from './objects/user-notification.object';
import { NotificationsResponse } from './responses/notifications.response';

@Resolver()
export class NotificationResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationService: NotificationService,
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
   * @returns Уведомления пользователя.
   * @throws {ForbiddenException} Если пользователь не является администратором и запрашивает уведомления другого пользователя.
   */
  @Query(() => NotificationsResponse, {
    description: 'Получение уведомлений пользователя',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async notifications(
    @CurrentSession() session: ISessionContext,
    @PrismaSelector<NotificationsResponse>('notifications') select: UserNotificationNoContentObjectSelect,
    @Args('pagination', { nullable: true }) pagination?: PaginationInput,
    @Args('userId', { type: UUID, nullable: true }) userId?: string,
  ): Promise<NotificationsResponse> {
    const userIdToUse = userId ?? session.userId;
    if (userIdToUse !== session.userId && !isRoleAdmin(session.roles)) {
      throw new ForbiddenException(ifDebug('Вы не можете просматривать уведомления других пользователей'));
    }
    const totalCount = await this.prisma.notificationToUserEntity.count({ where: { userId: userIdToUse } });
    const unreadCount = await this.prisma.notificationToUserEntity.count({ where: { userId: userIdToUse, isRead: false } });
    const selectNotificationToUserEntity = extractPick(select, ...strictKeys(NotificationToUserEntityScalarFieldEnum));
    const selectNotificationEntity = extractPick(strictMediumOmit(select, ...strictKeys(selectNotificationToUserEntity)), ...strictKeys(NotificationEntityScalarFieldEnum));
    const notifications = await this.prisma.notificationToUserEntity.findMany({
      where: { userId: userIdToUse },
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
      orderBy: { updatedAt: 'desc' },
      skip: pagination?.skip,
      take: pagination?.take || 30,
    }).then((result) => result.map((n) => strictAdditionalMerge(n.notification, n)));

    const result = {
      notifications,
      totalCount,
      unreadCount,
    };
    return result;
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
        userId: isRoleAdmin(session.roles) ? userId : session.userId,
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
  @Subscription(() => UserNotificationNoContentObject, {
    description: 'Подписка на уведомления',
    filter(
      payload: { [NotificationConstants.NotificationSubscription]: UserNotificationNoContentObject },
      variables: object,
      context: IGraphqlWsContext,
    ) {
      return payload.notificationSubscription.userId === context.extra.user.userId;
    },
  })
  async notificationSubscription(): Promise<AsyncIterator<UserNotificationNoContentObject>> {
    return this.notificationService.pubSub.asyncIterator(NotificationConstants.NotificationSubscription);
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
