import type { MessagesSendUserIdsResponseItem as VkIoType } from 'vk-io/lib/api/schemas/objects';

export interface IMessagesSendUserIdsResponseItem extends VkIoType {
  error?: {
    code: number;
    description: string;
  }
}
