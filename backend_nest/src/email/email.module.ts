import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { Module } from '@nestjs/common';
import path from 'path';
import { ConfigService } from '../config/config.service';
import { EmailService } from './email.service';

/**
 * A module that implements business logic via a mailer package
 */
@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
        transport: {
          host: configService.config.mailer.host,
          secure: false,
          auth: {
            user: configService.config.mailer.user,
            pass: configService.config.mailer.password,
          },
          tls: {
            rejectUnauthorized: false,
          },
        },
        defaults: { from: configService.config.mailer.defaultFrom },
        template: {
          dir: path.join(__dirname, 'templates'),
          // or new HandlebarsAdapter() or new EjsAdapter()
          adapter: new PugAdapter({ inlineCssEnabled: true }),
          options: { strict: true },
        },
      }),
    }),
  ],
  providers: [EmailService],
  exports: [EmailService], // 👈 export for DI
})
export class EmailModule {}
