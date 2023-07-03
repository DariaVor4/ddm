import {
  Injectable, InternalServerErrorException, Logger, OnModuleInit,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as path from 'path';
import fs from 'fs/promises';
import { FileEntity } from '@prisma-nestjs-graphql';
import type { PartialDeep } from 'type-fest';
import { throwCb } from '@common';
import { compact, omit } from 'lodash';
import { PrismaService } from '../../prisma/prisma.service';
import { ConfigService } from '../../config/config.service';
import { FileEntityResponse } from './responses/file-entity.response';
import { FileConstants } from './file-constants';

interface TFileCreateParams {
  userId?: string;
  fileName: string;
  buffer: Buffer;
  subDirs?: string[];
  description?: string;
  select?: Prisma.FileEntitySelect;
  expiresAt?: Date;
}

/**
 * Сервис для работы с файлами.
 */
@Injectable()
export class FileService implements OnModuleInit {
  private readonly logger = new Logger(FileService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  public async onModuleInit() {
    // Интервал удаления устаревших файлов
    await this.killExpiredFiles();
    setInterval(this.killExpiredFiles, FileConstants.fileKillerInterval);
  }

  /**
   * Удаление устаревших файлов.
   */
  private killExpiredFiles = async () => {
    const expiredFiles = await this.prisma.fileEntity.findMany({
      where: { updatedAt: { lte: new Date() } },
      select: { id: true, dir: true, ext: true },
    });
    const deletedIds: string[] = [];
    await Promise.all(expiredFiles.map(async (file) => {
      await fs.unlink(this.getLocalFullFilePath(file))
        .then(() => deletedIds.push(file.id))
        .catch((err) => this.logger.error(`Ошибка удаления истёкшего файла "${file.id}": ${err.message}`));
    }));
    await this.prisma.fileEntity.deleteMany({ where: { id: { in: deletedIds } } });
  };

  /**
   * Сохранение файла в системе.
   * @param params Параметры создания файла.
   * @returns Запись созданного файла в БД.
   * @throws {InternalServerErrorException} Ошибка записи файла в БД или на диск.
   */
  public async fileCreate(params: TFileCreateParams): Promise<PartialDeep<FileEntityResponse>> {
    const subDirs = params.subDirs || [];
    let ext = path.extname(params.fileName).replace(/\./g, '') || undefined;
    if (ext) {
      ext = `.${ext.toLowerCase()}`;
    }

    return this.prisma.$transaction(async (prisma) => {
      // Сохранение файла в БД
      const file = await prisma.fileEntity.create({
        data: {
          dir: params.subDirs?.length ? path.join(...subDirs) : undefined,
          ext,
          name: params.fileName,
          description: params.description,
          user: params.userId ? { connect: { id: params.userId } } : undefined,
          deletedAt: params.expiresAt,
        },
        select: {
          ...omit(params.select, 'url'),
          id: true,
          dir: true,
          ext: true,
          name: true,
        },
      }).catch(throwCb((err) => new InternalServerErrorException(`Ошибка записи файла в БД: ${err.message}`)));

      // Сохранение файла на диск
      const filePath = this.getLocalFullFilePath(file);
      const fileDir = path.dirname(filePath);
      await fs.mkdir(fileDir, { recursive: true });
      await fs.writeFile(filePath, params.buffer)
        .catch(throwCb((err) => new InternalServerErrorException(`Ошибка записи файла на диск: ${err.message}`)));
      return {
        ...file,
        url: `/files/${file.id}`,
      };
    });
  }

  public getLocalFileName(file: Pick<FileEntity, 'id' | 'ext'>) {
    return compact([file.id, file.ext]).join('');
  }

  public getLocalFullFilePath(file: Pick<FileEntity, 'id' | 'ext' | 'dir'>) {
    return path.resolve(...compact([this.configService.config.filesStoragePath, file.dir, this.getLocalFileName(file)]));
  }
}
