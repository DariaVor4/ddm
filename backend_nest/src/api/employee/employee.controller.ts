// import {
//   Body, Controller, Delete, ForbiddenException, Get, NotFoundException, Param, Post,
// } from '@nestjs/common';
// import { _throw, assert } from '@common';
// import * as uuid from 'uuid';
// import { merge } from 'lodash';
// import filterPrivate from '@common/changeValue';
// import { TEmployee, TUser } from '@prisma-types';
// import { PrismaService } from '../../prisma/prisma.service';
// import { EmployeeService } from './employee.service';
// import { Roles } from '../auth/decorators/roles.decorator';
// import UserRoleEnum from '../auth/interfaces/user-role.enum';
// import { IEmployeeCreateInput } from './inputs/employee-create.input';
// import { IEmployeeUpdateInput } from './inputs/employee-update.input';
// import { CurrentUser } from '../auth/decorators/current-user.decorator';
// import { UserService } from '../user/user.service';
//
// /**
//  * Контроллер для работы со сотрудниками.
//  */
// @Controller('employee')
// export class EmployeeController {
//   constructor(
//     private readonly prisma: PrismaService,
//     private readonly employeeService: EmployeeService,
//     private readonly userService: UserService,
//   ) {}
//
//   /**
//    * Выборка всех сотрудников.
//    */
//   @Get()
//   @Roles(UserRoleEnum.Admin)
//   async getEmployees() {
//     return filterPrivate(...await this.prisma.user.findMany({ include: { employee: true } }));
//   }
//
//   /**
//    * Выборка сотрудника по id.
//    */
//   @Get(':id')
//   @Roles(UserRoleEnum.Admin)
//   async getEmployeeById(@Param('id') id: string) {
//     assert(uuid.validate(id), new NotFoundException('Некорректный id'));
//     return filterPrivate(await this.prisma.user.findUniqueOrThrow({
//       where: { id },
//       include: {
//         employee: true,
//       },
//     }).catch(_throw(new NotFoundException('Сотрудник не найден'))));
//   }
//
//   /**
//    * Создание сотрудника.
//    */
//   @Post()
//   @Roles(UserRoleEnum.Admin)
//   async createEmployee(
//     @Body() input: IEmployeeCreateInput,
//   ): Promise<TUser> {
//     return this.employeeService.createEmployee(input);
//   }
//
//   /**
//    * Обновление сотрудника.
//    */
//   @Post(':id')
//   @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
//   async updateEmployee(
//     @Param('id') id: string,
//     @CurrentUser() user: TUser,
//     @Body() input: IEmployeeUpdateInput,
//   ): Promise<TUser> {
//     // Любой сотрудник может обновить свой профиль, но только админ может обновлять других.
//     if (user.id === id || await this.userService.getUserRoles(user.id).then((roles) => roles.includes(UserRoleEnum.Admin))) {
//       throw new ForbiddenException('Нет доступа');
//     }
//     merge(input, { id });
//     return this.employeeService.updateEmployee(input);
//   }
//
//   /**
//    * Удаление сотрудника.
//    */
//   @Delete(':id')
//   @Roles(UserRoleEnum.Admin)
//   async deleteEmployee(
//     @Param('id') id: string,
//   ): Promise<TEmployee> {
//     assert(uuid.validate(id), new NotFoundException('Некорректный id'));
//     return this.prisma.employee.delete({ where: { id } });
//   }
// }
