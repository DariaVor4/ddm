import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { Response } from 'express';
import { ConfigService } from '../config/config.service';

@Injectable()
export class SecurityService {
  constructor(
    private readonly configService: ConfigService,
  ) {}

  generateSingleUseCode(): string {
    const length = this.configService.config.confirmationCodeLength;
    return crypto.randomInt(123, 10 ** length)
      .toString()
      .slice(0, length)
      .padStart(length, '0');
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
      httpOnly: true,
      path: '/',
      sameSite: process.env.NODE_ENV === 'development' ? 'none' : undefined,
      secure: process.env.NODE_ENV === 'production',
      expires,
    });
  }
}
