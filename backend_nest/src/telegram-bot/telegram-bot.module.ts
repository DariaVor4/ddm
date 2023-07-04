import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramBotService } from './telegram-bot.service';
import { TelegramBotResolver } from './telegram-bot.resolver';
import { ConfigService } from '../config/config.service';
import { TelegramBotUpdate } from './telegram-bot.update';
import { PrismaService } from '../prisma/prisma.service';
import { TelegrafAppContext } from './telegraf-app-context';

/**
 * Модуль Telegram бота приложения.
 */
@Module({
  imports: [
    TelegrafModule.forRootAsync({
      inject: [ConfigService, PrismaService],
      useFactory: async (configService: ConfigService, prisma: PrismaService) => ({
        token: configService.config.telegramBotToken,
        middlewares: [
          /* ========== Connected user middleware ========== */
          async (ctx: TelegrafAppContext, next) => {
            if (ctx.from) {
              const user = await prisma.userEntity.findUnique({
                where: { telegramId: ctx.from.id },
                select: { id: true },
              });
              if (user) {
                ctx.state.userId = user.id;
              }
            }
            return next();
          },
          /* ========== Error middleware ========== */
          async (ctx: TelegrafAppContext, next) => next().catch(async (err) => {
            const error = err as Error;
            await ctx.reply(`К сожалению, во время обработки запроса возникла ошибка: ${error.message}.`);
          }),
        ],
      }),
    }),
  ],
  providers: [
    TelegramBotService,
    TelegramBotResolver,
    TelegramBotUpdate,
  ],
})
export class TelegramBotModule {}
