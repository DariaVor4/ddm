import { Injectable, NotAcceptableException } from '@nestjs/common';
import { compact, isNil } from 'lodash';
import { assert, joi } from '@common';
import * as uuid from 'uuid';
import { PrismaService } from '../../prisma/prisma.service';
import UserRoleEnum from '../auth/interfaces/UserRoleEnum';

/**
 * Сервис для работы с пользователями.
 */
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Полученеи массива ролей пользователя.
   * @param userId Идентификатор пользователя.
   * @returns Массив ролей пользователя.
   */
  async getUserRoles(userId: string): Promise<UserRoleEnum[]> {
    assert(!userId || uuid.validate(userId), new NotAcceptableException('Некорректный uuid'));
    const [student, employee] = await Promise.all([
      this.prisma.student.count({ where: { id: userId } }),
      this.prisma.employee.findUnique({ where: { id: userId }, select: { isAdmin: true } }),
    ]);
    return compact([
      student ? UserRoleEnum.Student : undefined,
      employee ? UserRoleEnum.Employee : undefined,
      employee?.isAdmin ? UserRoleEnum.Admin : undefined,
    ] as UserRoleEnum[]);
  }

  /**
   * Проверка почты на доступность.
   * @param email Почта.
   * @param exceptUserId Исключаемый из проверки пользователь, если он хочет обновить свою почту.
   * @returns true, если почта свободна.
   */
  async isEmailFree(email: string, exceptUserId?: string): Promise<boolean> {
    assert(!exceptUserId || uuid.validate(exceptUserId), new NotAcceptableException('Некорректный uuid'));
    assert(isNil(joi.string().email().validate(email).error), new NotAcceptableException('Некорректный email'));
    return !await this.prisma.user.count({
      where: {
        email,
        id: exceptUserId && { not: exceptUserId },
      },
    });
  }
}
