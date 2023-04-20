import assert from '@common/assert';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { TUser } from '@prisma-types';
import bcrypt from 'bcrypt';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '../../../config/config.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { CookieKeys } from '../types/cookie-keys';
import { IAccessTokenPayload } from '../interfaces/access-token-payload.interface';

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

  /**
   * Method automatically callable after access token
   *    validation for additional checks of the current session.
   */
  async validate(req: Request, payload: IAccessTokenPayload, done: Function): Promise<TUser> {
    // Get User
    const user = await this.prisma.user.findFirst({
      where: {
        id: payload.userId,
        tokenHash: { not: null },
        deletedAt: null,
      },
      include: {
        student: true,
        employee: true,
      },
    });
    assert(user?.tokenHash, new UnauthorizedException('User not found or was not authorized'));
    // Check RefreshToken
    const accessToken: string | undefined = req.headers.authorization?.split(' ')[1];
    const refreshToken: string | undefined = req.cookies[CookieKeys.RefreshTokenKey];
    assert(accessToken, new UnauthorizedException('AccessToken not found'));
    assert(refreshToken, new UnauthorizedException('RefreshToken not found'));
    assert(await this.jwtService.verifyAsync(refreshToken, {
      secret: this.configService.config.refreshTokenSecret + accessToken,
      ignoreExpiration: false,
    }), new UnauthorizedException('Invalid RefreshToken'));
    // Check User.tokenHash
    assert(await bcrypt.compare(accessToken, user.tokenHash), new UnauthorizedException('Invalid access token'));
    // Update user.lastActivity
    await this.prisma.user.update({
      where: { id: payload.userId },
      data: { lastActivity: new Date(), updatedAt: user.updatedAt },
    });
    // Return UserEntity
    return user;
  }
}
