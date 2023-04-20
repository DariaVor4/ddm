import { Controller, Get } from '@nestjs/common';
import { TUser } from '@prisma-types';
import { omit } from 'lodash';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/UserRoleEnum';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('user')
export class UserController {
  @Roles(UserRoleEnum.Any)
  @Get('me')
  async me(
    @CurrentUser() user: TUser,
  ) {
    return omit(user, ['password']);
  }
}
