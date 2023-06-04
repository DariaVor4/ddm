import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';

/**
 * Модуль для работы с файлами.
 */
@Module({
  providers: [FileService],
  controllers: [FileController],
  exports: [FileService],
})
export class FileModule {}
