import {
  CanActivate, ExecutionContext, Injectable, InternalServerErrorException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Kind, OperationDefinitionNode, OperationTypeNode } from 'graphql/language';
import { IGraphqlWsContext } from '../../../types/IGraphqlWsContext';
import { ISessionContext } from '../decorators/current-session.decorator';
import { ROLES_KEY } from '../decorators/roles.decorator';
import UserRoleEnum from '../interfaces/user-role.enum';

/**
 * Security guard for checking access of users with specific roles
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  /**
   * Method automatically callable for getting express request from graphql context
   */
  getRequest(context: ExecutionContextHost): Request {
    return GqlExecutionContext.create(context).getContext().req;
  }

  /**
   * Automatically called method for checking roles of the current authorized user
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const rolesRequired = this.reflector.getAllAndOverride<UserRoleEnum[] | undefined>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]) ?? [];
    if (rolesRequired.includes(UserRoleEnum.Any)) {
      return true;
    }
    if (rolesRequired.length === 0) {
      rolesRequired.push(UserRoleEnum.Admin);
    }
    // Get definition of operation and then get context of request.
    const gqlExecutionContext = GqlExecutionContext.create(context);
    const definition = gqlExecutionContext.getInfo().operation as OperationDefinitionNode;
    if (definition?.kind !== Kind.OPERATION_DEFINITION) {
      throw new InternalServerErrorException('Invalid operation definition');
    }
    // Get session from context
    const session: ISessionContext | undefined = definition.operation === OperationTypeNode.SUBSCRIPTION
      ? gqlExecutionContext.getContext<IGraphqlWsContext>()?.extra?.user
      : gqlExecutionContext.getContext()?.req?.user;
    if (!session) {
      return false;
    }
    return rolesRequired.some((role) => session.roles.includes(role));
  }
}
