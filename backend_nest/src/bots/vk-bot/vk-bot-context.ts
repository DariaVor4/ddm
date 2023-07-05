import { MessageContext } from 'vk-io';

/**
 * Текущее состояние.
 */
interface VkMessageState {
  /**
   * Идентификатор пользователя во внутренней системе.
   */
  userId?: string;
}

/**
 * Контекст VK бота приложения.
 */
export class VkBotContext extends MessageContext<VkMessageState> {}
