import { Module } from '@nestjs/common';
import { VkBotService } from './vk-bot.service';
import { VkBotResolver } from './vk-bot.resolver';

@Module({
  providers: [
    VkBotService,
    VkBotResolver,
  ],
})
export class VkBotModule {}
