import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Ответ на запрос токена.
 */
@ObjectType({ description: 'Ответ на запрос токена' })
export default class TokenResponse {
  /**
   * Токен доступа.
   */
  @Field(() => String, { description: 'Токен доступа' })
  accessToken: string;

  /**
   * Время истечения токена.
   */
  @Field(() => Date, { description: 'Время истечения токена' })
  accessTokenExpires: Date;
}
