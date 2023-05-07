import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ISentMessageInfo } from './sent-message-info.interface';

/**
 * Service with methods for interaction with email
 */
@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  // private readonly basicAttachments = [{
  //   filename: 'atr-logo.png',
  //   path: join(__dirname, 'assets', 'atr-logo.png'),
  //   cid: 'atr-logo',
  // }, {
  //   filename: 'company-logo.png',
  //   path: join(__dirname, 'assets', 'company-logo.png'),
  //   cid: 'company-logo',
  // }];

  /**
   * Send a simple text to email
   */
  async sendSimpleText(
    { email, subject, ...context }: { email: string, subject: string, name?: string, message: string },
  ): Promise<ISentMessageInfo> {
    return this.mailerService.sendMail({
      to: email,
      subject,
      template: 'simpleText',
      context,
    });
  }
}
