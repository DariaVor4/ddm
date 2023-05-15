import { Module } from '@nestjs/common';
import { StudentPassportResolver } from './student-passport.resolver';
import { StudentModule } from '../student/student.module';

@Module({
  providers: [StudentPassportResolver],
  imports: [StudentModule],
})
export class StudentPassportModule {}
