import { forwardRef, Module } from '@nestjs/common';
import { VkBotModule } from './vk-bot/vk-bot.module';
import { TelegramBotModule } from './telegram-bot/telegram-bot.module';
import { BotsCommonService } from './services/bots-common.service';
import { BotsResolver } from './bots.resolver';
import { BotsMessagesService } from './services/bots-messages.service';

/**
 * Модуль внешних ботов.
 */
@Module({
  imports: [
    forwardRef(() => TelegramBotModule),
    forwardRef(() => VkBotModule),
  ],
  providers: [
    BotsResolver,
    BotsCommonService,
    BotsMessagesService,
  ],
  exports: [
    BotsCommonService,
    BotsMessagesService,
  ],
})
export class BotsModule {}
