import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { EmployeeModule } from './employee/employee.module';
import { StudentPassportModule } from './student-passport/student-passport.module';
import { StudentArrivalNoticeModule } from './student-arrival-notice/student-arrival-notice.module';
import { StudentCloseRelativeModule } from './student-close-relative/student-close-relative.module';
import { StudentMigrationCardModule } from './student-migration-card/student-migration-card.module';
import { StudentVisaModule } from './student-visa/student-visa.module';
import { VisaRequestModule } from './visa-request/visa-request.module';
import { FileModule } from './file/file.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    StudentModule,
    EmployeeModule,
    StudentPassportModule,
    StudentArrivalNoticeModule,
    StudentCloseRelativeModule,
    StudentMigrationCardModule,
    StudentVisaModule,
    VisaRequestModule,
    FileModule,
    NotificationModule,
  ],
})
export class ApiModule {}
