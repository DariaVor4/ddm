import { Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from '@prisma-graphql/user-entity';
import { Prisma } from '@prisma-client';
import { NotFoundException } from '@nestjs/common';
import { _throw } from '@common';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/user-role.enum';
import { CurrentSession, ISessionContext } from '../auth/decorators/current-session.decorator';
import { PrismaSelector } from '../../prisma/decorators/prisma-selector.decorator';
import { PrismaService } from '../../prisma/prisma.service';
import UserCurrentResponse from './responses/user-current.response';

@Resolver('user')
export class UserResolver {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Получить текущего пользователя.
   */
  @Query(() => UserCurrentResponse, {
    description: 'Получить текущего пользователя',
  })
  @Roles(UserRoleEnum.Any)
  async userCurrent(
    @CurrentSession() ctx: ISessionContext,
    @PrismaSelector<UserCurrentResponse>('user') select: Prisma.UserEntitySelect,
  ): Promise<UserCurrentResponse> {
    return {
      user: await this.prisma.userEntity.findUniqueOrThrow({
        where: { id: ctx.userId },
        select,
      }).catch(_throw(new NotFoundException('Пользователь не найден'))) as UserEntity,
      roles: ctx.roles,
      accessTokenExpires: ctx.accessTokenExpires,
    };
  }
}
