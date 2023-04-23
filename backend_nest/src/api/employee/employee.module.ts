import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { UserModule } from '../user/user.module';
import { EmployeeResolver } from './employee.resolver';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  providers: [EmployeeService, EmployeeResolver],
})
export class EmployeeModule {}
