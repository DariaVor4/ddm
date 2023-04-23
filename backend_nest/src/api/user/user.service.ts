import { Injectable, NotAcceptableException } from '@nestjs/common';
import { compact, isNil } from 'lodash';
import { assert, joi } from '@common';
import * as uuid from 'uuid';
import ms from 'ms';
import { PrismaService } from '../../prisma/prisma.service';
import UserRoleEnum from '../auth/interfaces/user-role.enum';
import { ConfigService } from '../../config/config.service';

/**
 * Сервис для работы с пользователями.
 */
@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Полученеи массива ролей пользователя.
   * @param userId Идентификатор пользователя.
   * @returns Массив ролей пользователя.
   */
  async getUserRoles(userId: string): Promise<UserRoleEnum[]> {
    assert(!userId || uuid.validate(userId), new NotAcceptableException('Некорректный uuid'));
    const { student, employee } = await this.prisma.userEntity.findUniqueOrThrow({
      where: { id: userId },
      select: {
        student: { select: { id: true } },
        employee: { select: { id: true, isAdmin: true } },
      },
    });
    return compact([
      student ? UserRoleEnum.Student : undefined,
      employee ? UserRoleEnum.Employee : undefined,
      employee?.isAdmin ? UserRoleEnum.Admin : undefined,
    ] as UserRoleEnum[]);
  }

  /**
   * Проверка почты на доступность.
   * @param email Почта.
   * @param options[exceptUserId] Исключить пользователя с данным id.
   * @param options[notThrow] Не выбрасывать исключение, если почта некорректна.
   * @throws NotAcceptableException, если notThrow=false и почта некорректна.
   * @returns true: почта свободна; false: почта занята; null: если notThrow=true и почта некорректна.
   */
  async isEmailFree(email: string, options?: { exceptUserId?: string, notThrow?: boolean }): Promise<boolean | null> {
    assert(!options?.exceptUserId || uuid.validate(options?.exceptUserId), new NotAcceptableException('Некорректный uuid'));
    const { error } = joi.string().email().validate(email);
    if (!options?.notThrow) {
      assert(isNil(error), new NotAcceptableException('Некорректный email'));
    } else if (error) {
      return null;
    }
    // Если есть пользователь с такой почтой, то почта занята.
    if (await this.prisma.userEntity.count({
      where: {
        email,
        id: options?.exceptUserId && { not: options?.exceptUserId },
      },
    })) {
      return false;
    }
    // Если есть подтверждённая почта и время завершения регистрации не истекло, то почта занята.
    if (await this.prisma.confirmationEmailEntity.count({
      where: {
        email,
        isConfirmed: true,
        createdAt: {
          lte: new Date(Date.now() + ms(this.configService.config.emailConfirmationCodeExpires)),
        },
      },
    })) {
      return false;
    }
    // Почта свободна.
    return true;
  }
}
