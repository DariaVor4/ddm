import assert from '@common/assert';
import {
  CanActivate,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { AuthGuard } from '@nestjs/passport';
import { TUser } from '@prisma-types';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

// Order of methods calls:
// 1. Guard.canActivate
// 2. Guard.getRequest
// 3. Strategy.validate
// 4. Guard.handleRequest

/**
 * Security guard for checking access of authorized users
 */
@Injectable()
export class JwtGuard extends AuthGuard('jwt') implements CanActivate {
  constructor(private reflector: Reflector) {
    super();
  }

  /**
   * Method automatically callable for getting express request from graphql context
   */
  // getRequest(context: ExecutionContextHost): Request {
  //   return GqlExecutionContext
  //     .create(context)
  //     .getContext()
  //     .req;
  // }

  /**
   * Method automatically callable after all guard and strategy validations
   */
  handleRequest(strategyErr?: Error, payload?: TUser | false, jwtErr?: Error): any {
    // console.log('strategyErr:', strategyErr?.message);
    // console.log('payload:', payload);
    // console.log('jwtErr:', jwtErr?.message);
    assert(!strategyErr && !jwtErr && payload, new UnauthorizedException());
    return payload;
  }

  /**
   * Method automatically callable for check the current user's access to the endpoints
   */
  canActivate(context: ExecutionContextHost): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    return isPublic || super.canActivate(context) as boolean;
  }
}
