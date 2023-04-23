import {
  _throw, assert, joi, ifDebug,
} from '@common';
import { UnauthorizedException } from '@nestjs/common';
import {
  Args, Context, Mutation, Resolver,
} from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import type { Request, Response } from 'express';
import ms from 'ms';
import { isString } from 'lodash';
import bcrypt from 'bcrypt';
import { PublicEndpoint } from '../decorators/public.decorator';
import { Roles } from '../decorators/roles.decorator';
import UserRoleEnum from '../interfaces/user-role.enum';
import { PrismaService } from '../../../prisma/prisma.service';
import { ConfigService } from '../../../config/config.service';
import { AuthService } from '../auth.service';
import { CookieKeys } from '../types/cookie-keys';
import { IAccessTokenPayload } from '../interfaces/access-token-payload.interface';
import { CookiesPick } from '../decorators/cookies-pick.decorator';

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
   * Вход по почте и паролю, возвращает accessToken.
   */
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  @Mutation(() => String, {
    description: 'Вход по почте и паролю, возвращает accessToken',
  })
  async loginByPassword(
    @Context('res') res: Response,
    @Args('email') email: string,
    @Args('password') password: string,
  ):Promise<string> {
    const { error } = joi.string().email().validate(email);
    assert(!error, new UnauthorizedException(ifDebug(`DEBUG: Некорректный email: ${email}`)));
    // Поиск пользователя
    const user = await this.prisma.userEntity.findFirstOrThrow({
      where: { email },
    }).catch(_throw(new UnauthorizedException(ifDebug('DEBUG: Пользователь не найден'))));
    // Проверка пароля
    assert(await this.authService.passwordCheck(password, user.password), new UnauthorizedException(ifDebug('DEBUG: Неверный пароль')));
    // Создание новой пары токенов, помещение хэша accessToken в запись пользователя
    const { accessToken, refreshToken } = await this.authService.generateTokens(user);
    // Поместить refreshToken в cookies
    this.authService.putTextIntoCookies({
      res,
      key: CookieKeys.RefreshTokenKey,
      text: refreshToken,
      expires: new Date(Date.now() + ms(this.configService.config.refreshTokenExpires)),
    });
    // Вернуть accessToken
    return accessToken;
  }

  /**
   * Обновление пары токенов для авторизованного пользователя.
   */
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  @Mutation(() => String, {
    description: 'Обновление пары токенов для авторизованного пользователя, возвращает новый accessToken',
  })
  async refreshTokens(
    @CookiesPick(CookieKeys.RefreshTokenKey) oldRefreshToken: unknown,
    @Context('res') res: Response,
    @Context('req') req: Request,
  ): Promise<string> {
    assert(isString(oldRefreshToken), new UnauthorizedException(ifDebug(`Некорректный refreshToken: ${oldRefreshToken}`)));
    const oldAccessToken = req.headers.authorization?.replace('Bearer ', '');
    assert(isString(oldAccessToken), new UnauthorizedException(ifDebug(`Некорректный accessToken: ${oldAccessToken}`)));
    // Проверка токенов, декодирование accessToken
    const [payload] = await Promise.all([
      this.jwtService
        .verifyAsync<IAccessTokenPayload>(oldAccessToken, {
        secret: this.configService.config.accessTokenSecret,
        ignoreExpiration: true,
      }).catch(_throw(new UnauthorizedException(ifDebug('accessToken не прошёл проверку')))),
      this.jwtService
        .verifyAsync(oldRefreshToken, {
          secret: this.configService.config.refreshTokenSecret + oldAccessToken,
          ignoreExpiration: false,
        }).catch(_throw(new UnauthorizedException(ifDebug('refreshToken не прошёл проверку')))),
    ]);
    // Поиск пользователя
    const user = await this.prisma.userEntity.findFirstOrThrow({
      where: {
        id: payload.userId,
        tokenHash: { not: null },
      },
      select: {
        id: true,
        updatedAt: true,
        tokenHash: true,
      },
    }).catch(_throw(new UnauthorizedException(ifDebug('Не найден ранее авторизованный пользователь'))));
    if (!oldAccessToken || !user.tokenHash || !await bcrypt.compare(oldAccessToken, user.tokenHash)) {
      throw new UnauthorizedException(ifDebug('accessToken не совпадает с хэшем в БД'));
    }
    // Сгенерировать новые токены (поместив хэш accessToken в пользователя в методе generateTokens)
    const { accessToken, refreshToken } = await this.authService.generateTokens(user);
    // Поместить refreshToken в cookies
    this.authService.putTextIntoCookies({
      res,
      key: CookieKeys.RefreshTokenKey,
      text: refreshToken,
      expires: new Date(Date.now() + ms(this.configService.config.refreshTokenExpires)),
    });
    // Вернуть accessToken
    return accessToken;
  }
}
