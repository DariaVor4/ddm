import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectVkApi } from 'nestjs-vk';
import { VK } from 'vk-io';
import { compact } from 'lodash';
import { IMessagesSendUserIdsResponseItem } from './interfaces/messages-send-user-ids-response-item.interface';

/**
 * Сервис для работы с ботом VK.
 */
@Injectable()
export class VkBotService implements OnModuleInit {
  private readonly logger = new Logger(VkBotService.name);

  public readonly selfId: number;

  constructor(@InjectVkApi() private readonly vk: VK) {}

  async onModuleInit() {
    const [group] = await this.vk.api.groups.getById({});
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // noinspection JSConstantReassignment
    this.selfId = group.id;
  }

  /**
   * Получение ссылки для подключения аккаунта к боту.
   * @param ref Реферальный код.
   */
  public async getConnectionLink(ref: string): Promise<string> {
    // 2.6. Передача произвольного параметра с помощью ссылки vk.me
    // https://vk.com/dev/bizmessages_doc
    // 171107837
    // https://vk.me/club${groupId}?ref=${ref}&ref_source=${refSource}
    // https://vk.com/write-${groupId}?ref=${ref}&ref_source=${refSource}
    return `https://vk.com/write-${this.selfId}?ref=${ref}`;
  }

  public async sendMessages(externalIds: string[], message: string) {
    const promise = this.vk.api.messages.send({
      message,
      user_ids: externalIds.map(Number),
      random_id: Math.floor(Math.random() * 2 ** 31),
    }) as unknown as Promise<IMessagesSendUserIdsResponseItem[]>;

    return {
      errored: await promise
        .then((items) => compact(items.map((item) => item.error && item.peer_id?.toString())))
        .catch((error) => {
          this.logger.error(`Error in vk.api.messages.send: ${error.message}`);
          return externalIds;
        }),
    };
  }
}
