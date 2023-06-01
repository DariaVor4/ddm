import {
  Args, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import { ForbiddenException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { _throw, isRoleAdmin } from '@common';
import { EmployeeEntity } from '@prisma-nestjs-graphql';
import { Prisma } from '@prisma/client';
import { UUID } from '@common/scalars';
import { PrismaService } from '../../prisma/prisma.service';
import { EmployeeService } from './employee.service';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/user-role.enum';
import EmployeeCreateInput from './inputs/employee-create.input';
import { CurrentSession, ISessionContext } from '../auth/decorators/current-session.decorator';
import EmployeeUpdateInput from './inputs/employee-update.input';
import { PrismaSelector } from '../../prisma/decorators/prisma-selector.decorator';
import { EmployeeUpsertInput } from './inputs/employee-upsert.input';

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
   * @param select Запрошенные поля через GraphQL.
   * @return Список сотрудников.
   */
  @Query(() => [EmployeeEntity], {
    description: 'Выборка всех сотрудников',
  })
  @Roles(UserRoleEnum.Admin)
  async employees(@PrismaSelector() select: Prisma.EmployeeEntitySelect): Promise<EmployeeEntity[]> {
    return await this.prisma.employeeEntity.findMany({ select }) as EmployeeEntity[];
  }

  /**
   * Получение сотрудника по id.
   * @param employeeId Идентификатор сотрудника.
   * @param select Запрошенные поля через GraphQL.
   */
  @Query(() => EmployeeEntity, {
    description: 'Получение сотрудника по id',
  })
  @Roles(UserRoleEnum.Admin)
  async employee(
    @Args('employeeId', { type: UUID }) employeeId: string,
    @PrismaSelector() select: Prisma.EmployeeEntitySelect,
  ): Promise<EmployeeEntity> {
    return await this.prisma.employeeEntity.findUniqueOrThrow({ where: { id: employeeId }, select })
      .catch(_throw(new NotFoundException('Сотрудник не найден'))) as EmployeeEntity;
  }

  /**
   * Создание сотрудника.
   * @param input Данные для создания.
   * @return Созданный сотрудник.
   * @throws {InternalServerErrorException} Ошибка при создании сотрудника.
   */
  @Mutation(() => EmployeeEntity, {
    description: 'Создание сотрудника',
  })
  @Roles(UserRoleEnum.Admin)
  async createEmployee(
    @Args('input') input: EmployeeCreateInput,
  ): Promise<EmployeeEntity> {
    return this.employeeService.createEmployee(input)
      .catch(_throw((e) => new InternalServerErrorException(`Ошибка при создании сотрудника: ${e.message}`)));
  }

  /**
   * Перезапись сотрудника.
   * Если передан идентификатор сотрудника, то происходит обновление существующего сотрудника, иначе создание нового.
   * @param input Данные для перезаписи.
   * @param ctx Контекст текущей сессии пользователя.
   * @param select Запрошенные поля через GraphQL.
   * @param employeeId Идентификатор сотрудника.
   * @return Созданный или обновленный сотрудник.
   * @throws {ForbiddenException} Сотрудник не может обновлять профиль другого сотрудника.
   */
  @Mutation(() => EmployeeEntity, {
    description: 'Перезапись сотрудника',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  async employeeUpsert(
    @Args('input') input: EmployeeUpsertInput,
    @CurrentSession() ctx: ISessionContext,
    @PrismaSelector() select: Prisma.EmployeeEntitySelect,
    @Args('employeeId', { type: UUID, nullable: true }) employeeId?: string,
  ) {
    if (!isRoleAdmin(ctx.roles)) {
      if (ctx.userId !== employeeId) {
        throw new ForbiddenException('Вы не можете обновлять профиль другого сотрудника');
      }
      if (ctx.userEmail !== input.email) {
        // TODO: unimplemented
        throw new ForbiddenException('Unimplemented: Вы не можете обновлять email без его подтверждения');
      }
    }
    return this.employeeService.employeeUpsert(input, employeeId, select);
  }

  /**
   * Перезапись сотрудника.
   * @param input Данные для перезаписи.
   * @param ctx Контекст текущей сессии пользователя.
   * @return Успешность перезаписи.
   * @throws {ForbiddenException} Вы не можете обновлять профиль другого сотрудника.
   * @throws {InternalServerErrorException} Ошибка при обновлении сотрудника.
   */
  @Mutation(() => Boolean, {
    description: 'Перезапись сотрудника',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  async updateEmployee(
    @Args('input') input: EmployeeUpdateInput,
    @CurrentSession() ctx: ISessionContext,
  ): Promise<boolean> {
    if (ctx.userId !== input.id || !isRoleAdmin(ctx.roles)) {
      throw new ForbiddenException('Вы не можете обновлять профиль другого сотрудника');
    }
    return !!await this.employeeService.updateEmployee(input)
      .catch(_throw((e) => new InternalServerErrorException(`Ошибка при обновлении сотрудника: ${e.message}`)));
  }

  /**
   * Удаление сотрудника.
   * @param employeeId Идентификатор сотрудника.
   * @return Успешность удаления.
   * @throws {NotFoundException} Сотрудник не найден.
   * @throws {InternalServerErrorException} Ошибка при удалении сотрудника.
   */
  @Mutation(() => Boolean, {
    description: 'Удаление сотрудника',
  })
  @Roles(UserRoleEnum.Admin)
  async deleteEmployee(
    @Args('employeeId', { type: UUID }) employeeId: string,
  ): Promise<boolean> {
    if (await this.prisma.employeeEntity.count({ where: { id: employeeId } }) === 0) {
      throw new NotFoundException('Сотрудник не найден');
    }
    return this.prisma.$transaction(
      async (prisma) => !!await prisma.employeeEntity.delete({ where: { id: employeeId } })
        && !!await prisma.userEntity.delete({ where: { id: employeeId } }),
    ).catch(_throw((e) => new InternalServerErrorException(`Ошибка при удалении сотрудника: ${e.message}`)));
  }
}
