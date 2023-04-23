import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TUser } from '@prisma-types';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { Response } from 'express';
import { runtimeMode } from '@common';
import * as util from 'util';
import { ConfigService } from '../../config/config.service';
import { PrismaService } from '../../prisma/prisma.service';
import { UserService } from '../user/user.service';
import { IAccessTokenPayload, IAccessTokenPayloadCreate } from './interfaces/access-token-payload.interface';

/**
 * Service implementing authorization,
 * methods of interaction with tokens
 */
@Injectable()
export class AuthService {
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
        return resolve(
          num.toString().slice(0, length).padStart(length, '0'),
        );
      });
    });
  }

  async passwordHash(password: string): Promise<string> {
    return bcrypt.hash(password, this.configService.config.bcryptRounds);
  }

  async passwordCheck(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  public putTextIntoCookies({
    res, key, text, expires,
  }: { res: Response, key:string, text: string, expires: Date }) {
    res.cookie(key, text, {
      path: '/',
      httpOnly: true,
      sameSite: runtimeMode.isProd ? 'strict' : 'none',
      secure: !runtimeMode.isTest,
      expires,
    });
  }
}
