import { Module } from '@nestjs/common';
import { StudentArrivalNoticeResolver } from './student-arrival-notice.resolver';

@Module({
  providers: [StudentArrivalNoticeResolver]
})
export class StudentArrivalNoticeModule {}
