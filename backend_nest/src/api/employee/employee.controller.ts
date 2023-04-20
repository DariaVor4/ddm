import {
  Body, Controller, Delete, Get, NotFoundException, Param, Post,
} from '@nestjs/common';
import { _throw, assert } from '@common';
import * as uuid from 'uuid';
import { merge } from 'lodash';
import { PrismaService } from '../../prisma/prisma.service';
import { EmployeeService } from './employee.service';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/UserRoleEnum';
import { IEmployeeCreateInput } from './inputs/employee-create.input';
import { IEmployeeUpdateInput } from './inputs/employee-update.input';

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly employeeService: EmployeeService,
  ) {}

  @Get()
  @Roles(UserRoleEnum.Admin)
  async getEmployees() {
    return this.prisma.employee.findMany();
  }

  @Get(':id')
  @Roles(UserRoleEnum.Admin)
  async getEmployeeById(id: string) {
    assert(uuid.validate(id), new NotFoundException('Некорректный id'));
    return this.prisma.user.findUniqueOrThrow({
      where: { id },
      include: {
        employee: true,
      },
    }).catch(_throw(new NotFoundException('Сотрудник не найден')));
  }

  @Post()
  @Roles(UserRoleEnum.Admin)
  async createEmployee(
    @Body() input: IEmployeeCreateInput,
  ) {
    return this.employeeService.createEmployee(input);
  }

  @Post(':id')
  @Roles(UserRoleEnum.Admin)
  async updateEmployee(
    @Param('id') id: string,
    @Body() input: IEmployeeUpdateInput,
  ) {
    merge(input, { id });
    return this.employeeService.updateEmployee(input);
  }

  @Delete(':id')
  @Roles(UserRoleEnum.Admin)
  async deleteEmployee(
    @Param('id') id: string,
  ) {
    assert(uuid.validate(id), new NotFoundException('Некорректный id'));
    return this.prisma.employee.delete({ where: { id } });
  }
}
