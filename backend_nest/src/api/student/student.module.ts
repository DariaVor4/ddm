import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentRegistrationController } from './student-registration.controller';
import { EmailModule } from '../../email/email.module';
import { StudentController } from './student.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    EmailModule,
    StudentModule,
    UserModule,
  ],
  providers: [
    StudentService,
  ],
  controllers: [StudentRegistrationController, StudentController],
})
export class StudentModule {}
