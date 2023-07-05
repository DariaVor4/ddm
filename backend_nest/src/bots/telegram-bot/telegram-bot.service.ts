import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import type { UserFromGetMe } from 'typegram';
import ms from 'ms';
import { Message } from 'typegram';
import { TelegrafBotContext } from './telegraf-bot-context';
import { PrismaService } from '../../prisma/prisma.service';

/**
 * Сервис для работы с ботом Telegram.
 */
@Injectable()
export class TelegramBotService implements OnModuleInit {
  /**
   * Информация о боте Telegram.
   */
  public readonly botInfo: UserFromGetMe;

  constructor(
    @InjectBot() private readonly bot: Telegraf<TelegrafBotContext>,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Получает информацию о боте Telegram при инициализации модуля.
   */
  async onModuleInit() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // noinspection JSConstantReassignment
    this.botInfo = await this.bot.telegram.getMe();
  }

  public async getConnectionLink(ref: string) {
    return `https://t.me/${this.botInfo.username}?start=${ref}`;
  }

  public async sendMessages(externalIds: string[], message: string) {
    const errored: string[] = [];
    await Promise.all(externalIds.map(
      async (externalId) => this.bot.telegram.sendMessage(externalId, message)
        .catch(() => errored.push(externalId)),
    ));
    return { errored };
  }
}
