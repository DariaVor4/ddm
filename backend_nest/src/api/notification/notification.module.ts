import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationResolver } from './notification.resolver';
import { EmailModule } from '../../email/email.module';

@Module({
  imports: [EmailModule],
  providers: [NotificationService, NotificationResolver],
})
export class NotificationModule {}
