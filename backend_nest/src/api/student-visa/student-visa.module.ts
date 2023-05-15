import { Module } from '@nestjs/common';
import { StudentVisaResolver } from './student-visa.resolver';
import { StudentModule } from '../student/student.module';

@Module({
  providers: [StudentVisaResolver],
  imports: [StudentModule],
})
export class StudentVisaModule {}
