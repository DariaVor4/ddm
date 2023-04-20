import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ISentMessageInfo } from './sent-message-info.interface';

/**
 * Service with methods for interaction with email
 */
@Injectable()
export class EmailService {
  constructor(
    private mailerService: MailerService,
  ) {}

  // private readonly basicAttachments = [{
  //   filename: 'atr-logo.png',
  //   path: join(__dirname, 'assets', 'atr-logo.png'),
  //   cid: 'atr-logo',
  // }, {
  //   filename: 'softra-logo.png',
  //   path: join(__dirname, 'assets', 'softra-logo.png'),
  //   cid: 'softra-logo',
  // }];

  /**
   * Send a simple text to email
   */
  async sendSimpleText(
    { email, subject, ...context }: { email: string, subject: string, name?: string, message: string },
  ) {
    return await this.mailerService.sendMail({
      to: email,
      subject,
      template: 'simpleText',
      context,
    }) as ISentMessageInfo;
  }
}
