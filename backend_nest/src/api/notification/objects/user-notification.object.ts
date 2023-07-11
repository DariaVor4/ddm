import { IntersectionType, ObjectType, PickType } from '@nestjs/graphql';
import { GetPrismaSelect } from '../../../prisma/get-prisma-select.type';
import { NotificationEntity, NotificationToUserEntity } from '../../../generated/prisma-nestjs-graphql';

/**
 * Уведомление пользователя.
 */
@ObjectType({ description: 'Уведомление пользователя' })
export class UserNotificationObject extends IntersectionType(
  PickType(NotificationEntity, ['id', 'title', 'content', 'services', 'createdAt']),
  PickType(NotificationToUserEntity, ['userId', 'isRead', 'sentTo']),
  ObjectType,
) {}

export type UserNotificationObjectSelect = GetPrismaSelect<UserNotificationObject>;
