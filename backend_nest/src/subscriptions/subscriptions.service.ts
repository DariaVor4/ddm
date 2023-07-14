import { Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { IBotConnectedPayload } from './payloads/bot-connected-payload';
import { SubscriptionEnum } from './subscription.enum';
import { UserNotificationObject } from '../api/notification/objects/user-notification.object';

@Injectable()
export class SubscriptionsService {
  public readonly pubSub = new PubSub();

  public asyncIterator<T>(endpoint: SubscriptionEnum) {
    return this.pubSub.asyncIterator<T>(endpoint);
  }

  public async publishNotificationSubscription(notification: UserNotificationObject) {
    await this.pubSub.publish(SubscriptionEnum.NotificationSubscription, notification);
  }

  public async publishBotConnected(payload: IBotConnectedPayload) {
    await this.pubSub.publish(SubscriptionEnum.BotConnected, payload);
  }
}
