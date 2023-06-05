import {
  Controller, Get, InternalServerErrorException, NotFoundException, Param, Res,
} from '@nestjs/common';
import { Response } from 'express';
import { throwCb } from '@common';
import fs from 'fs/promises';
import { PublicEndpoint } from '../auth/decorators/public.decorator';
import { PrismaService } from '../../prisma/prisma.service';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/user-role.enum';
import { ConfigService } from '../../config/config.service';
import { FileService } from './file.service';

/**
 * Контроллер для получения или отправки файлов.
 */
@Controller('files')
export class FileController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly fileService: FileService,
  ) {}

  /**
   * Отправка файла, запрошенного с клиента.
   * TODO: добавить проверку доступа.
   * @param fileId Идентификатор файла.
   * @param res Ответ.
   * @throws {NotFoundException} Файл не найден.
   * @throws {InternalServerErrorException} Файл не существует.
   */
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  @Get('/:fileId')
  async getFile(@Param('fileId') fileId: string, @Res() res: Response) {
    const file = await this.prisma.fileEntity.findUniqueOrThrow({
      where: { id: fileId },
      select: {
        id: true, dir: true, ext: true, name: true,
      },
    }).catch(throwCb(new NotFoundException('Файл не найден')));

    const filePath = this.fileService.getLocalFullFilePath(file);

    const isFileExists = await fs.access(filePath).then(() => true).catch(() => false);
    if (!isFileExists) {
      throw new InternalServerErrorException('Файл не существует');
    }

    res.download(filePath, file.name || file.id);
  }
}
