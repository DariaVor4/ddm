import { assert, runtimeMode } from '@common';
import {
  CanActivate, Injectable, Logger, UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';

import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { ISessionContext } from '../decorators/current-session.decorator';

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
  private readonly logger = new Logger(JwtGuard.name);

  constructor(private reflector: Reflector) {
    super();
  }

  /**
   * Method automatically callable for getting express request from graphql context
   */
  getRequest(context: ExecutionContextHost): Request {
    return GqlExecutionContext.create(context).getContext().req;
  }

  /**
   * Method automatically callable after all guard and strategy validations
   */
  handleRequest(strategyErr?: Error, payload?: ISessionContext | false, jwtErr?: Error): any {
    const isNoError = !strategyErr && !jwtErr && payload;
    // For debug:
    if (!isNoError && runtimeMode.isDebug) {
      const errors = {
        strategyErr: strategyErr?.message,
        jwtErr: jwtErr?.message,
        payload,
      };
      this.logger.debug(`Ошибка валидации JWT: ${JSON.stringify(errors, null, 2)}`);
      assert(isNoError, new UnauthorizedException(JSON.stringify(errors)));
    }
    assert(isNoError, new UnauthorizedException());
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
    return isPublic || (super.canActivate(context) as boolean);
  }
}
