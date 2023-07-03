import { ObjectType, OmitType } from '@nestjs/graphql';
import { UserNotificationObject } from './user-notification.object';
import { GetPrismaSelect } from '../../../prisma/get-prisma-select.type';

/**
 * Уведомление пользователя без контента.
 */
@ObjectType({ description: 'Уведомление пользователя без контента' })
export class UserNotificationNoContentObject extends OmitType(UserNotificationObject, [
  'content',
  'services',
], ObjectType) {}

export type UserNotificationNoContentObjectSelect = GetPrismaSelect<UserNotificationNoContentObject>;
