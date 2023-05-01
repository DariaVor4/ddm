import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { assert } from '@common';
import { pick } from 'lodash';
import { Prisma } from '@prisma-client';
import * as uuid from 'uuid';
import { UserEntity } from '@prisma-graphql/user-entity';
import { StudentEntity } from '@prisma-graphql/student-entity';
import { StudentPassportEntity } from '@prisma-graphql/student-passport-entity';
import { PrismaService } from '../../prisma/prisma.service';
import { UserService } from '../user/user.service';
import StudentCreateInput from './inputs/student-create.input';
import StudentUpdateInput from './inputs/student-update.input';
import { AuthService } from '../auth/auth.service';

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
   * Создание/регистрация студента.
   * С проверкой почты на уникальность.
   */
  async studentCreate(input: StudentCreateInput, select?: Prisma.StudentEntitySelect): Promise<StudentEntity> {
    // if (!await this.userService.isEmailFree(input.email)) {
    //   throw new NotAcceptableException('Пользователь с таким email уже существует');
    // }
    const [userProperties, studentProperties, passportProperties] = [
      pick(input, ['email'] satisfies (keyof UserEntity & keyof StudentCreateInput)[]),
      pick(input, ['phone', 'faculty', 'group', 'course', 'curator'] satisfies (keyof StudentEntity & keyof StudentCreateInput)[]),
      pick(input, ['lastName', 'firstName', 'patronymic'] satisfies (keyof StudentPassportEntity & keyof StudentCreateInput)[]),
    ];
    return await this.prisma.studentEntity.create({
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
    }) as StudentEntity;
  }

  /**
   * Обновление студента.
   * С проверкой почты на уникальность.
   */
  async updateStudent(input: StudentUpdateInput, select?: Prisma.StudentEntitySelect): Promise<StudentEntity> {
    assert(uuid.validate(input.id), new NotAcceptableException('Неверный формат id'));
    if (!await this.prisma.userEntity.count({ where: { id: input.id, NOT: { student: null } } })) {
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
    return await this.prisma.studentEntity.update({
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
    }) as StudentEntity;
  }
}
