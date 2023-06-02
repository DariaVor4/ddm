import {
  Args, Int, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UUID } from '@common/scalars';
import { throwCb, ifDebug, isRoleStudent } from '@common';
import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { GraphQLUUID } from 'graphql-scalars';
import * as uuid from 'uuid';
import { PrismaService } from '../../prisma/prisma.service';
import { PrismaSelector } from '../../prisma/decorators/prisma-selector.decorator';
import { CurrentSession, ISessionContext } from '../auth/decorators/current-session.decorator';
import StudentCloseRelativeWithoutStudentResult from './results/student-close-relative-without-student.result';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/user-role.enum';
import StudentCloseRelativeUpsertInput from './input/student-close-relative-upsert.input';

/**
 * Резолвер для работы с близкими родственниками студентов.
 */
@Resolver('student-close-relative')
export class StudentCloseRelativeResolver {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Получить близких родственников студента.
   * @param studentId UUID Студента, если нужны близкие родственники не принадлежащие текущему аккаунту.
   * @param select Поля, запрошенные через GraphQL.
   * @param session Контекст текущей сессии.
   * @returns Близкие родственники студента.
   * @throws {BadRequestException} Тип аккаунта не позволяет получить паспорт без указания studentId.
   * @throws {ForbiddenException} Если студент пытается посмотреть чужих родственников.
   * @throws {NotFoundException} Студент с указанным studentId не найден.
   */
  @Query(() => [StudentCloseRelativeWithoutStudentResult], {
    description: 'Получить близких родственников студента.',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async studentCloseRelatives(
    @PrismaSelector() select: Prisma.StudentCloseRelativeEntitySelect,
    @CurrentSession() session: ISessionContext,
    @Args('studentId', { nullable: true, description: 'ID Студента', type: UUID }) studentId?: string,
  ): Promise<Partial<StudentCloseRelativeWithoutStudentResult>[]> {
    if (!studentId && !isRoleStudent(session.roles)) {
      throw new BadRequestException('Тип аккаунта не позволяет получить паспорт без studentId');
    }
    if (studentId && isRoleStudent(session.roles) && studentId !== session.userId) {
      throw new ForbiddenException(ifDebug('Студенты не могут смотреть чужих родственников'));
    }
    if (studentId && await this.prisma.studentEntity.count({ where: { id: studentId } }) === 0) {
      throw new NotFoundException('Студент не найден');
    }
    return this.prisma.studentCloseRelativeEntity.findMany({
      where: { studentId: studentId || session.userId },
      select,
    });
  }

  /**
   * Получить близкого родственника студента.
   * @param select Поля, запрошенные через GraphQL.
   * @param session Контекст текущей сессии.
   * @param closeRelativeId ID Близкого родственника.
   * @returns Близкий родственник студента.
   * @throws {NotFoundException} Если близкий родственник не найден.
   * @throws {ForbiddenException} Если студент пытается посмотреть чужого родственника.
   */
  @Query(() => StudentCloseRelativeWithoutStudentResult, {
    description: 'Получить близкого родственника студента.',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async studentCloseRelative(
    @PrismaSelector() select: Prisma.StudentCloseRelativeEntitySelect,
    @CurrentSession() session: ISessionContext,
    @Args('closeRelativeId', { description: 'ID Близкого родственника', type: UUID }) closeRelativeId: string,
  ): Promise<Partial<StudentCloseRelativeWithoutStudentResult>> {
    const closeRelative = await this.prisma.studentCloseRelativeEntity.findUniqueOrThrow({
      where: { id: closeRelativeId },
      select: { ...select, studentId: true },
    }).catch(throwCb(new NotFoundException('Близкий родственник не найден')));
    if (closeRelative.studentId !== session.userId && isRoleStudent(session.roles)) {
      throw new ForbiddenException(ifDebug('Студенты не могут смотреть чужих родственников'));
    }
    return closeRelative;
  }

  /**
   * Создать близкого родственника студента.
   * @param session Контекст текущей сессии.
   * @param data Данные для создания/обновления.
   * @returns Успешность создания/обновления.
   * @throws {BadRequestException} Если тип аккаунта не позволяет создать близкого родственника без указания studentId.
   * @throws {ForbiddenException} Если студент пытается создать чужого родственника.
   */
  @Mutation(() => Boolean, {
    description: 'Перезапись близкого родственника студента.',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async studentCloseRelativeUpsert(
    @CurrentSession() session: ISessionContext,
    @Args('data', { description: 'Данные для перезаписи' }) data: StudentCloseRelativeUpsertInput,
  ): Promise<boolean> {
    const closeRelative = !data.id ? null : await this.prisma.studentCloseRelativeEntity.findUniqueOrThrow({
      where: { id: data.id },
      select: { studentId: true },
    }).catch(throwCb(new NotFoundException('Близкий родственник не найден')));
    if (isRoleStudent(session.roles)) {
      if (closeRelative && closeRelative.studentId !== session.userId) {
        throw new ForbiddenException(ifDebug('Студенты не могут перезаписывать чужих родственников'));
      }
      if (data.studentId && data.studentId !== session.userId) {
        throw new ForbiddenException(ifDebug('Студенты не могут создавать родственников другим студентам'));
      }
    }
    await this.prisma.studentCloseRelativeEntity.upsert({
      where: { id: data.id || uuid.v4() },
      create: {
        ...data,
        studentId: data.studentId || session.userId,
      },
      update: data,
    });
    return true;
  }

  @Mutation(() => Int, {
    description: 'Удалить близкого родственника студента.',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async studentCloseRelativeDelete(
    @CurrentSession() session: ISessionContext,
    @Args('closeRelativeIds', { description: 'ID Родственников', type: () => [GraphQLUUID] }) closeRelativeIds: string[],
  ): Promise<number> {
    await this.prisma.studentCloseRelativeEntity.findMany({
      where: { id: { in: closeRelativeIds } },
      select: { studentId: true },
    }).then((closeRelatives) => closeRelatives.forEach((closeRelative) => {
      if (closeRelative.studentId !== session.userId && isRoleStudent(session.roles)) {
        throw new ForbiddenException(ifDebug('Студенты не могут удалять чужих родственников'));
      }
    }));
    return this.prisma.studentCloseRelativeEntity.deleteMany({ where: { id: { in: closeRelativeIds } } }).then((data) => data.count);
  }
}
