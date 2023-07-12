import { Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { UserNotificationNoContentObject } from '../api/notification/objects/user-notification-no-content.object';
import { IBotConnectedPayload } from './payloads/bot-connected-payload';
import { SubscriptionEnum } from './subscription.enum';

@Injectable()
export class SubscriptionsService {
  public readonly pubSub = new PubSub();

  public asyncIterator<T>(endpoint: SubscriptionEnum) {
    return this.pubSub.asyncIterator<T>(endpoint);
  }

  public async publishNotificationSubscription(notification: UserNotificationNoContentObject) {
    const triggerName = SubscriptionEnum.NotificationSubscription;
    await this.pubSub.publish(triggerName, { [triggerName]: notification });
  }

  public async publishBotConnected(payload: IBotConnectedPayload) {
    const triggerName = SubscriptionEnum.BotConnected;
    await this.pubSub.publish(triggerName, payload);
  }
}
