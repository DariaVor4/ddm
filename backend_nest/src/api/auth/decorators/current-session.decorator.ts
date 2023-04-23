import { assert } from '@common';
import { createParamDecorator, ExecutionContext, InternalServerErrorException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';
import { IncomingHttpHeaders } from 'http';
import { IAccessTokenPayloadCreate } from '../interfaces/access-token-payload.interface';
import { TCookies } from './cookies-pick.decorator';

/**
 * Decorator injects current UserEntity.
 *
 * Specifically, the decorator retrieves the object
 *    returned by the AccessTokenStrategy.validate.
 */
export const CurrentSession = createParamDecorator(
  (key: keyof ISessionContext | undefined, context: ExecutionContext) => {
    const user = (GqlExecutionContext
      .create(context)
      // .getContext() as Request).user as ISessionContext | undefined;
      .getContext().req as Request).user as ISessionContext | undefined;
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
