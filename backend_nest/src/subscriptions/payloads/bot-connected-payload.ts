import { BotEnum } from '../../bots/bot.enum';

export interface IBotConnectedPayload {
  botType: BotEnum;
  userId: string;
}
