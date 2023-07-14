/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-expressions */
import type { PartialDeep } from 'type-fest';
import { client } from '../apollo-client/apollo-client.tsx';
import { NotificationFragmentDoc, GUserNotificationObject, GQuery } from '../generated.ts';
import { CacheFieldsOfType } from '../types/cache-fields-of.type.ts';

const UserNotificationObjectTypename = 'UserNotificationObject';

export const CacheNotificationsService = {
  markAsRead: (notificationId: string | undefined): boolean => {
    if (!notificationId) return false;
    const identifiedId = client.cache.identify({ __typename: UserNotificationObjectTypename, id: notificationId });
    return !!identifiedId && client.cache.modify({
      id: identifiedId,
      fields: {
        isRead: () => true,
      } satisfies CacheFieldsOfType<GUserNotificationObject>,
    }) && client.cache.modify({
      id: 'ROOT_QUERY',
      fields: {
        notificationsUnreadCount: (prev: number = 1) => prev - 1,
      } satisfies CacheFieldsOfType<GQuery>,
    });
  },

  writeNewNotification: (notification: PartialDeep<GUserNotificationObject>): boolean => {
    const identifiedId = client.cache.identify({ __typename: UserNotificationObjectTypename, id: notification.id });
    if (!identifiedId) return false;
    return client.cache.modify({
      id: 'ROOT_QUERY',
      fields: {
        notifications: (existingNotifications = []) => {
          const newNotificationRef = client.cache.writeFragment({
            id: identifiedId,
            fragment: NotificationFragmentDoc,
            data: notification,
          });
          return [newNotificationRef, ...existingNotifications];
        },
        notificationsUnreadCount: (prev: number = 0) => prev + 1,
        notificationsTotalCount: (prev: number = 0) => prev + 1,
      } satisfies CacheFieldsOfType<GQuery>,
    });
  },
};
