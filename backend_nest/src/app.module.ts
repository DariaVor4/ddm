import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './api/auth/auth.module';
import { JwtGuard } from './api/auth/guards/jwt.guard';
import { RolesGuard } from './api/auth/guards/roles.guard';
import { ConfigModule } from './config/config.module';
import { EmailModule } from './email/email.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './api/user/user.module';
import { SecurityModule } from './security/security.module';
import { EmployeeModule } from './api/employee/employee.module';
import { StudentModule } from './api/student/student.module';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
    PrismaModule,
    UserModule,
    EmailModule,
    SecurityModule,
    StudentModule,
    EmployeeModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}
