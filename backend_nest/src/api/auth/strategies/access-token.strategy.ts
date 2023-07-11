import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '../../../config/config.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { AuthService } from '../auth.service';
import { ISessionContext } from '../decorators/current-session.decorator';
import { CookieKeysEnum } from '../enums/cookie-keys.enum';
import { IAccessTokenPayload } from '../interfaces/access-token-payload.interface';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
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
    return this.authService.checkAuth({
      accessToken: req.headers.authorization?.split(' ')[1],
      refreshToken: req.cookies[CookieKeysEnum.RefreshTokenKey],
      payload,
    });
  }
}
