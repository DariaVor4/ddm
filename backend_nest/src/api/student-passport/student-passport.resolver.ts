import {
  Args, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import {
  BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException,
} from '@nestjs/common';
import { throwCb } from '@common';
import { UUID } from '@common/scalars';
import { PrismaService } from '../../prisma/prisma.service';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/user-role.enum';
import { PrismaSelector } from '../../prisma/decorators/prisma-selector.decorator';
import { CurrentSession, ISessionContext } from '../auth/decorators/current-session.decorator';
import StudentPassportUpsertInput from './inputs/student-passport-upsert.input';
import StudentPassportWithoutStudentResult from './results/student-passport-without-student.result';
import { StudentDocumentsService } from '../student/student-documents.service';
import { Prisma } from '@prisma/client';

/**
 * Резолвер для работы с паспортами студентов.
 */
@Resolver('student-passport')
export class StudentPassportResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly studentDocumentsService: StudentDocumentsService,
  ) {}

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
  @Query(() => StudentPassportWithoutStudentResult, {
    description: 'Получить паспорт студента.',
    nullable: true,
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async studentPassport(
    @PrismaSelector() select: Prisma.StudentPassportEntitySelect,
    @CurrentSession() session: ISessionContext,
    @Args('studentId', { nullable: true, description: 'ID Студента', type: UUID }) studentId?: string,
  ): Promise<Partial<StudentPassportWithoutStudentResult> | null> {
    const otherOrCurrentStudentId = studentId || session.userId;
    await this.studentDocumentsService.assertPermissions(otherOrCurrentStudentId, session);
    return this.prisma.studentPassportEntity.findFirst({
      where: { studentId: otherOrCurrentStudentId },
      select,
    });
  }

  /**
   * Перезапись паспорта студента.
   * @param select Поля, запрошенные через GraphQL.
   * @param session Текущая сессия.
   * @param data Данные для перезаписи.
   * @param studentId UUID Студента.
   * @returns Успешность перезаписи.
   * @throws {ForbiddenException} Только сотрудники могут перезаписывать паспорта других студентов.
   * @throws {BadRequestException} Тип аккаунта не позволяет перезаписать паспорт без studentId.
   * @throws {NotFoundException} Студент не найден.
   * @throws {InternalServerErrorException} Ошибка при перезаписи паспорта.
   */
  @Mutation(() => Boolean, {
    description: 'Перезапись паспорта студента.',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async studentPassportUpsert(
    @CurrentSession() session: ISessionContext,
    @Args('data', { description: 'Данные для перезаписи' }) data: StudentPassportUpsertInput,
    @Args('studentId', { nullable: true, description: 'ID Студента', type: UUID }) studentId?: string,
  ): Promise<boolean> {
    const otherOrCurrentStudentId = studentId || session.userId;
    await this.studentDocumentsService.assertPermissions(otherOrCurrentStudentId, session);
    return !!await this.prisma.studentPassportEntity.upsert({
      where: { studentId: otherOrCurrentStudentId },
      create: {
        ...data,
        student: { connect: { id: otherOrCurrentStudentId } },
      },
      update: data,
    }).catch(throwCb((e) => new InternalServerErrorException(`Ошибка при перезаписи паспорта: ${e.message}`)));
  }

  /**
   * Удаление паспорта студента. Студент не может удалить свой паспорт.
   * @param studentId UUID Студента.
   * @returns Успешность удаления.
   * @throws {InternalServerErrorException} Ошибка при удалении паспорта.
   */
  @Mutation(() => Boolean, {
    description: 'Удаление паспорта студента. Студент не может удалить свой паспорт.',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  async studentPassportDelete(
    @Args('studentId', { description: 'ID Студента', type: UUID }) studentId: string,
  ): Promise<boolean> {
    return !!await this.prisma.studentPassportEntity.delete({ where: { studentId } })
      .catch(throwCb((e) => new InternalServerErrorException(`Ошибка при удалении паспорта: ${e.message}`)));
  }
}
