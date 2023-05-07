import {
  Args, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import {
  _throw, assert, ifDebug, isRoleAdminOrEmployee, isRoleStudent,
} from '@common';
import { UUID } from '@common/scalars';
import { PrismaService } from '../../prisma/prisma.service';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/user-role.enum';
import { PrismaSelector } from '../../prisma/decorators/prisma-selector.decorator';
import { CurrentSession, ISessionContext } from '../auth/decorators/current-session.decorator';
import StudentPassportUpsertInput from './inputs/student-passport-upsert.input';
import StudentPassportWithoutStudentEntity from './entities/StudentPassportWithoutStudentEntity';
import StudentPassportEntitySelect = Prisma.StudentPassportEntitySelect;

/**
 * Резолвер для работы с паспортами студентов.
 */
@Resolver('student-passport')
export class StudentPassportResolver {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Получить паспорт студента.
   * @param select Поля, запрошенные через GraphQL.
   * @param session Текущая сессия.
   * @param studentId UUID Студента, если нужен паспорт не принадлежащий текущему аккаунту.
   * @returns Паспорт студента.
   * @throws {BadRequestException} Тип аккаунта не позволяет получить паспорт без указания studentId.
   * @throws {ForbiddenException} Студенты не могут читать чужие паспорта.
   * @throws {NotFoundException} Студент не найден.
   */
  @Query(() => StudentPassportWithoutStudentEntity, {
    description: 'Получить паспорт студента.',
    nullable: true,
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async studentPassport(
    @PrismaSelector() select: StudentPassportEntitySelect,
    @CurrentSession() session: ISessionContext,
    @Args('studentId', { nullable: true, description: 'ID Студента', type: UUID }) studentId?: string,
  ): Promise<Partial<StudentPassportWithoutStudentEntity> | null> {
    if (!studentId && !isRoleStudent(session.roles)) {
      throw new BadRequestException('Тип аккаунта не позволяет получить паспорт без studentId');
    }
    if (studentId && isRoleStudent(session.roles) && studentId !== session.userId) {
      throw new ForbiddenException(ifDebug('Студенты не могут читать чужие паспорта'));
    }
    if (studentId && (await this.prisma.studentEntity.count({ where: { id: studentId } })) === 0) {
      throw new NotFoundException('Студент не найден');
    }
    return this.prisma.studentPassportEntity.findFirst({
      where: { studentId: studentId || session.userId },
      select: { ...select },
    });
  }

  /**
   * Перезапись паспорта студента.
   * @param select Поля, запрошенные через GraphQL.
   * @param session Текущая сессия.
   * @param data Данные для перезаписи.
   * @param studentId UUID Студента.
   * @returns Паспорт студента.
   * @throws {ForbiddenException} Только сотрудники могут перезаписывать паспорта других студентов.
   * @throws {BadRequestException} Тип аккаунта не позволяет перезаписать паспорт без studentId.
   * @throws {NotFoundException} Студент не найден.
   */
  @Mutation(() => StudentPassportWithoutStudentEntity, {
    description: 'Перезапись паспорта студента.',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async studentPassportUpsert(
    @PrismaSelector() select: StudentPassportEntitySelect,
    @CurrentSession() session: ISessionContext,
    @Args('data', { description: 'Данные для перезаписи' }) data: StudentPassportUpsertInput,
    @Args('studentId', { nullable: true, description: 'ID Студента', type: UUID }) studentId?: string,
  ): Promise<Partial<StudentPassportWithoutStudentEntity>> {
    if (studentId && isRoleStudent(session.roles) && studentId !== session.userId) {
      throw new ForbiddenException(ifDebug('Только сотрудники могут перезаписывать паспорта других студентов'));
    }
    if (!studentId && !isRoleStudent(session.roles)) {
      throw new BadRequestException('Тип аккаунта не позволяет перезаписать паспорт без studentId');
    }
    const otherOrCurrentStudentId = studentId || session.userId;
    if ((await this.prisma.studentEntity.count({ where: { id: otherOrCurrentStudentId } })) === 0) {
      throw new NotFoundException('Студент не найден');
    }
    return this.prisma.studentPassportEntity.upsert({
      where: { studentId: otherOrCurrentStudentId },
      create: {
        ...data,
        student: { connect: { id: otherOrCurrentStudentId } },
      },
      update: data,
      select,
    }).catch(_throw((e) => new NotFoundException(`Ошибка при перезаписи паспорта: ${e.message}`)));
  }

  /**
   * Удаление паспорта студента. Студент не может удалить свой паспорт.
   * @param select Поля, запрошенные через GraphQL.
   * @param studentId UUID Студента.
   * @returns Паспорт студента.
   * @throws {NotFoundException} Паспорт не найден.
   */
  @Mutation(() => StudentPassportWithoutStudentEntity, {
    description: 'Удаление паспорта студента. Студент не может удалить свой паспорт.',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  async studentPassportDelete(
    @PrismaSelector() select: StudentPassportEntitySelect,
    @Args('studentId', { description: 'ID Студента', type: UUID }) studentId: string,
  ): Promise<Partial<StudentPassportWithoutStudentEntity>> {
    return this.prisma.studentPassportEntity.delete({
      where: { studentId },
      select,
    }).catch(_throw((e) => new NotFoundException(`Ошибка при удалении паспорта: ${e.message}`)));
  }
}
