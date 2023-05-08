import { Module } from '@nestjs/common';
import { StudentCloseRelativeResolver } from './student-close-relative.resolver';

@Module({
  providers: [StudentCloseRelativeResolver]
})
export class StudentCloseRelativeModule {}
