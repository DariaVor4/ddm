import {
  Args, Int, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { _throw, assert, isRoleAdminOrEmployee } from '@common';
import * as uuid from 'uuid';
import { Prisma } from '@prisma/client';
import { StudentEntity } from '@prisma-nestjs-graphql';
import { UUID } from '@common/scalars';
import { GraphQLUUID } from 'graphql-scalars';
import { PrismaService } from '../../../prisma/prisma.service';
import { StudentService } from '../student.service';
import { Roles } from '../../auth/decorators/roles.decorator';
import UserRoleEnum from '../../auth/interfaces/user-role.enum';
import StudentCreateInput from '../inputs/student-create.input';
import StudentUpdateInput from '../inputs/student-update.input';
import { PrismaSelector } from '../../../prisma/decorators/prisma-selector.decorator';
import { CurrentSession, ISessionContext } from '../../auth/decorators/current-session.decorator';

/**
 * Резолвер для работы со студентами.
 */
@Resolver('student')
export class StudentResolver {
  constructor(private readonly prisma: PrismaService, private readonly studentService: StudentService) {}

  /**
   * Получение списка студентов.
   */
  @Query(() => [StudentEntity], {
    description: 'Получение списка студентов.',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  async students(@PrismaSelector() select: Prisma.StudentEntitySelect): Promise<Partial<StudentEntity>[]> {
    return this.prisma.studentEntity.findMany({ select });
  }

  /**
   * Получение студента по id.
   */
  @Query(() => StudentEntity, {
    description: 'Получение студента по id.',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  async student(
    @Args('id', { type: UUID }) id: string,
    @PrismaSelector() select: Prisma.StudentEntitySelect,
  ): Promise<Partial<StudentEntity>> {
    assert(uuid.validate(id), new NotFoundException('Некорректный id'));
    return this.prisma.studentEntity.findFirstOrThrow({ where: { id }, select })
      .catch(_throw(new NotFoundException('Студент не найден')));
  }

  /**
   * Создание/регистрация студента.
   */
  @Mutation(() => StudentEntity, {
    description: 'Создание/регистрация студента.',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  async studentCreate(
    @Args('input') input: StudentCreateInput,
    @PrismaSelector() select: Prisma.StudentEntitySelect,
  ): Promise<Partial<StudentEntity>> {
    return this.studentService.studentCreate(input, select);
  }

  /**
   * Обновление студента.
   */
  @Mutation(() => StudentEntity, {
    description: 'Обновление студента.',
  })
  @Roles(UserRoleEnum.Any)
  async studentUpdate(
    @Args('input') input: StudentUpdateInput,
    @CurrentSession() session: ISessionContext,
    @PrismaSelector() select: Prisma.StudentEntitySelect,
  ): Promise<Partial<StudentEntity>> {
    if (!isRoleAdminOrEmployee(session.roles)) {
      if (session.userId !== input.id) {
        throw new ForbiddenException('Вы не можете обновить данные другого студента');
      }
      if (input.email && session.userEmail !== input.email) {
        throw new ForbiddenException('Нельзя без подтверждения изменить email');
      }
    }
    return this.studentService.updateStudent(input, select);
  }

  /**
   * Удаление студентов.
   */
  @Mutation(() => [Int], {
    description: 'Удаление студентов.',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  async studentsDelete(
    @Args('ids', { type: () => [GraphQLUUID] }) ids: string[],
  ): Promise<number> {
    return this.prisma.$transaction(async (transaction) => {
      // Удаление визовых анкет
      await transaction.studentVisaRequestEntity.deleteMany({
        where: { studentId: { in: ids } },
      });
      // Удаление документов
      await transaction.studentArrivalNoticeEntity.deleteMany({
        where: { studentId: { in: ids } },
      });
      await transaction.studentMigrationCardEntity.deleteMany({
        where: { studentId: { in: ids } },
      });
      await transaction.studentVisaEntity.deleteMany({
        where: { studentId: { in: ids } },
      });
      await transaction.studentPassportEntity.deleteMany({
        where: { studentId: { in: ids } },
      });
      // Удаление студентов и их аккаунтов
      const { count } = await transaction.studentEntity.deleteMany({
        where: { id: { in: ids } },
      });
      await transaction.userEntity.deleteMany({
        where: { id: { in: ids } },
      });
      return count;
    });
  }
}
