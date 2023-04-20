import assert from '@common/assert';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TUser } from '@prisma-types';

/**
 * Decorator injects current UserEntity.
 *
 * Specifically, the decorator retrieves the object
 *    returned by the AccessTokenStrategy.validate.
 */
export const CurrentUser = createParamDecorator(
  (key: keyof TUser | undefined, context: ExecutionContext) => {
    const user = context.switchToHttp().getRequest().user as TUser;
    assert(user, new Error('User not found in context'));
    return key ? user[key] : user;
  },
);
