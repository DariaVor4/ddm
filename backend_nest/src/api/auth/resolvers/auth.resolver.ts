import {
  throwCb, assert, ifDebug, joi,
} from '@common';
import {
  Args, Context, Mutation, Resolver,
} from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import type { Request, Response } from 'express';
import ms from 'ms';
import { NotAcceptableException, UnauthorizedException } from '@nestjs/common';
import { EmailAddress } from '@common/scalars';
import { PublicEndpoint } from '../decorators/public.decorator';
import { Roles } from '../decorators/roles.decorator';
import UserRoleEnum from '../interfaces/user-role.enum';
import { PrismaService } from '../../../prisma/prisma.service';
import { ConfigService } from '../../../config/config.service';
import { AuthService } from '../auth.service';
import { CookieKeysEnum } from '../enums/cookie-keys.enum';
import { CookiesPick } from '../decorators/cookies-pick.decorator';
import TokenResponse from '../responses/token.response';

/**
 * Резолвер авторизации
 */
@Resolver()
export default class AuthResolver {
  constructor(
    private readonly prisma: PrismaService,
    public readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {}

  /**
   * Вход по почте и паролю, возвращает токен доступа и время его истечения.
   */
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  @Mutation(() => TokenResponse, {
    description: 'Вход по почте и паролю, возвращает токен доступа и время его истечения',
  })
  async loginByPassword(
    @Context('res') res: Response,
    @Args('email', { type: EmailAddress }) email: string,
    @Args('password') password: string,
  ): Promise<TokenResponse> {
    // Поиск пользователя
    const user = await this.prisma.userEntity.findFirstOrThrow({
      where: { email },
    }).catch(throwCb(new UnauthorizedException(ifDebug('DEBUG: Пользователь не найден'))));
    // Проверка пароля
    if (!await this.authService.passwordCheck(password, user.password)) {
      throw new UnauthorizedException(ifDebug('DEBUG: Неверный пароль'));
    }
    // Создание новой пары токенов, помещение хэша accessToken в запись пользователя
    const { accessToken, refreshToken, accessTokenExpires } = await this.authService.generateTokens(user);
    // Поместить refreshToken в cookies
    this.authService.putTextIntoCookies({
      res,
      key: CookieKeysEnum.RefreshTokenKey,
      text: refreshToken,
      expires: new Date(Date.now() + ms(this.configService.config.refreshTokenExpires)),
    });
    // Вернуть accessToken
    return {
      accessToken,
      accessTokenExpires,
    };
  }

  /**
   * Обновление пары токенов для авторизованного пользователя.
   * Есть RestApi аналог: AuthController.refreshTokens().
   */
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  @Mutation(() => TokenResponse, {
    description: 'Обновление пары токенов для авторизованного пользователя',
  })
  async refreshTokens(
    @Context('res') res: Response,
    @Context('req') req: Request,
  ): Promise<TokenResponse> {
    return this.authService.refreshTokens({ res, req });
  }
}
