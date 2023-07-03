import { BadRequestException, Injectable } from '@nestjs/common';
import {
  compact, flatten, isEmpty, uniq, values,
} from 'lodash';
import { NotificationServiceEnum } from '@prisma-nestjs-graphql';
import { NotificationsSendInput } from './inputs/notifications-send.input';
import { PrismaService } from '../../prisma/prisma.service';
import { EmailService } from '../../email/email.service';

@Injectable()
export class NotificationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
  ) {}

  public async notificationsSend(input: NotificationsSendInput): Promise<boolean> {
    const {
      title, content, services, userIds, allEmployees, allStudents,
    } = input;
    const users = await this.prisma.userEntity.findMany({
      where: {
        OR: compact([
          { id: { in: userIds } },
          allEmployees && { employee: { isNot: null } },
          allStudents && { student: { isNot: null } },
        ]),
      },
    });
    // const userIds123 = uniq(flatten(compact([
    //   userIds,
    //   allEmployees && (await this.prisma.employeeEntity.findMany({ select: { id: true } }).then((employees) => employees.map(({ id }) => id))),
    //   allStudents && (await this.prisma.studentEntity.findMany({ select: { id: true } }).then((students) => students.map(({ id }) => id))),
    // ])));
    if (isEmpty(users)) {
      throw new BadRequestException('Не удалось выбрать ни одного получателя уведомления');
    }

    await this.prisma.$transaction(async (transaction) => {
      const notification = await transaction.notificationEntity.create({
        data: {
          title,
          content,
          services: services || values(NotificationServiceEnum),
        },
      });
      await transaction.notificationToUserEntity.createMany({
        data: users.map((user) => ({ userId: user.id, notificationId: notification.id })),
      });
    });

    await Promise.all(compact([
      (!services || services?.includes(NotificationServiceEnum.Email)) && this.emailService.sendSimpleText2({
        to: users.map(({ email }) => email),
        subject: title,
      }, {
        message: content,
      }),
      // (!services || services?.includes(NotificationServiceEnum.Sms)),
      // (!services || services?.includes(NotificationServiceEnum.Vk)),
      // (!services || services?.includes(NotificationServiceEnum.Telegram)),
    ]));

    return true;
  }
}
