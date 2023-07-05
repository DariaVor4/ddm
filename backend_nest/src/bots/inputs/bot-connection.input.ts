import { Field, InputType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { BotEnum } from '../bot.enum';

/**
 * Входные данные для подключения или отключения бота для аккаунта.
 */
@InputType({ description: 'Входные данные для подключения или отключения бота для аккаунта' })
export class BotConnectionInput {
  /**
   * Идентификатор пользователя.
   */
  @Field(() => GraphQLUUID, { nullable: true, description: 'Идентификатор пользователя' })
  userId?: string;

  /**
   * Тип бота.
   */
  @Field(() => BotEnum, { description: 'Тип бота' })
  botType: BotEnum;
}
