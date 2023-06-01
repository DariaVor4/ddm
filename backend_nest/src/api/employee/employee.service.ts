import {BadRequestException, Injectable, NotAcceptableException} from '@nestjs/common';
import { pick } from 'lodash';
import { EmployeeEntity, UserEntity } from '@prisma-nestjs-graphql';
import { Prisma } from '@prisma/client';
import { PartialDeep } from 'type-fest';
import { PrismaService } from '../../prisma/prisma.service';
import { UserService } from '../user/user.service';
import EmployeeCreateInput from './inputs/employee-create.input';
import EmployeeUpdateInput from './inputs/employee-update.input';
import { AuthService } from '../auth/auth.service';
import { EmployeeUpsertInput } from './inputs/employee-upsert.input';
import {_throw} from "@common";
import {elseThrow} from "@common/_throw";

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
   * Перезапись сотрудника.
   */
  async employeeUpsert(
    input: EmployeeUpsertInput,
    employeeId?: string,
    select?: Prisma.EmployeeEntitySelect,
  ): Promise<PartialDeep<EmployeeEntity>> {
    const [userProperties, employeeProperties] = [
      pick(input, ['email', 'password'] satisfies (keyof UserEntity & keyof EmployeeUpsertInput)[]),
      pick(input, ['lastName', 'firstName', 'patronymic', 'isAdmin'] satisfies (keyof EmployeeEntity & keyof EmployeeUpsertInput)[]),
    ];
    if (input.email && !await this.userService.isEmailFree(input.email)) {
      throw new NotAcceptableException('Пользователь с таким email уже существует');
    }
    if (employeeId) {
      // Update
      if (!await this.prisma.employeeEntity.count({ where: { id: employeeId } })) {
        throw new NotAcceptableException('Сотрудник не найден');
      }
      return this.prisma.employeeEntity.update({
        select,
        where: { id: employeeId },
        data: {
          ...employeeProperties,
          user: {
            update: {
              ...userProperties,
              password: userProperties.password ? await this.authService.passwordHash(userProperties.password) : undefined,
            },
          },
        },
      });
    }
    // Create
    if (!employeeId && (!userProperties.email || !userProperties.password)) {
      throw new NotAcceptableException('При создании сотрудника email и пароль обязательны');
    }
    return this.prisma.employeeEntity.create({
      select,
      data: {
        ...employeeProperties,
        user: {
          create: {
            ...userProperties,
            email: userProperties.email || elseThrow(new BadRequestException('Email обязателен при создании сотрудника')),
            password: await this.authService.passwordHash(userProperties.password || elseThrow(new BadRequestException('Пароль обязателен при создании сотрудника'))),
          },
        },
      },
    });
  }

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
