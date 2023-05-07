import {
  Args, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import { ForbiddenException, NotFoundException, Param } from '@nestjs/common';
import { _throw, assert, isRoleAdmin } from '@common';
import * as uuid from 'uuid';
import { EmployeeEntity } from '@prisma-nestjs-graphql';
import { Prisma } from '@prisma/client';
import { EmailAddress, UUID } from '@common/scalars';
import { PrismaService } from '../../prisma/prisma.service';
import { EmployeeService } from './employee.service';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/user-role.enum';
import EmployeeCreateInput from './inputs/employee-create.input';
import { CurrentSession, ISessionContext } from '../auth/decorators/current-session.decorator';
import EmployeeUpdateInput from './inputs/employee-update.input';
import { PrismaSelector } from '../../prisma/decorators/prisma-selector.decorator';

/**
 * Контроллер для работы со сотрудниками.
 */
@Resolver('employee')
export class EmployeeResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly employeeService: EmployeeService,
  ) {}

  /**
   * Выборка всех сотрудников.
   */
  @Query(() => [EmployeeEntity], {
    description: 'Выборка всех сотрудников',
  })
  @Roles(UserRoleEnum.Admin)
  async getEmployees(@PrismaSelector() select: Prisma.EmployeeEntitySelect): Promise<EmployeeEntity[]> {
    return await this.prisma.employeeEntity.findMany({ select }) as EmployeeEntity[];
  }

  /**
   * Выборка сотрудника по id.
   */
  @Query(() => EmployeeEntity, {
    description: 'Выборка сотрудника по id',
  })
  @Roles(UserRoleEnum.Admin)
  async getEmployeeById(
    @Param('id') id: string,
    @PrismaSelector() select: Prisma.EmployeeEntitySelect,
  ): Promise<EmployeeEntity> {
    assert(uuid.validate(id), new NotFoundException('Некорректный id'));
    return await this.prisma.employeeEntity
      .findUniqueOrThrow({ where: { id }, select })
      .catch(_throw(new NotFoundException('Сотрудник не найден'))) as EmployeeEntity;
  }

  /**
   * Создание сотрудника.
   */
  @Mutation(() => EmployeeEntity, {
    description: 'Создание сотрудника',
  })
  @Roles(UserRoleEnum.Admin)
  async createEmployee(
    @Args('input') input: EmployeeCreateInput,
    @PrismaSelector() select: Prisma.EmployeeEntitySelect,
  ): Promise<EmployeeEntity> {
    return this.employeeService.createEmployee(input, select);
  }

  /**
   * Обновление сотрудника.
   */
  @Mutation(() => EmployeeEntity, {
    description: 'Обновление сотрудника',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  async updateEmployee(
    @Args('input') input: EmployeeUpdateInput,
    @CurrentSession() ctx: ISessionContext,
    @PrismaSelector() select: Prisma.EmployeeEntitySelect,
  ): Promise<EmployeeEntity> {
    if (ctx.userId !== input.id || !isRoleAdmin(ctx.roles)) {
      throw new ForbiddenException('Вы не можете обновлять профиль другого сотрудника');
    }
    return this.employeeService.updateEmployee(input, select);
  }

  /**
   * Удаление сотрудника.
   */
  @Mutation(() => EmployeeEntity, {
    description: 'Удаление сотрудника',
  })
  @Roles(UserRoleEnum.Admin)
  async deleteEmployee(
    @Args('id', { type: UUID }) id: string,
    @PrismaSelector() select: Prisma.EmployeeEntitySelect,
  ): Promise<EmployeeEntity> {
    const result = await this.prisma.employeeEntity.delete({
      where: { id },
      select,
    }) as EmployeeEntity;
    await this.prisma.userEntity.delete({ where: { id } });
    return result;
  }
}
