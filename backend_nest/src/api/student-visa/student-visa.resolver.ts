import {
  Args, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UUID } from '@common/scalars';
import { throwCb } from '@common';
import { InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { StudentDocumentsService } from '../student/student-documents.service';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/user-role.enum';
import { PrismaSelector } from '../../prisma/decorators/prisma-selector.decorator';
import { CurrentSession, ISessionContext } from '../auth/decorators/current-session.decorator';
import StudentVisaWithoutStudentResponse from './responses/student-visa-without-student.response';
import StudentVisaUpsertInput from './inputs/student-visa-upsert.input';

/**
 * Резолвер для работы с визами студентов.
 */
@Resolver('student-visa')
export class StudentVisaResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly studentDocumentsService: StudentDocumentsService,
  ) {}

  /**
   * Получение визы студента.
   * @param select Поля, запрошенные через GraphQL.
   * @param session Текущая сессия.
   * @param studentId UUID Студента, если нужна виза не принадлежащая текущему аккаунту.
   * @returns Виза студента
   * @throws {BadRequestException} Если запрос был вызван без studentId и текущий тип аккаунта не студент.
   * @throws {ForbiddenException} Студенты не могут читать чужие визы.
   * @throws {NotFoundException} Если студент не найден.
   */
  @Query(() => StudentVisaWithoutStudentResponse, {
    description: 'Получение визы студента',
    nullable: true,
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async studentVisa(
    @PrismaSelector() select: Prisma.StudentVisaEntitySelect,
    @CurrentSession() session: ISessionContext,
    @Args('studentId', { nullable: true, description: 'ID Студента', type: UUID }) studentId?: string,
  ): Promise<Partial<StudentVisaWithoutStudentResponse> | null> {
    const otherOrCurrentStudentId = studentId || session.userId;
    await this.studentDocumentsService.assertPermissions(otherOrCurrentStudentId, session);
    return this.prisma.studentVisaEntity.findUnique({
      where: { studentId: otherOrCurrentStudentId },
      select,
    });
  }

  /**
   * Перезапись визы студента.
   * @param session Текущая сессия.
   * @param studentId UUID Студента, если нужна виза не принадлежащая текущему аккаунту.
   * @param data Данные для перезаписи.
   * @returns Успешность перезаписи.
   * @throws {BadRequestException} Если запрос был вызван без studentId и текущий тип аккаунта не студент.
   * @throws {ForbiddenException} Студенты не могут перезаписывать чужие визы.
   * @throws {NotFoundException} Если студент не найден.
   * @throws {InternalServerErrorException} Если произошла ошибка при перезаписи.
   */
  @Mutation(() => Boolean, {
    description: 'Перезапись визы студента',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async studentVisaUpsert(
    @CurrentSession() session: ISessionContext,
    @Args('data') data: StudentVisaUpsertInput,
    @Args('studentId', { nullable: true, description: 'ID Студента', type: UUID }) studentId?: string,
  ): Promise<boolean> {
    const otherOrCurrentStudentId = studentId || session.userId;
    await this.studentDocumentsService.assertPermissions(otherOrCurrentStudentId, session);
    return !!await this.prisma.studentVisaEntity.upsert({
      where: { studentId: otherOrCurrentStudentId },
      create: {
        ...data,
        student: { connect: { id: otherOrCurrentStudentId } },
      },
      update: data,
    }).catch(throwCb((e) => new InternalServerErrorException(`Ошибка при перезаписи визы студента: ${e.message}`)));
  }

  /**
   * Удаление визы студента.
   * @param studentId UUID Студента, если нужна виза не принадлежащая текущему аккаунту.
   * @returns Успешность удаления.
   * @throws {InternalServerErrorException} Если произошла ошибка при удалении.
   */
  @Mutation(() => Boolean, {
    description: 'Удаление визы студента',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  async studentVisaDelete(
    @Args('studentId', { description: 'ID Студента', type: UUID }) studentId: string,
  ): Promise<boolean> {
    if (await this.prisma.studentEntity.count({ where: { id: studentId } }) === 0) {
      throw new NotFoundException('Студент не найден');
    }
    return !!await this.prisma.studentVisaEntity.delete({ where: { studentId } })
      .catch(throwCb((e) => new InternalServerErrorException(`Ошибка при удалении визы: ${e.message}`)));
  }
}
