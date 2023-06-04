import {
  Controller, Get, InternalServerErrorException, NotFoundException, Param, Res,
} from '@nestjs/common';
import { Response } from 'express';
import { throwCb } from '@common';
import fs from 'fs/promises';
import path from 'path';
import { compact } from 'lodash';
import { PublicEndpoint } from '../auth/decorators/public.decorator';
import { PrismaService } from '../../prisma/prisma.service';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/user-role.enum';
import { ConfigService } from '../../config/config.service';

/**
 * Контроллер для получения или отправки файлов.
 */
@Controller('files')
export class FileController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
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
    const file = await this.prisma.fileEntity.findUniqueOrThrow({ where: { id: fileId } })
      .catch(throwCb(new NotFoundException('Файл не найден')));

    const localFileName = file.id + (file.ext || '');
    const filePath = path.join(this.configService.config.filesStoragePath, ...compact([file.dir, localFileName]));

    const isFileExists = await fs.access(filePath).then(() => true).catch(() => false);
    if (!isFileExists) {
      throw new InternalServerErrorException('Файл не существует');
    }

    res.download(filePath, file.name || file.id);
  }
}
