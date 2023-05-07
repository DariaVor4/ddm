import { Injectable, NotAcceptableException } from '@nestjs/common';
import { pick } from 'lodash';
import { EmployeeEntity, UserEntity } from '@prisma-nestjs-graphql';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { UserService } from '../user/user.service';
import EmployeeCreateInput from './inputs/employee-create.input';
import EmployeeUpdateInput from './inputs/employee-update.input';
import { AuthService } from '../auth/auth.service';

/**
 * Сервис для работы с сотрудниками.
 */
@Injectable()
export class EmployeeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  /**
   * Создание сотрудника.
   */
  async createEmployee(input: EmployeeCreateInput, select?: Prisma.EmployeeEntitySelect): Promise<EmployeeEntity> {
    if (!await this.userService.isEmailFree(input.email)) {
      throw new NotAcceptableException('Пользователь с таким email уже существует');
    }
    const [userProperties, employeeProperties] = [
      pick(input, ['email'] satisfies (keyof UserEntity & keyof EmployeeCreateInput)[]),
      pick(input, ['lastName', 'firstName', 'patronymic', 'isAdmin'] satisfies (keyof EmployeeEntity & keyof EmployeeCreateInput)[]),
    ];
    return await this.prisma.employeeEntity.create({
      data: {
        ...employeeProperties,
        user: {
          create: {
            ...userProperties,
            password: await this.authService.passwordHash(input.password),
          },
        },
      },
      select,
    }) as EmployeeEntity;
  }

  /**
   * Обновление сотрудника.
   */
  async updateEmployee(input: EmployeeUpdateInput, select?: Prisma.EmployeeEntitySelect): Promise<EmployeeEntity> {
    if (input.email && !await this.userService.isEmailFree(input.email, { exceptUserId: input.id })) {
      throw new NotAcceptableException('Пользователь с таким email уже существует');
    }
    const [userProperties, employeeProperties] = [
      pick(input, ['email'] satisfies (keyof UserEntity & keyof EmployeeUpdateInput)[]),
      pick(input, ['lastName', 'firstName', 'patronymic', 'isAdmin'] satisfies (keyof EmployeeEntity & keyof EmployeeUpdateInput)[]),
    ];
    return await this.prisma.employeeEntity.update({
      where: { id: input.id },
      data: {
        ...employeeProperties,
        user: {
          update: {
            ...userProperties,
            password: input.password ? await this.authService.passwordHash(input.password) : undefined,
          },
        },
      },
      select,
    }) as EmployeeEntity;
  }
}
