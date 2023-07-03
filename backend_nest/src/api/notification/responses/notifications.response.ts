import { Field, ObjectType } from '@nestjs/graphql';
import type { PartialDeep } from 'type-fest';
import { UserNotificationNoContentObject } from '../objects/user-notification-no-content.object';

/**
 * Ответ на запрос уведомлений пользователя.
 */
@ObjectType({ description: 'Ответ на запрос уведомлений пользователя' })
export class NotificationsResponse {
  /**
   * Уведомления.
   */
  @Field(() => [UserNotificationNoContentObject], { description: 'Уведомления' })
  notifications: PartialDeep<UserNotificationNoContentObject>[];

  /**
   * Общее количество уведомлений.
   */
  @Field(() => Number, { description: 'Общее количество уведомлений' })
  totalCount: number;

  /**
   * Количество непрочитанных уведомлений.
   */
  @Field(() => Number, { description: 'Количество непрочитанных уведомлений' })
  unreadCount: number;
}
