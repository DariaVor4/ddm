import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '../../config/config.service';
import { EmailModule } from '../../email/email.module';
import { UserModule } from '../user/user.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './auth.service';
import { AccessTokenStrategy } from './strategies/access-token.strategy';
import { RegistrationController } from './controllers/registration.controller';

/**
 * Module for authorization
 */
@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.config.accessTokenSecret,
        signOptions: {
          expiresIn: configService.config.accessTokenExpires,
        },
        verifyOptions: {
          ignoreExpiration: false,
        },
      }),
    }),
    PassportModule,
    EmailModule,
    UserModule,
  ],
  providers: [
    AuthService,
    AccessTokenStrategy,
  ],
  controllers: [
    AuthController,
    RegistrationController,
  ],
})
export class AuthModule {}
