import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { compact, isError, isString } from 'lodash';
import { BotsCommonService } from './bots-common.service';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BotsMessagesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly botsCommonService: BotsCommonService,
  ) {}

  /**
   * Подключение бота к веб-аккаунту и составление ответа на начало диалога с ботом.
   * @param ref Реферальная строка.
   * @param externalUserId Идентификатор пользователя во внешней системе.
   * @param internalUserId Идентификатор пользователя во внутренней системе.
   */
  public async getStartMessage(ref?: string, externalUserId?: string, internalUserId?: string) {
    // Check external user id.
    if (!externalUserId) {
      throw new InternalServerErrorException('Не удалось получить id пользователя');
    }
    // Try to connect user and get internal user id.
    const userId = internalUserId || (ref
      ? await this.botsCommonService.connect(ref, externalUserId).catch((error: Error) => error)
      : undefined);
    // Get user info.
    const isErr = isError(userId);
    const selectFio = { select: { lastName: true, firstName: true, patronymic: true } };
    const fio = isString(userId)
      ? await this.prisma.userEntity.findFirstOrThrow({
        where: { id: userId },
        select: { employee: selectFio, student: { select: { passport: selectFio } } },
      }).then((user) => compact([
        user.student?.passport?.lastName || user.employee?.lastName,
        user.student?.passport?.firstName || user.employee?.firstName,
        user.student?.passport?.patronymic || user.employee?.patronymic,
      ]).join(' ') || 'Имя не указано')
      : undefined;
    // Return message.
    return compact([
      '👋 Добро пожаловать в бота Визового центра при ВолгГТУ!',
      isErr ? `❌ Возникла ошибка при подключении бота к веб-аккаунту: «${userId.message}»` : undefined, // TODO!: Опасная строчка, может выдать юзеру всё что угодно.
      !isErr && userId
        ? [`✅ Вы успешно подключены к своему аккаунту как ${fio}!`, '🤓 Здесь я буду присылать Вам важные уведомления.']
        : '⚠ Вы не подключены к своему веб-аккаунту, пожалуйста, войдите в свой аккаунт на сайте и повторите попытку подключения бота.',
    ]).flat().join('\n\n');
  }

  /**
   * Получение сообщения для команды /help.
   */
  public getHelpMessage() {
    return '🙌 У меня нет команд, но я могу отправлять Вам важные уведомления как только они появятся.';
  }
}
