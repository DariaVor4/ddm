import { forwardRef, Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramBotService } from './telegram-bot.service';
import { ConfigService } from '../../config/config.service';
import { TelegramBotUpdate } from './telegram-bot.update';
import { PrismaService } from '../../prisma/prisma.service';
import { TelegrafBotContext } from './telegraf-bot-context';
import { BotsModule } from '../bots.module';

/**
 * Модуль Telegram бота приложения.
 */
@Module({
  imports: [
    forwardRef(() => BotsModule),
    TelegrafModule.forRootAsync({
      inject: [ConfigService, PrismaService],
      useFactory: async (configService: ConfigService, prisma: PrismaService) => ({
        token: configService.config.telegramBotToken,
        middlewares: [
          /* ========== Connected user middleware ========== */
          async (ctx: TelegrafBotContext, next) => {
            if (ctx.from) {
              const user = await prisma.userEntity.findUnique({
                where: { telegramId: ctx.from.id.toString() },
                select: { id: true },
              });
              if (user) {
                ctx.state.userId = user.id;
              }
            }
            return next();
          },
          /* ========== Error middleware ========== */
          async (ctx: TelegrafBotContext, next) => next().catch(async (err) => {
            const error = err as Error;
            await ctx.reply(`К сожалению, во время обработки запроса возникла ошибка: ${error.message}.`);
          }),
        ],
      }),
    }),
  ],
  providers: [
    TelegramBotService,
    TelegramBotUpdate,
  ],
  exports: [
    TelegramBotService,
  ],
})
export class TelegramBotModule {}
