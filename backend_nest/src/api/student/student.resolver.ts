// import assert from '@common/assert';
// import { NotAcceptableException } from '@nestjs/common';
// import {
//   Args, Mutation, Query, Resolver,
// } from '@nestjs/graphql';
// import { Prisma } from '@prisma-client';
// import {
//   Student, StudentCreateInput, StudentUpdateInput, StudentWhereInput, UpdateOneStudentArgs,
// } from '@prisma-graphql/student';
// import { validate } from 'uuid';
// import { PrismaSelector } from '../../prisma/decorators/prisma-selector.decorator';
// import { PrismaService } from '../../prisma/prisma.service';
// import { Roles } from '../auth/decorators/roles.decorator';
// import UserRoleEnum from '../auth/interfaces/UserRoleEnum';
// import StudentFindFirstArgs = Prisma.StudentFindFirstArgs;
// import StudentFindManyArgs = Prisma.StudentFindManyArgs;
// import StudentCreateArgs = Prisma.StudentCreateArgs;
// import StudentSelect = Prisma.StudentSelect;
// import StudentFindFirstArgsBase = Prisma.StudentFindFirstArgsBase;
// import StudentUpdateArgs = Prisma.StudentUpdateArgs;
//
// @Resolver(() => Student)
// export class StudentResolver {
//   constructor(private readonly prisma: PrismaService) {}
//
//   @Query(() => [Student])
//   @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
//   async students(
//     @PrismaSelector('value') select: StudentFindManyArgs,
//     @Args('where', { nullable: true }) where?: StudentWhereInput,
//   ): Promise<Partial<Student>[]> {
//     return this.prisma.student.findMany({
//       where: {
//         ...where,
//         deletedAt: null,
//       },
//       ...select,
//     });
//   }
//
//   @Query(() => Student)
//   @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
//   async student(
//     @PrismaSelector('value') select: StudentFindFirstArgs,
//     @Args('id', { nullable: true }) id?: string,
//     @Args('email', { nullable: true }) email?: string,
//   ): Promise<Student> {
//     assert(id || email, new NotAcceptableException('Необходимо указать либо id, либо email'));
//     assert(!id || validate(id), new NotAcceptableException('Неверный uuid'));
//     const student = await this.prisma.student.findFirst({
//       where: {
//         id,
//         user: { email },
//       },
//       ...select,
//     });
//     assert(student, new NotAcceptableException('Студент не найден'));
//     return student;
//   }
//
//   @Mutation(() => Student, {
//     description: 'Создание студента',
//   })
//   @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
//   async studentCreate(
//     @PrismaSelector('value') select: StudentCreateArgs,
//     @Args('data') data: StudentCreateInput,
//   ): Promise<Student> {
//     return this.prisma.student.create({ ...select, data });
//   }
//
//   @Mutation(() => Student, {
//     description: 'Обновление студента',
//   })
//   @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
//   async studentUpdate(
//     @PrismaSelector('value') select: StudentUpdateArgs,
//     // @Args('data') data: StudentUpdateInput,
//     // @Args('id') id: string,
//     @Args() args: UpdateOneStudentArgs,
//   ): Promise<Student> {
//     // assert(validate(id), new NotAcceptableException('Неверный uuid'));
//     // return this.prisma.student.update({ ...select, where: { id }, data });
//     return this.prisma.student.update({
//       ...select,
//       ...args,
//     });
//   }
// }
