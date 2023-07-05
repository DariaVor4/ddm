import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationResolver } from './notification.resolver';
import { EmailModule } from '../../email/email.module';
import { BotsModule } from '../../bots/bots.module';

@Module({
  imports: [
    EmailModule,
    BotsModule,
  ],
  providers: [
    NotificationService,
    NotificationResolver,
  ],
})
export class NotificationModule {}
