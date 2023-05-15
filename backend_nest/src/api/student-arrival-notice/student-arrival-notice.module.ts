import { Module } from '@nestjs/common';
import { StudentArrivalNoticeResolver } from './student-arrival-notice.resolver';
import { StudentModule } from '../student/student.module';

@Module({
  providers: [StudentArrivalNoticeResolver],
  imports: [StudentModule],
})
export class StudentArrivalNoticeModule {}
