/* eslint-disable no-return-assign */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import type { PartialDeep } from 'type-fest';
import ExcelJS from 'exceljs';
import { compact, isNil, range } from 'lodash';
import XLSX from 'xlsx';
import dayjs from 'dayjs';
import { arrivalNoticeMarkupPage1 } from '../templates/arrival-notice-markup-page-1';
import { FileEntityResponse } from '../../file/responses/file-entity.response';
import { PrismaService } from '../../../prisma/prisma.service';
import { FileService } from '../../file/file.service';
import { VisaRequestConstants } from '../visa-request-constants';
import { strictEntries, throwCb } from '../../../common';

/**
 * Сервис для экспорта Excel файла "Уведомление о прибытии" студента.
 */
@Injectable()
export class ArrivalNoticeExcelExportService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly fileService: FileService,
  ) {}

  /**
   * Экспорт файла Excel "Уведомление о прибытии" студента.
   * @param studentId Идентификатор студента.
   * @param select Поля для конечной выборки из БД.
   */
  public async exportExcelFile(studentId: string, select?: Prisma.FileEntitySelect): Promise<PartialDeep<FileEntityResponse>> {
    // Get tables data from database
    const dbData = await this.prisma.studentEntity.findUniqueOrThrow({
      where: { id: studentId },
      select: {
        arrivalNotice: true,
        migrationCard: true,
        passport: true,
        visa: true,
      },
    }).catch(throwCb(new NotFoundException('Студент не найден')));

    // Load Excel template file
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(VisaRequestConstants.arrivalNoticeTemplatePathXls);

    // Get first page
    const workSheet1 = workbook.getWorksheet(1);

    // TODO: Доделать вставку данных на все 4 страницы.. Возможно стоит разделить разные типы для вставки на разные методы
    // Insert data to first page
    strictEntries(arrivalNoticeMarkupPage1).forEach(([entityName, fieldsSchemas]) => {
      // If table data is null or undefined - skip
      if (isNil(dbData?.[entityName])) {
        return;
      }
      // For every field of table in JSON schema
      fieldsSchemas.forEach((fieldSchema) => {
        // Get data from database
        const data = (dbData[entityName] as any)[fieldSchema.field];
        if (fieldSchema.type === 'string') {
          // Insert string
          const cellsValues = this.calcCells(data as string, fieldSchema.startCell, fieldSchema.step, fieldSchema.count);
          cellsValues.forEach(({ cell, value }) => workSheet1.getCell(cell).value = value);
        } else if (fieldSchema.type === 'date') {
          // Insert date
          fieldSchema.values.forEach((valueSchema) => {
            const datePart = dayjs(data).format(valueSchema.format);
            const cellsValues = this.calcCells(datePart, valueSchema.startCell, valueSchema.step, valueSchema.count);
            cellsValues.forEach(({ cell, value }) => workSheet1.getCell(cell).value = value);
          });
        } else if (fieldSchema.type === 'enum') {
          // Checkbox by enum (boolean is unimplemented now..)
          workSheet1.getCell(fieldSchema.startCell).value = fieldSchema.value === data ? '✓' : '';
        } else if (fieldSchema.type === 'rows') {
          // Insert many rows
          // TODO: implement
        } else {
          throw new Error(`Unknown field type on export: ${fieldSchema satisfies never}`);
        }
      });
    });

    // Write buffer
    const buffer = (await workbook.xlsx.writeBuffer()) as Buffer;

    // Create & return file entity
    return this.fileService.fileCreate({
      fileName: `Уведомление о прибытии студента ${
        compact([dbData.passport?.lastName, dbData.passport?.firstName, dbData.passport?.patronymic]).join(' ') || studentId
      }.xlsx`,
      buffer,
      userId: studentId,
      expiresAt: new Date(Date.now() + VisaRequestConstants.docsExpires),
      select,
    });
  }

  /**
   * Рассчитать ячейки для вставки данных.
   * @param value Строковое значение.
   * @param startCell Начальная ячейка.
   * @param step Шаг.
   * @param cellsTotalCount Количество ячеек.
   * @returns Массив адресов ячеек и их значений.
   */
  private calcCells(value: string, startCell: string, step: number, cellsTotalCount: number) {
    const colStartIdx = XLSX.utils.decode_col(startCell.replace(/\d/g, ''));
    const row = startCell.replace(/\D/g, '');
    return range(Math.min(cellsTotalCount, value.length) || 0).map((_, i) => {
      const col = XLSX.utils.encode_col(colStartIdx + i * step);
      return {
        cell: `${col}${row}`,
        value: value[i],
      };
    });
  }
}
