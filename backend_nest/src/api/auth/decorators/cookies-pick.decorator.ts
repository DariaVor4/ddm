import { createParamDecorator } from '@nestjs/common';
import { Request } from 'express';
import { GqlExecutionContext } from '@nestjs/graphql';
import { CookieKeysEnum } from '../enums/cookie-keys.enum';

/**
 * Decorator for injection of the cookies or values from a field of them.
 */
// export const PickCookies = createParamDecorator(
//   (key: CookieKeysEnum | undefined, context: ExecutionContext) => {
//     const { cookies } = context.switchToHttp().getRequest() as Request;
//     return key ? cookies[key] as string : cookies as TCookies;
//   },
// );

/**
 * Decorator for injection of the cookies or values from a field of them.
 */
export const CookiesPick = createParamDecorator((key: CookieKeysEnum | undefined, context: GqlExecutionContext) => {
  const { cookies } = GqlExecutionContext.create(context).getContext().req as Request;
  return key ? (cookies[key] as string) : (cookies as TCookies);
});

export type TCookies = Partial<Record<CookieKeysEnum, string>>;
