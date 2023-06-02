import {
  Args, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UUID } from '@common/scalars';
import { throwCb, ifDebug, isRoleStudent } from '@common';
import {
  BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException,
} from '@nestjs/common';
import StudentArrivalNoticeWithoutStudentResult from './results/student-arrival-notice-without-student.result';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/user-role.enum';
import { PrismaSelector } from '../../prisma/decorators/prisma-selector.decorator';
import { CurrentSession, ISessionContext } from '../auth/decorators/current-session.decorator';
import { PrismaService } from '../../prisma/prisma.service';
import StudentArrivalNoticeUpsertInput from './inputs/student-arrival-notice-upsert.input';
import { StudentDocumentsService } from '../student/student-documents.service';

/**
 * Резолвер для работы с уведомлениями о прибытии студентов.
 */
@Resolver('student-arrival-notice')
export class StudentArrivalNoticeResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly studentDocumentsService: StudentDocumentsService,
  ) {}

  /**
   * Получение уведомления о прибытии студента.
   * @param select Поля, запрошенные через GraphQL.
   * @param session Текущая сессия.
   * @param studentId UUID Студента, если нужно уведомление о прибытии не принадлежащее текущему аккаунту.
   * @returns Уведомление о прибытии студента
   * @throws {BadRequestException} Если запрос был вызван без studentId и текущий тип аккаунта не студент.
   * @throws {ForbiddenException} Студенты не могут читать чужие уведомления о прибытии.
   * @throws {NotFoundException} Если студент не найден.
   */
  @Query(() => StudentArrivalNoticeWithoutStudentResult, {
    description: 'Получение уведомления о прибытии студента',
    nullable: true,
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async studentArrivalNotice(
    @PrismaSelector() select: Prisma.StudentArrivalNoticeEntitySelect,
    @CurrentSession() session: ISessionContext,
    @Args('studentId', { nullable: true, description: 'ID Студента', type: UUID }) studentId?: string,
  ): Promise<Partial<StudentArrivalNoticeWithoutStudentResult> | null> {
    const otherOrCurrentStudentId = studentId || session.userId;
    await this.studentDocumentsService.assertPermissions(otherOrCurrentStudentId, session);
    return this.prisma.studentArrivalNoticeEntity.findUnique({
      where: { studentId: studentId || session.userId },
      select,
    });
  }

  /**
   * Перезапись уведомления о прибытии студента.
   * @param session Текущая сессия.
   * @param studentId UUID Студента, если нужно уведомление о прибытии не принадлежащее текущему аккаунту.
   * @param data Данные для перезаписи.
   * @returns Успешность перезаписи.
   * @throws {BadRequestException} Если запрос был вызван без studentId и текущий тип аккаунта не студент.
   * @throws {ForbiddenException} Студенты не могут перезаписывать чужие уведомления о прибытии.
   * @throws {NotFoundException} Если студент не найден.
   * @throws {InternalServerErrorException} Если произошла ошибка при перезаписи.
   */
  @Mutation(() => Boolean, {
    description: 'Перезапись уведомления о прибытии студента',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async studentArrivalNoticeUpsert(
    @CurrentSession() session: ISessionContext,
    @Args('data') data: StudentArrivalNoticeUpsertInput,
    @Args('studentId', { nullable: true, description: 'ID Студента', type: UUID }) studentId?: string,
  ): Promise<boolean> {
    const otherOrCurrentStudentId = studentId || session.userId;
    await this.studentDocumentsService.assertPermissions(otherOrCurrentStudentId, session);
    return !!await this.prisma.studentArrivalNoticeEntity.upsert({
      where: { studentId: otherOrCurrentStudentId },
      create: {
        ...data,
        student: { connect: { id: otherOrCurrentStudentId } },
      },
      update: data,
    }).catch(throwCb((e) => new InternalServerErrorException(`Ошибка при перезаписи уведомления о прибытии студента: ${e.message}`)));
  }

  /**
   * Удаление уведомления о прибытии студента.
   * @param studentId UUID Студента, если нужно уведомление о прибытии не принадлежащее текущему аккаунту.
   * @returns Успешность удаления.
   * @throws {InternalServerErrorException} Если произошла ошибка при удалении.
   */
  @Mutation(() => Boolean, {
    description: 'Удаление уведомления о прибытии студента',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  async studentArrivalNoticeDelete(
    @Args('studentId', { description: 'ID Студента', type: UUID }) studentId: string,
  ): Promise<boolean> {
    return !!await this.prisma.studentArrivalNoticeEntity.delete({ where: { studentId } })
      .catch(throwCb((e) => new InternalServerErrorException(`Ошибка при удалении уведомления о прибытии: ${e.message}`)));
  }
}
