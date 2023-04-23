// import {
//   NotAcceptableException, Body, Controller, Get, NotFoundException, Post,
// } from '@nestjs/common';
// import { _throw, assert } from '@common';
// import * as uuid from 'uuid';
// import { Mutation } from '@nestjs/graphql';
// import { StudentEntity } from '@prisma-graphql/student-entity';
// import { Roles } from '../../auth/decorators/roles.decorator';
// import UserRoleEnum from '../../auth/interfaces/user-role.enum';
// import { PrismaService } from '../../../prisma/prisma.service';
// import StudentCreateInput from '../inputs/student-create.input';
// import { StudentService } from '../student.service';
// import StudentUpdateInput from '../inputs/student-update.input';
//
// /**
//  * Контроллер для работы со студентами.
//  */
// @Controller('student')
// export class StudentController {
//   constructor(
//     private readonly prisma: PrismaService,
//     private readonly studentService: StudentService,
//   ) {}
//
//   /**
//    * Получение списка студентов
//    */
//   @Get()
//   @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
//   async students() {
//     return this.prisma.studentEntity.findMany();
//   }
//
//   /**
//    * Создание/регистрация студента
//    */
//   @Post()
//   @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
//   async createStudent(@Body() input: StudentCreateInput) {
//     return this.studentService.createStudent(input);
//   }
//
//   /**
//    * Обновление студента
//    */
//   @Mutation(() => StudentEntity, {
//     description: 'Обновление студента',
//   })
//   @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
//   async updateStudent(
//     @Body() input: StudentUpdateInput,
//   ) {
//     assert(uuid.validate(input.id), new NotAcceptableException('Неверный формат id'));
//     await this.prisma.userEntity.findUniqueOrThrow({ where: { id: input.id } })
//       .catch(_throw(new NotFoundException('Пользователь не найден')));
//     return this.studentService.updateStudent(input);
//   }
//
//   /**
//    * Удаление студента
//    */
//   // @Delete(':id')
//   // @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
//   // async deleteStudent(@Param('id') id: string) {
//   //   const user = await this.prisma.user.findUniqueOrThrow({ where: { id } })
//   //     .catch(_throw(new NotFoundException('Пользователь не найден')));
//   //   return this.prisma.$transaction(async (prisma) => [
//   //     prisma.student.update({ where: { id: user.id }, data: { deletedAt: new Date() } }),
//   //     prisma.user.update({ where: { id: user.id }, data: { deletedAt: new Date() } }),
//   //     prisma.studentPassport.update({ where: { studentId: user.id }, data: { deletedAt: new Date() } }),
//   //     prisma.studentVisa.update({ where: { studentId: user.id }, data: { deletedAt: new Date() } }),
//   //     prisma.studentArrivalNotice.update({ where: { studentId: user.id }, data: { deletedAt: new Date() } }),
//   //     prisma.studentMigrationCard.update({ where: { studentId: user.id }, data: { deletedAt: new Date() } }),
//   //     prisma.studentVisaRequest.updateMany({ where: { studentId: user.id }, data: { deletedAt: new Date() } }),
//   //     prisma.studentCloseRelative.updateMany({ where: { studentId: user.id }, data: { deletedAt: new Date() } }),
//   //   ]);
//   // }
// }
