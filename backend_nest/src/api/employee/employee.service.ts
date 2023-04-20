import { Injectable, NotAcceptableException } from '@nestjs/common';
import { TEmployee, TUser } from '@prisma-types';
import { assert } from '@common';
import { isNil, pick } from 'lodash';
import { PrismaService } from '../../prisma/prisma.service';
import { SecurityService } from '../../security/security.service';
import { UserService } from '../user/user.service';
import { EmployeeCreateInputSchema, IEmployeeCreateInput } from './inputs/employee-create.input';
import { EmployeeUpdateInputSchema, IEmployeeUpdateInput } from './inputs/employee-update.input';

@Injectable()
export class EmployeeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly securityService: SecurityService,
    private readonly userService: UserService,
  ) {}

  async createEmployee(unsafeInput: IEmployeeCreateInput) {
    const { value: safeInput, error } = EmployeeCreateInputSchema.validate(unsafeInput);
    assert(!error, new NotAcceptableException(`Некорректный ввод: ${error?.message}`));
    assert(
      await this.userService.isEmailFree(safeInput.email),
      new NotAcceptableException('Пользователь с таким email уже существует'),
    );
    const [userProperties, employeeProperties] = [
      pick(safeInput, ['email'] satisfies (keyof TUser & keyof IEmployeeCreateInput)[]),
      pick(safeInput, ['lastName', 'firstName', 'patronymic', 'isAdmin'] satisfies (keyof TEmployee & keyof IEmployeeCreateInput)[]),
    ];
    return this.prisma.user.create({
      data: {
        ...userProperties,
        password: await this.securityService.passwordHash(safeInput.password),
        employee: {
          create: employeeProperties,
        },
      },
    });
  }

  async updateEmployee(unsafeInput: IEmployeeUpdateInput) {
    const { value: safeInput, error } = EmployeeUpdateInputSchema.validate(unsafeInput);
    assert(!error, new NotAcceptableException(`Некорректный ввод: ${error?.message}`));
    assert(
      isNil(safeInput.email) || await this.userService.isEmailFree(safeInput.email, safeInput.id),
      new NotAcceptableException('Пользователь с таким email уже существует'),
    );
    const [userProperties, employeeProperties] = [
      pick(safeInput, ['email'] satisfies (keyof TUser & keyof IEmployeeUpdateInput)[]),
      pick(safeInput, ['lastName', 'firstName', 'patronymic', 'isAdmin'] satisfies (keyof TEmployee & keyof IEmployeeUpdateInput)[]),
    ];
    return this.prisma.user.update({
      where: { id: safeInput.id },
      data: {
        ...userProperties,
        password: safeInput.password && await this.securityService.passwordHash(safeInput.password),
        employee: {
          update: employeeProperties,
        },
      },
    });
  }
}
