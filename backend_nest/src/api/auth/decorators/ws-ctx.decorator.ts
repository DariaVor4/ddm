import { createParamDecorator, InternalServerErrorException } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { GqlExecutionContext } from '@nestjs/graphql';
import { IGraphqlWsContext } from '../../../types/IGraphqlWsContext';
import { ISessionContext } from './current-session.decorator';

/**
 * Декоратор для получения контекста пользователя в методах подписок graphql-ws.
 */
export const WsCtx = createParamDecorator(
  (key: keyof ISessionContext | undefined, executionContext: ExecutionContextHost) => {
    const ctx = GqlExecutionContext.create(executionContext).getContext<IGraphqlWsContext>();
    const user = ctx.extra.user as ISessionContext;
    if (!user) {
      throw new InternalServerErrorException('User context not found');
    }
    return key ? user[key] : user;
  },
);
