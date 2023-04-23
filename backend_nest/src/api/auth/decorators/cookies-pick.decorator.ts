import { createParamDecorator } from '@nestjs/common';
import { Request } from 'express';
import { GqlExecutionContext } from '@nestjs/graphql';
import { CookieKeys } from '../types/cookie-keys';

/**
 * Decorator for injection of the cookies or values from a field of them.
 */
// export const PickCookies = createParamDecorator(
//   (key: CookieKeys | undefined, context: ExecutionContext) => {
//     const { cookies } = context.switchToHttp().getRequest() as Request;
//     return key ? cookies[key] as string : cookies as TCookies;
//   },
// );

/**
 * Decorator for injection of the cookies or values from a field of them.
 */
export const CookiesPick = createParamDecorator(
  (key: CookieKeys | undefined, context: GqlExecutionContext) => {
    const { cookies } = GqlExecutionContext
      .create(context)
      .getContext() as Request;
    return key ? cookies[key] as string : cookies as TCookies;
  },
);

export type TCookies = Partial<Record<CookieKeys, string>>;
