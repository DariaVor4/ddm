/**
 * Object returned by MailerService.sendMail()
 */
export interface ISentMessageInfo {
  accepted: string[];
  [key: string]: any;
}
