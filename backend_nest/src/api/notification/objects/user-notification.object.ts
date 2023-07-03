import { IntersectionType, ObjectType, PickType } from '@nestjs/graphql';
import { NotificationEntity, NotificationToUserEntity } from '@prisma-nestjs-graphql';
import { GetPrismaSelect } from '../../../prisma/get-prisma-select.type';

/**
 * Уведомление пользователя.
 */
@ObjectType({ description: 'Уведомление пользователя' })
export class UserNotificationObject extends IntersectionType(
  PickType(NotificationEntity, ['id', 'title', 'content', 'services', 'createdAt']),
  PickType(NotificationToUserEntity, ['userId', 'isRead']),
  ObjectType,
) {}

export type UserNotificationObjectSelect = GetPrismaSelect<UserNotificationObject>;
