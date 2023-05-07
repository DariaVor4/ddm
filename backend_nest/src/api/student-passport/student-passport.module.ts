import { Module } from '@nestjs/common';
import { StudentPassportResolver } from './student-passport.resolver';

@Module({
  providers: [StudentPassportResolver],
})
export class StudentPassportModule {}
