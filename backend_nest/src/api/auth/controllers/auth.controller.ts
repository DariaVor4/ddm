import { _throw, assert } from '@common';
import joi from '@common/joi-configured';
import {
  Body, Controller, Post, Req, Res, UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { isString } from 'lodash';
import ms from 'ms';
import { ConfigService } from 'src/config/config.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SecurityService } from 'src/security/security.service';
import { AuthService } from '../auth.service';
import { CookieKeys } from '../types/cookie-keys';
import { PickCookies } from '../decorators/pick-cookies.decorator';
import { PublicEndpoint } from '../decorators/public.decorator';
import { Roles } from '../decorators/roles.decorator';
import UserRoleEnum from '../interfaces/UserRoleEnum';
import { IAccessTokenPayload } from '../interfaces/access-token-payload.interface';

/**
 * Контроллер авторизации
 */
@Controller('auth')
export class AuthController {
  constructor(
    private readonly prisma: PrismaService,
    public readonly jwtService: JwtService,
    public readonly securityService: SecurityService,
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {}

  /**
   * Вход по электронной почте и паролю
   */
  @Post('loginByPassword')
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  async loginByPassword(
    @Body() body: unknown,
    @Res({ passthrough: true }) res: Response,
  ): Promise<{ accessToken: string }> {
    // Валидация body
    const { error, value } = joi.object<{ password:string, email:string }>({
      email: joi.string().email().required(),
      password: joi.string().required(),
    }).validate(body);
    assert(!error, new UnauthorizedException(error?.message));
    // Поиск пользователя
    const user = await this.prisma.user.findFirstOrThrow({
      where: {
        email: value.email,
        deletedAt: null,
      },
    }).catch(_throw(new UnauthorizedException()));
    // Проверка пароля
    assert(await this.securityService.passwordCheck(value.password, user.password), new UnauthorizedException());
    // Generate new tokens pair & put hashed token into user
    const { accessToken, refreshToken } = await this.authService.generateTokens(user);
    // Поместить refreshToken в cookies
    this.securityService.putTextIntoCookies({
      res,
      key: CookieKeys.RefreshTokenKey,
      text: refreshToken,
      expires: new Date(Date.now() + ms(this.configService.config.refreshTokenExpires)),
    });
    // Вернуть accessToken
    return { accessToken };
  }

  /**
   * Обновление пары токенов для авторизованного пользователя
   */
  @Post('refreshTokens')
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  async refreshTokens(
    @PickCookies(CookieKeys.RefreshTokenKey) oldRefreshToken: unknown,
    @Res({ passthrough: true }) res: Response,
    @Req() req: Request,
  ): Promise<{ accessToken: string }> {
    assert(isString(oldRefreshToken), new UnauthorizedException());
    const oldAccessToken = req.headers.authorization?.replace('Bearer ', '');
    assert(isString(oldAccessToken), new UnauthorizedException());
    // Проверка токенов, декодирование accessToken
    const [payload] = await Promise.all([
      this.jwtService
        .verifyAsync<IAccessTokenPayload>(oldAccessToken, {
        secret: this.configService.config.accessTokenSecret,
        ignoreExpiration: true,
      }).catch(_throw(new UnauthorizedException())),
      this.jwtService
        .verifyAsync(oldRefreshToken, {
          secret: this.configService.config.refreshTokenSecret + oldAccessToken,
          ignoreExpiration: false,
        }).catch(_throw(new UnauthorizedException())),
    ]);
    // Поиск пользователя
    const user = await this.prisma.user.findFirstOrThrow({
      where: {
        id: payload.userId,
        tokenHash: { not: null },
        deletedAt: null,
      },
    }).catch(_throw(new UnauthorizedException()));
    // Сгенерировать новые токены (поместив хешированный accessToken в пользователя в методе generateTokens)
    const { accessToken, refreshToken } = await this.authService.generateTokens(user);
    // Поместить refreshToken в cookies
    this.securityService.putTextIntoCookies({
      res,
      key: CookieKeys.RefreshTokenKey,
      text: refreshToken,
      expires: new Date(Date.now() + ms(this.configService.config.refreshTokenExpires)),
    });
    // Вернуть accessToken
    return { accessToken };
  }
}
