import { ifDebug, runtimeMode, throwCb } from '@common';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import bcrypt from 'bcrypt';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { ConfigService } from '../../../config/config.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { CookieKeysEnum } from '../enums/cookie-keys.enum';
import { IAccessTokenPayload } from '../interfaces/access-token-payload.interface';
import { ISessionContext } from '../decorators/current-session.decorator';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.config.accessTokenSecret,
      passReqToCallback: true,
    });
  }

  // noinspection JSUnusedLocalSymbols
  /**
   * Method automatically callable after access token
   *    validation for additional checks of the current session.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-types
  async validate(req: Request, payload: IAccessTokenPayload, done: Function): Promise<ISessionContext> {
    // Get User
    const user = await this.prisma.userEntity.findFirstOrThrow({
      where: {
        id: payload.userId,
        tokenHash: { not: null },
      },
      select: {
        id: true,
        email: true,
        tokenHash: true,
        updatedAt: true,
      },
    }).catch(throwCb(new UnauthorizedException('User not found or was not authorized')));
    // Check RefreshToken
    const accessToken: string | undefined = req.headers.authorization?.split(' ')[1];
    const refreshToken: string | undefined = req.cookies[CookieKeysEnum.RefreshTokenKey];
    if (!accessToken) {
      throw new UnauthorizedException(ifDebug('AccessToken not found'));
    }
    if (!runtimeMode.isDev) {
      if (!refreshToken) {
        throw new UnauthorizedException('RefreshToken not found');
      }
      if (!await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.config.refreshTokenSecret + accessToken,
        ignoreExpiration: false,
      }).catch(() => false)) {
        throw new UnauthorizedException('Invalid RefreshToken');
      }
    }
    // Check User.tokenHash
    if (!accessToken || !user.tokenHash || !(await bcrypt.compare(accessToken, user.tokenHash))) {
      throw new UnauthorizedException('Invalid AccessToken');
    }
    // Update user.lastActivity
    await this.prisma.userEntity.update({
      where: { id: payload.userId },
      data: { lastActivity: new Date(), updatedAt: user.updatedAt },
    });
    // Return UserEntity
    return {
      userId: user.id,
      userEmail: user.email,
      // accessToken,
      // refreshToken,
      roles: payload.roles,
      accessTokenExpires: new Date(payload.exp * 1000),
      // cookies: req.cookies,
      // headers: req.headers,
    };
  }
}
