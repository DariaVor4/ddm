import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { EmailModule } from '../../email/email.module';
import { UserModule } from '../user/user.module';
import { StudentResolver } from './resolvers/student.resolver';
import { StudentRegistrationResolver } from './resolvers/student-registration.resolver';
import { AuthModule } from '../auth/auth.module';
import { StudentDocumentsService } from './student-documents.service';

@Module({
  imports: [
    AuthModule,
    EmailModule,
    StudentModule,
    UserModule,
  ],
  providers: [
    StudentService,
    StudentDocumentsService,
    StudentResolver,
    StudentRegistrationResolver,
  ],
  exports: [
    StudentDocumentsService,
  ],
})
export class StudentModule {}
