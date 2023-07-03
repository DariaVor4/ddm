import {
  BadRequestException, Injectable, NotAcceptableException, NotFoundException,
} from '@nestjs/common';
import { assert } from '@common';
import { isNil, isUndefined, pick } from 'lodash';
import { Prisma } from '@prisma/client';
import * as uuid from 'uuid';
import { UserEntity, StudentEntity, StudentPassportEntity } from '@prisma-nestjs-graphql';
import type { PartialDeep, SetRequired } from 'type-fest';
import { elseThrow } from '@common/throw-utils';
import { PrismaService } from '../../prisma/prisma.service';
import { UserService } from '../user/user.service';
import StudentCreateInput from './inputs/student-create.input';
import StudentUpdateInput from './inputs/student-update.input';
import { AuthService } from '../auth/auth.service';
import StudentUpsertInput from './inputs/student-upsert.input';

/**
 * Сервис для работы со студентами.
 */
@Injectable()
export class StudentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  /**
   * Перезапись студента.
   * @param input Данные для перезаписи.
   * @param studentId id студента, если не указан, то будет создан новый студент.
   * @param select Данные, которые нужно вернуть.
   * @returns Обновленный студент.
   * @throws {NotFoundException} Если студент не найден.
   * @throws {BadRequestException} Если при создании студента не указан email или пароль.
   * @throws {BadRequestException} Если указан email, который уже занят.
   */
  async studentUpsert(
    input: StudentUpsertInput,
    select?: Prisma.StudentEntitySelect | null,
    studentId?: string,
  ): Promise<PartialDeep<StudentEntity>> {
    const [userProperties, studentProperties, passportProperties] = [
      pick(input, ['email', 'password'] satisfies (keyof UserEntity & keyof StudentUpsertInput)[]),
      pick(input, ['phone', 'faculty', 'group', 'course', 'curator'] satisfies (keyof StudentEntity & keyof StudentUpsertInput)[]),
      pick(input, ['lastName', 'firstName', 'patronymic'] satisfies (keyof StudentPassportEntity & keyof StudentUpsertInput)[]),
    ];
    if (userProperties.email && !await this.userService.isEmailFree(userProperties.email, { exceptUserId: studentId })) {
      throw new BadRequestException('Пользователь с таким email уже существует');
    }
    if (userProperties.password) {
      userProperties.password = await this.authService.passwordHash(userProperties.password);
    }
    if (studentId) {
      // Update
      if (!await this.prisma.userEntity.count({ where: { id: studentId } })) {
        throw new NotFoundException('Студент не найден');
      }
      return this.prisma.studentEntity.update({
        select,
        where: { id: studentId },
        data: {
          ...studentProperties,
          user: { update: userProperties },
          passport: { upsert: { create: passportProperties, update: passportProperties } },
        },
      }) as Promise<PartialDeep<StudentEntity>>;
    }
    // Create
    if (!userProperties.email || !userProperties.password) {
      throw new BadRequestException('При создании студента email и пароль обязательны');
    }
    return this.prisma.studentEntity.create({
      select,
      data: {
        ...studentProperties,
        passport: { create: passportProperties },
        user: {
          create: { ...userProperties, email: userProperties.email, password: userProperties.password },
        },
      },
    }) as Promise<PartialDeep<StudentEntity>>;
  }

  /**
   * Создание/регистрация студента.
   * С проверкой почты на уникальность.
   */
  async studentCreate(input: StudentCreateInput, select?: Prisma.StudentEntitySelect): Promise<Partial<StudentEntity>> {
    if (!await this.userService.isEmailFree(input.email)) {
      throw new NotAcceptableException('Пользователь с таким email уже существует');
    }
    const [userProperties, studentProperties, passportProperties] = [
      pick(input, ['email'] satisfies (keyof UserEntity & keyof StudentCreateInput)[]),
      pick(input, ['phone', 'faculty', 'group', 'course', 'curator'] satisfies (keyof StudentEntity & keyof StudentCreateInput)[]),
      pick(input, ['lastName', 'firstName', 'patronymic'] satisfies (keyof StudentPassportEntity & keyof StudentCreateInput)[]),
    ];
    return this.prisma.studentEntity.create({
      data: {
        ...studentProperties,
        passport: { create: passportProperties },
        user: {
          create: {
            ...userProperties,
            password: await this.authService.passwordHash(input.password),
          },
        },
      },
      select,
    });
  }

  /**
   * Обновление студента.
   * С проверкой почты на уникальность.
   */
  async updateStudent(input: StudentUpdateInput, select?: Prisma.StudentEntitySelect): Promise<Partial<StudentEntity>> {
    assert(uuid.validate(input.id), new NotAcceptableException('Неверный формат id'));
    if (!(await this.prisma.userEntity.count({ where: { id: input.id, NOT: { student: null } } }))) {
      throw new NotFoundException('Студент не найден');
    }
    if (input.email && !await this.userService.isEmailFree(input.email, { exceptUserId: input.id })) {
      throw new NotAcceptableException('Пользователь с таким email уже существует');
    }
    const [userProperties, studentProperties, passportProperties] = [
      pick(input, ['email'] satisfies (keyof UserEntity & keyof StudentUpdateInput)[]),
      pick(input, ['phone', 'faculty', 'group', 'course', 'curator'] satisfies (keyof StudentEntity & keyof StudentUpdateInput)[]),
      pick(input, ['lastName', 'firstName', 'patronymic'] satisfies (keyof StudentPassportEntity & keyof StudentUpdateInput)[]),
    ];
    return this.prisma.studentEntity.update({
      where: { id: input.id },
      data: {
        ...studentProperties,
        passport: { upsert: { update: passportProperties, create: passportProperties } },
        user: {
          update: {
            password: input.password ? await this.authService.passwordHash(input.password) : undefined,
            ...userProperties,
          },
        },
      },
      select,
    });
  }
}
