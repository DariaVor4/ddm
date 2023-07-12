import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { compact, isEmpty, values } from 'lodash';
import { BotEnum } from '../../bots/bot.enum';
import { BotsCommonService } from '../../bots/services/bots-common.service';
import { EmailService } from '../../email/email.service';
import { NotificationServiceEnum } from '../../generated/prisma-nestjs-graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { SubscriptionsService } from '../../subscriptions/subscriptions.service';
import { NotificationsSendInput } from './inputs/notifications-send.input';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
    private readonly botsCommonService: BotsCommonService,
    private readonly subscriptionsService: SubscriptionsService,
  ) {}

  public async notificationsSend(input: NotificationsSendInput): Promise<boolean> {
    const {
      title, content, services, userIds, allEmployees, allStudents,
    } = input;
    // Получаем список пользователей, которым нужно отправить уведомление.
    const users = await this.prisma.userEntity.findMany({
      where: {
        OR: compact([
          { id: { in: userIds } },
          allEmployees && { employee: { isNot: null } },
          allStudents && { student: { isNot: null } },
        ]),
      },
      select: {
        id: true, email: true, telegramId: true, vkId: true,
      },
    });
    if (isEmpty(users)) {
      throw new BadRequestException('Не удалось выбрать ни одного получателя уведомления');
    }
    if (isEmpty(services)) {
      throw new BadRequestException('Не указаны сервисы для отправки уведомления');
    }

    // Получаем список сервисов, которые нужно использовать для отправки уведомления.
    const isEmailSend = !services || services?.includes(NotificationServiceEnum.Email);
    const isVkBotSend = !services || services?.includes(NotificationServiceEnum.Vk);
    const isTgBotSend = !services || services?.includes(NotificationServiceEnum.Telegram);

    // Создаем уведомление в БД.
    const notification = await this.prisma.notificationEntity.create({
      data: {
        title,
        content,
        services: services || values(NotificationServiceEnum),
      },
    });

    const botMessage = ['🔔 Уведомление', title, content].join('\n\n');

    // Отправляем уведомление.
    const isBotsSend = compact([isVkBotSend && BotEnum.Vk, isTgBotSend && BotEnum.Telegram]);
    const [sentEmail, sentBots] = await Promise.all([
      isEmailSend ? this.emailService.sendSimpleText2({
        to: users.map(({ email }) => email),
        subject: title,
      }, {
        message: content, title,
      }).catch((err) => this.logger.error(err)) : undefined,
      !isEmpty(isBotsSend) ? this.botsCommonService.sendMessages(users, botMessage, isBotsSend) : undefined,
      // TODO: Использовать, когда будет готова отправка смс.
      // (!services || services?.includes(NotificationServiceEnum.Sms)),
    ] as const);

    // Связываем уведомление с пользователями.
    await this.prisma.notificationToUserEntity.createMany({
      data: await Promise.all(users.map(async (user) => {
        const dataItem = {
          userId: user.id,
          notificationId: notification.id,
          sentTo: compact([
            services?.includes(NotificationServiceEnum.Web) && NotificationServiceEnum.Web,
            isEmailSend && user.email && sentEmail?.accepted.includes(user.email) && NotificationServiceEnum.Email,
            isTgBotSend && user.telegramId && sentBots?.tgResult?.sent.includes(user.telegramId) && NotificationServiceEnum.Telegram,
            isVkBotSend && user.vkId && sentBots?.vkResult?.sent.includes(user.vkId) && NotificationServiceEnum.Vk,
            // TODO: 😎
            // services?.includes(NotificationServiceEnum.Sms) && NotificationServiceEnum.Sms,
          ]),
          isRead: false,
        };
        // Отправляем уведомление в подписки.
        await this.subscriptionsService.publishNotificationSubscription({ ...dataItem, ...notification });
        return dataItem;
      })),
    });

    return true;
  }
}
