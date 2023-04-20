import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { CookieKeys } from '../types/cookie-keys';

/**
 * Decorator for injection of the cookies or values from a field of them.
 */
export const PickCookies = createParamDecorator(
  (key: CookieKeys | undefined, context: ExecutionContext) => {
    const { cookies } = context.switchToHttp().getRequest() as Request;
    return key ? cookies[key] as string : cookies as TCookies;
  },
);

export type TCookies = Record<CookieKeys, string>;
