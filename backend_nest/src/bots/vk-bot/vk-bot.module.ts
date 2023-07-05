import { forwardRef, Module } from '@nestjs/common';
import { VkModule } from 'nestjs-vk';
import { ConfigService } from '../../config/config.service';
import { VkBotUpdate } from './vk-bot.update';
import { VkBotService } from './vk-bot.service';
import { VkBotContext } from './vk-bot-context';
import { PrismaService } from '../../prisma/prisma.service';
import { BotsModule } from '../bots.module';

/**
 Модуль VK бота приложения.
 */
@Module({
  imports: [
    forwardRef(() => BotsModule),
    VkModule.forRootAsync({
      inject: [ConfigService, PrismaService],
      useFactory: (configService: ConfigService, prisma: PrismaService) => ({
        token: configService.config.vkBotToken,
        middlewaresBefore: [
          /* ========== Connected user middleware ========== */
          async (ctx: VkBotContext, next) => {
            // console.log(ctx.type, ctx);
            if (ctx.isOutbox || ctx.type !== 'message' || !ctx.senderId) {
              return;
            }
            ctx.state.userId = await prisma.userEntity.findUnique({
              where: { vkId: ctx.senderId.toString() }, select: { id: true },
            }).then((user) => user?.id);
            await next();
          },
          /* ========== Error middleware ========== */
          async (ctx: VkBotContext, next) => next().catch(async (err) => {
            const error = err as Error;
            console.error('VkBotError:', error);
            await ctx.reply(`К сожалению, во время обработки запроса возникла ошибка: ${error.message}.`);
            throw error;
          }),
        ],
      }),
    }),
  ],
  providers: [
    VkBotService,
    VkBotUpdate,
  ],
  exports: [
    VkBotService,
  ],
})
export class VkBotModule {}
