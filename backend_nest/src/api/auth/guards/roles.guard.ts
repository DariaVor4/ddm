import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TUser } from '@prisma-types';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserService } from '../../user/user.service';
import { ROLES_KEY } from '../decorators/roles.decorator';
import UserRoleEnum from '../interfaces/user-role.enum';

/**
 * Security guard for checking access of users with specific roles
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly userService: UserService,
  ) {}

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
    const rolesRequired = this.reflector.get<UserRoleEnum[] | undefined>(ROLES_KEY, context.getHandler()) ?? [];
    if (rolesRequired.includes(UserRoleEnum.Any)) {
      return true;
    }
    rolesRequired.push(UserRoleEnum.Admin);
    const user = context.switchToHttp().getRequest().user as TUser | undefined;
    if (!user) {
      return false;
    }
    const userRoles = await this.userService.getUserRoles(user.id);
    return rolesRequired.some((role) => userRoles.includes(role));
  }
}
