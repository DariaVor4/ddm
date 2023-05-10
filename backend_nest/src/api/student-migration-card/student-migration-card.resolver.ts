import {
  Args, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UUID } from '@common/scalars';
import { _throw, ifDebug, isRoleStudent } from '@common';
import {
  BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/user-role.enum';
import { PrismaSelector } from '../../prisma/decorators/prisma-selector.decorator';
import { CurrentSession, ISessionContext } from '../auth/decorators/current-session.decorator';
import StudentMigrationCardWithoutStudentResponse from './results/student-migration-card-without-student.response';
import StudentMigrationCardUpsertInput from './inputs/student-migration-card-upsert.input';

/**
 * Резолвер для работы с миграционными картами студентов.
 */
@Resolver('student-migration-card')
export class StudentMigrationCardResolver {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Получение миграционной карты студента.
   * @param select Поля, запрошенные через GraphQL.
   * @param session Текущая сессия.
   * @param studentId UUID Студента, если нужна миграционная карта не принадлежащая текущему аккаунту.
   * @returns Миграционная карта студента
   * @throws {BadRequestException} Если запрос был вызван без studentId и текущий тип аккаунта не студент.
   * @throws {ForbiddenException} Студенты не могут читать чужие миграционные карты.
   * @throws {NotFoundException} Если студент не найден.
   */
  @Query(() => StudentMigrationCardWithoutStudentResponse, {
    description: 'Получение миграционной карты студента',
    nullable: true,
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async studentMigrationCard(
    @PrismaSelector() select: Prisma.StudentMigrationCardEntitySelect,
    @CurrentSession() session: ISessionContext,
    @Args('studentId', { nullable: true, description: 'ID Студента', type: UUID }) studentId?: string,
  ): Promise<Partial<StudentMigrationCardWithoutStudentResponse> | null> {
    if (!studentId && !isRoleStudent(session.roles)) {
      throw new BadRequestException('Тип аккаунта не позволяет получить миграционную карту без studentId');
    }
    if (studentId && isRoleStudent(session.roles) && studentId !== session.userId) {
      throw new ForbiddenException(ifDebug('Студенты не могут читать чужие миграционные карты'));
    }
    if (studentId && (await this.prisma.studentEntity.count({ where: { id: studentId } })) === 0) {
      throw new NotFoundException('Студент не найден');
    }
    return this.prisma.studentMigrationCardEntity.findUnique({
      where: { studentId: studentId || session.userId },
      select,
    });
  }

  /**
   * Перезапись миграционной карты студента.
   * @param session Текущая сессия.
   * @param studentId UUID Студента, если нужна миграционная карта не принадлежащая текущему аккаунту.
   * @param data Данные для перезаписи.
   * @returns Успешность перезаписи.
   * @throws {BadRequestException} Если запрос был вызван без studentId и текущий тип аккаунта не студент.
   * @throws {ForbiddenException} Студенты не могут перезаписывать чужие миграционные карты.
   * @throws {NotFoundException} Если студент не найден.
   * @throws {InternalServerErrorException} Если произошла ошибка при перезаписи.
   */
  @Mutation(() => Boolean, {
    description: 'Перезапись миграционной карты студента',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee, UserRoleEnum.Student)
  async studentMigrationCardUpsert(
    @CurrentSession() session: ISessionContext,
    @Args('data') data: StudentMigrationCardUpsertInput,
    @Args('studentId', { nullable: true, description: 'ID Студента', type: UUID }) studentId?: string,
  ): Promise<boolean> {
    if (studentId && isRoleStudent(session.roles) && studentId !== session.userId) {
      throw new ForbiddenException(ifDebug('Только сотрудники могут перезаписывать миграционные карты других студентов'));
    }
    if (!studentId && !isRoleStudent(session.roles)) {
      throw new BadRequestException('Тип аккаунта не позволяет перезаписать миграционную карту без studentId');
    }
    const currentOrOtherStudentId = studentId || session.userId;
    if (await this.prisma.studentEntity.count({ where: { id: currentOrOtherStudentId } }) === 0) {
      throw new NotFoundException('Студент не найден');
    }
    return !!await this.prisma.studentMigrationCardEntity.upsert({
      where: { studentId: currentOrOtherStudentId },
      create: {
        ...data,
        student: { connect: { id: currentOrOtherStudentId } },
      },
      update: data,
    }).catch(_throw((e) => new InternalServerErrorException(`Ошибка при перезаписи миграционной карты студента: ${e.message}`)));
  }

  /**
   * Удаление миграционной карты студента.
   * @param studentId UUID Студента, если нужна миграционная карта не принадлежащая текущему аккаунту.
   * @returns Успешность удаления.
   * @throws {InternalServerErrorException} Если произошла ошибка при удалении.
   */
  @Mutation(() => Boolean, {
    description: 'Удаление миграционной карты студента',
  })
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  async studentMigrationCardDelete(
    @Args('studentId', { description: 'ID Студента', type: UUID }) studentId: string,
  ): Promise<boolean> {
    return !!await this.prisma.studentMigrationCardEntity.delete({ where: { studentId } })
      .catch(_throw((e) => new InternalServerErrorException(`Ошибка при удалении миграционной карты: ${e.message}`)));
  }
}
