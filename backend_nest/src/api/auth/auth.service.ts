import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TUser } from '@prisma-types';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { CookieOptions, Request, Response } from 'express';
import { throwCb, ifDebug, runtimeMode } from '@common';
import { isString } from 'lodash';
import ms from 'ms';
import { ConfigService } from '../../config/config.service';
import { PrismaService } from '../../prisma/prisma.service';
import { UserService } from '../user/user.service';
import { IAccessTokenPayload, IAccessTokenPayloadCreate } from './interfaces/access-token-payload.interface';
import { CookieKeysEnum } from './enums/cookie-keys.enum';
import TokenResponse from './responses/token.response';

/**
 * Service implementing authorization,
 * methods of interaction with tokens
 */
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
    public readonly jwtService: JwtService,
  ) {}

  /**
   * Generates and returns a new pair of tokens.
   * Puts access token hash into user.
   */
  public async generateTokens(user: Pick<TUser, 'id' | 'updatedAt'>) {
    const accessTokenPayload: IAccessTokenPayloadCreate = {
      userId: user.id,
      roles: await this.userService.getUserRoles(user.id),
    };
    const accessToken = await this.jwtService.signAsync(accessTokenPayload, {
      secret: this.configService.config.accessTokenSecret,
      expiresIn: this.configService.config.accessTokenExpires,
    });
    const refreshToken = await this.jwtService.signAsync({}, {
      secret: this.configService.config.refreshTokenSecret + accessToken,
      expiresIn: this.configService.config.refreshTokenExpires,
    });
    await this.prisma.userEntity.update({
      where: { id: user.id },
      data: {
        tokenHash: await bcrypt.hash(accessToken, 5),
        updatedAt: user.updatedAt || null,
      },
    });
    return {
      accessToken,
      accessTokenExpires: new Date((this.jwtService.decode(accessToken) as IAccessTokenPayload).exp * 1000),
      refreshToken,
    };
  }

  async generateSingleUseCode(): Promise<string> {
    const length = this.configService.config.confirmationCodeLength;
    return new Promise((resolve, reject) => {
      crypto.randomInt(123, 10 ** length, (err, num) => {
        if (err) {
          return reject(err);
        }
        return resolve(num.toString().slice(0, length).padStart(length, '0'));
      });
    });
  }

  async performLogout(res: Response, userId?: string) {
    this.logger.debug(`performLogout userId: ${userId}`);
    this.putTextIntoCookies({
      res,
      key: CookieKeysEnum.RefreshTokenKey,
      text: 'null',
      expires: new Date(),
      options: {
        maxAge: 1000,
      },
    });
    if (userId) {
      await this.prisma.userEntity.update({
        where: { id: userId },
        data: { tokenHash: null },
      });
    }
  }

  async passwordHash(password: string): Promise<string> {
    return bcrypt.hash(password, this.configService.config.bcryptRounds);
  }

  async passwordCheck(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  public putTextIntoCookies({
    res, key, text, expires, options,
  }: { res: Response; key: string; text: string; expires: Date, options?: CookieOptions }) {
    res.cookie(key, text, {
      path: '/',
      httpOnly: true,
      sameSite: runtimeMode.isProd ? 'strict' : 'none',
      secure: !runtimeMode.isTest,
      expires,
      ...options,
    });
  }

  /**
   * Обновление пары токенов для авторизованного пользователя.
   * @param req - Express Request
   * @param res - Express Response
   * @returns Обновлённая пара токенов
   * @throws {UnauthorizedException}
   */
  public async refreshTokens({ req, res }: { req: Request, res: Response }): Promise<TokenResponse> {
    try {
      const oldRefreshToken = req.cookies[CookieKeysEnum.RefreshTokenKey];
      if (!isString(oldRefreshToken)) {
        throw new UnauthorizedException(ifDebug(`Некорректный refreshToken: ${oldRefreshToken}`) || 'UNAUTHORIZED');
      }
      const oldAccessToken = req.headers.authorization?.replace('Bearer ', '');
      if (!isString(oldAccessToken)) {
        throw new UnauthorizedException(ifDebug(`Некорректный accessToken: ${oldAccessToken}`) || 'UNAUTHORIZED');
      }
      // Проверка токенов, декодирование accessToken
      const [payload] = await Promise.all([
        this.jwtService.verifyAsync<IAccessTokenPayload>(oldAccessToken, {
          secret: this.configService.config.accessTokenSecret,
          ignoreExpiration: true,
        }).catch(throwCb(new UnauthorizedException(ifDebug('accessToken не прошёл проверку') || 'UNAUTHORIZED'))),
        this.jwtService.verifyAsync(oldRefreshToken, {
          secret: this.configService.config.refreshTokenSecret + oldAccessToken,
          ignoreExpiration: false,
        }).catch(throwCb(new UnauthorizedException(ifDebug('refreshToken не прошёл проверку') || 'UNAUTHORIZED'))),
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
      }).catch(throwCb(new UnauthorizedException(ifDebug('Не найден ранее авторизованный пользователь') || 'UNAUTHORIZED')));
      if (!oldAccessToken || !user.tokenHash || !(await bcrypt.compare(oldAccessToken, user.tokenHash))) {
        throw new UnauthorizedException(ifDebug('accessToken не совпадает с хэшем в БД') || 'UNAUTHORIZED');
      }
      // Сгенерировать новые токены (поместив хэш accessToken в пользователя в методе generateTokens)
      const { accessToken, refreshToken, accessTokenExpires } = await this.generateTokens(user);
      // Поместить refreshToken в cookies
      this.putTextIntoCookies({
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
    } catch (e) {
      await this.performLogout(res);
      throw e;
    }
  }
}
