import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TUser } from '@prisma-types';
import bcrypt from 'bcrypt';
import { ConfigService } from '../../config/config.service';
import { EmailService } from '../../email/email.service';
import { PrismaService } from '../../prisma/prisma.service';
import { UserService } from '../user/user.service';
import { IAccessTokenPayload } from './interfaces/access-token-payload.interface';

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
  public async generateTokens(user: TUser) {
    const accessTokenPayload: IAccessTokenPayload = {
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
    await this.prisma.user.update({
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
}
