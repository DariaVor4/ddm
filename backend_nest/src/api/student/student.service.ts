import { Injectable, NotAcceptableException } from '@nestjs/common';
import { TStudent, TStudentPassport, TUser } from '@prisma-types';
import { assert } from '@common';
import { isNil } from 'lodash';
import StudentCreateInput from './inputs/student-create.input';
import { PrismaService } from '../../prisma/prisma.service';
import { SecurityService } from '../../security/security.service';
import StudentUpdateInput from './inputs/student-update.input';
import { UserService } from '../user/user.service';

/**
 * Сервис для работы со студентами.
 */
@Injectable()
export class StudentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly securityService: SecurityService,
    private readonly userService: UserService,
  ) {}

  /**
   * Разделение свойств различных сущностей из входных данных.
   */
  private async extractProperties(input: StudentCreateInput | StudentUpdateInput) {
    const userProperties = <TUser>{
      email: input.email,
      password: input.password && await this.securityService.passwordHash(input.password),
    };
    const studentProperties = <TStudent>{
      curator: input.curator,
      faculty: input.faculty,
      course: input.course,
      group: input.group,
      phone: input.phone,
    };
    const passportProperties = <TStudentPassport>{
      lastName: input.lastName,
      firstName: input.firstName,
      patronymic: input.patronymic,
    };
    return { userProperties, studentProperties, passportProperties };
  }

  /**
   * Создание/регистрация студента.
   * С проверкой почты на уникальность.
   */
  async createStudent(input: StudentCreateInput) {
    assert(
      await this.userService.isEmailFree(input.email),
      new NotAcceptableException('Пользователь с таким email уже существует'),
    );
    const { userProperties, studentProperties, passportProperties } = await this.extractProperties(input);
    return this.prisma.user.create({
      data: {
        ...userProperties,
        student: {
          create: {
            ...studentProperties,
            passport: {
              create: passportProperties,
            },
          },
        },
      },
    });
  }

  /**
   * Обновление студента.
   * С проверкой почты на уникальность.
   */
  async updateStudent(user: TUser, input: StudentUpdateInput) {
    assert(
      isNil(input.email) || await this.userService.isEmailFree(input.email, user.id),
      new NotAcceptableException('Пользователь с таким email уже существует'),
    );
    const { userProperties, studentProperties, passportProperties } = await this.extractProperties(input);
    return this.prisma.user.update({
      where: { id: user.id },
      data: {
        ...userProperties,
        student: {
          update: {
            ...studentProperties,
            passport: {
              upsert: {
                update: passportProperties,
                create: passportProperties,
              },
            },
          },
        },
      },
    });
  }
}
