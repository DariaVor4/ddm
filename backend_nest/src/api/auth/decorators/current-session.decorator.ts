import { assert } from '@common';
import { createParamDecorator, ExecutionContext, InternalServerErrorException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';
import { IncomingHttpHeaders } from 'http';
import { IAccessTokenPayloadCreate } from '../interfaces/access-token-payload.interface';
import { TCookies } from './cookies-pick.decorator';

/**
 * Декоратор для получения контекста текущего авторизованного пользователя.
 *
 * Не будет работать, если не прошла проверка токенов доступа и обновления!
 */
export const CurrentSession = createParamDecorator(
  (key: keyof ISessionContext | undefined, context: ExecutionContext) => {
    const user = (
      GqlExecutionContext.create(context).getContext().req as Request
    ).user as ISessionContext | undefined;
    assert(user, new InternalServerErrorException('User context not found'));
    return key ? user[key] : user;
  },
);

export interface ISessionContext extends IAccessTokenPayloadCreate {
  userEmail: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: Date;
  cookies: TCookies;
  headers: IncomingHttpHeaders;
}
