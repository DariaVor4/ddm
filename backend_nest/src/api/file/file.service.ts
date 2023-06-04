import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as path from 'path';
import fs from 'fs/promises';
import { FileEntity } from '@prisma-nestjs-graphql';
import { PartialDeep } from 'type-fest';
import { throwCb } from '@common';
import { omit } from 'lodash';
import { PrismaService } from '../../prisma/prisma.service';
import { ConfigService } from '../../config/config.service';
import { FileEntityResponse } from './responses/file-entity.response';

interface TFileCreateParams {
  userId?: string;
  fileName: string;
  buffer: Buffer;
  subDirs?: string[];
  description?: string;
  select?: Prisma.FileEntitySelect;
}

/**
 * Сервис для работы с файлами.
 */
@Injectable()
export class FileService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Сохранение файла в системе.
   * @param params Параметры создания файла.
   * @returns Запись созданного файла в БД.
   * @throws {InternalServerErrorException} Ошибка записи файла в БД или на диск.
   */
  public async fileCreate(params: TFileCreateParams): Promise<PartialDeep<FileEntityResponse>> {
    const subDirs = params.subDirs || [];
    const ext = path.extname(params.fileName) || undefined;
    return this.prisma.$transaction(async (prisma) => {
      // Сохранение файла в БД
      const file = await prisma.fileEntity.create({
        data: {
          dir: params.subDirs?.length ? path.join(...subDirs) : undefined,
          ext,
          name: params.fileName,
          description: params.description,
          user: params.userId ? { connect: { id: params.userId } } : undefined,
        },
        select: { ...omit(params.select, 'url'), id: true },
      }).catch(throwCb((err) => new InternalServerErrorException(`Ошибка записи файла в БД: ${err.message}`)));

      // Сохранение файла на диск
      const fileDir = path.resolve(this.configService.config.filesStoragePath, ...subDirs);
      await fs.mkdir(fileDir, { recursive: true });

      console.debug('Saving file into dir:', fileDir);
      const filePath = path.resolve(fileDir, `${file.id}.${ext?.replace('.', '')}`);
      await fs.writeFile(filePath, params.buffer)
        .catch(throwCb((err) => new InternalServerErrorException(`Ошибка записи файла на диск: ${err.message}`)));
      console.debug('File saved:', filePath);
      return {
        ...file,
        url: `/files/${file.id}`,
      };
    });
  }

  /**
   * Получение URL файла.
   * @param file Файл или его ID.
   * @returns URL файла.
   * @throws {InternalServerErrorException} Файл не найден.
   */
  public async getFileUrl(file: string | FileEntity): Promise<string> {
    const fileEntity = typeof file === 'string'
      ? await this.prisma.fileEntity.findUniqueOrThrow({ where: { id: file } })
        .catch(throwCb(new InternalServerErrorException('Файл не найден')))
      : file;
    return `/files/${fileEntity.id}`;
  }
}
