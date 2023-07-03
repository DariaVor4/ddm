import {
  Args, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import { UUID } from '@common/scalars';
import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { ifDebug, isRoleAdmin, throwCb } from '@common';
import {
  compact,
  isEmpty, keys, omit, pick,
} from 'lodash';
import { strictMerge } from '@common/lodash/strict-merge';
import { NotificationEntityScalarFieldEnum, NotificationToUserEntityScalarFieldEnum } from '@prisma-nestjs-graphql';
import type { PartialDeep } from 'type-fest';
import { GraphQLUUID } from 'graphql-scalars';
import { NotificationService } from './notification.service';
import { NotificationsSendInput } from './inputs/notifications-send.input';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/user-role.enum';
import { CurrentSession, ISessionContext } from '../auth/decorators/current-session.decorator';
import { PrismaService } from '../../prisma/prisma.service';
import { PrismaSelector } from '../../prisma/decorators/prisma-selector.decorator';
import { PaginationInput } from '../../prisma/inputs/pagination.input';
import { UserNotificationNoContentObjectSelect } from './objects/user-notification-no-content.object';
import { NotificationsResponse } from './responses/notifications.response';
import { UserNotificationObject, UserNotificationObjectSelect } from './objects/user-notification.object';

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
  @Mutation(() => Boolean)
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
  @Query(() => NotificationsResponse)
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
    const notificationToUserEntitySelect = pick(select, keys(NotificationToUserEntityScalarFieldEnum));
    const notificationEntitySelect = pick(omit(select, keys(notificationToUserEntitySelect)), keys(NotificationEntityScalarFieldEnum));
    const notifications = await this.prisma.notificationToUserEntity.findMany({
      where: { userId: userIdToUse },
      select: {
        ...notificationToUserEntitySelect,
        notification: { select: notificationEntitySelect },
      },
      orderBy: { updatedAt: 'desc' },
      skip: pagination?.skip,
      take: pagination?.take || 10,
    }).then((result) => result.map((n) => strictMerge(n.notification, n)));

    const result = {
      notifications,
      totalCount,
      unreadCount,
    };
    return result;
  }

  /**
   * Получение уведомления.
   * @param session Текущая сессия.
   * @param select Поля для выборки.
   * @param notificationId Идентификатор уведомления.
   * @returns Уведомление.
   * @throws {NotFoundException} Уведомление не найдено.
   */
  @Query(() => UserNotificationObject)
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async notification(
    @CurrentSession() session: ISessionContext,
    @PrismaSelector<UserNotificationObject>() select: UserNotificationObjectSelect,
    @Args('notificationId', { type: UUID }) notificationId: string,
  ): Promise<PartialDeep<UserNotificationObject>> {
    const selectNotificationToUserEntity = pick(select, keys(NotificationToUserEntityScalarFieldEnum));
    const selectNotificationEntity = pick(omit(select, keys(selectNotificationToUserEntity)), keys(NotificationEntityScalarFieldEnum));
    return this.prisma.notificationToUserEntity.findFirstOrThrow({
      where: {
        notificationId,
        // Если пользователь не администратор, то он может просматривать только свои уведомления
        userId: isRoleAdmin(session.roles) ? undefined : session.userId,
      },
      select: {
        ...selectNotificationToUserEntity,
        notification: { select: selectNotificationEntity },
      },
    })
      .then((n) => strictMerge(n.notification, n))
      .catch(throwCb(new NotFoundException('Уведомление не найдено')));
  }

  /**
   * Удаление уведомлений.
   * При передаче массива userId удаляются адресованные пользователю уведомления.
   * При передаче массива notificationId указанные уведомления удаляются сразу у всех пользователей.
   * @param session Текущая сессия.
   * @param notificationIds Идентификаторы уведомлений.
   * @param userIds Идентификаторы пользователей.
   * @returns Флаг успешности операции.
   * @throws {BadRequestException} Если не указаны идентификаторы уведомлений или пользователей.
   */
  @Mutation(() => Boolean, {
    description: 'Удаление уведомлений. '
      + 'При передаче массива userId удаляются адресованные пользователю уведомления. '
      + 'При передаче массива notificationId указанные уведомления удаляются сразу у всех пользователей.',
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
    return this.prisma.$transaction(async (transaction) => {
      const { count: notificationToUserEntityCount } = await transaction.notificationToUserEntity.deleteMany({
        where: {
          OR: [
            { userId: { in: userIds ?? [] } },
            { notificationId: { in: notificationIds ?? [] } },
          ],
        },
      });
      const { count: notificationEntityCount } = await transaction.notificationEntity.deleteMany({
        where: { id: { in: notificationIds ?? [] } },
      });
      return notificationToUserEntityCount + notificationEntityCount > 0;
    });
  }
}
