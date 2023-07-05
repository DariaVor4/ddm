import { registerEnumType } from '@nestjs/graphql';

/**
 * Перечисление ботов приложения.
 */
export enum BotEnum {
  Telegram = 'Telegram',
  Vk = 'Vk',
}

registerEnumType(BotEnum, {
  name: 'BotEnum',
  description: 'Перечисление ботов приложения.',
});
