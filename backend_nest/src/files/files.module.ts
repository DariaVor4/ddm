import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';

// TODO: Implement this module for downloading files from the server.
@Module({
  providers: [FilesService],
  controllers: [FilesController],
})
export class FilesModule {}
