import {
  Controller, Post, Req, Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { PublicEndpoint } from './decorators/public.decorator';
import { Roles } from './decorators/roles.decorator';
import UserRoleEnum from './interfaces/user-role.enum';
import { AuthService } from './auth.service';
import TokenResponse from './responses/token.response';

/**
 * Контроллер для обновления пары токенов через rest api.
 */
@Controller('rest/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Обновление пары токенов для авторизованного пользователя.
   * RestApi клон AuthResolver.refreshTokens().
   */
  @Post('refreshTokens')
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  async refreshTokens(
    @Res({ passthrough: true }) res: Response,
    @Req() req: Request,
  ): Promise<TokenResponse> {
    return this.authService.refreshTokens({ req, res });
  }
}
