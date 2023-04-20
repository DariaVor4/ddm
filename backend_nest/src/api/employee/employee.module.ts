import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
