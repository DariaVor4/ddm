import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PartialDeep } from 'type-fest';
import ExcelJS from 'exceljs';
import { compact, range } from 'lodash';
import { throwCb } from '@common';
import XLSX from 'xlsx';
import { arrivalNoticeMarkup } from '../templates/arrival-notice-markup';
import { FileEntityResponse } from '../../file/responses/file-entity.response';
import { PrismaService } from '../../../prisma/prisma.service';
import { FileService } from '../../file/file.service';
import { VisaRequestConstants } from '../visa-request-constants';

@Injectable()
export class ArrivalNoticeExcelExportService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly fileService: FileService,
  ) {}

  public async exportExcelFile(studentId: string, select?: Prisma.FileEntitySelect): Promise<PartialDeep<FileEntityResponse>> {
    const {
      /* arrivalNotice, migrationCard, */ passport, visa,
    } = await this.prisma.studentEntity.findUniqueOrThrow({
      where: { id: studentId },
      select: {
        arrivalNotice: true, migrationCard: true, passport: true, visa: true,
      },
    }).catch(throwCb(new NotFoundException('Студент не найден')));

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(VisaRequestConstants.arrivalNoticeTemplatePathXls);
    const workSheet1 = workbook.getWorksheet(1);

    if (visa) {
      arrivalNoticeMarkup.visa.forEach((cell) => {
        const value = visa[cell.field];
        if (cell.type === 'string') {
          const insertingData = this.calcCells(value as string, cell.startCell, cell.step, cell.count);
          insertingData.forEach((data) => {
            workSheet1.getCell(data.cell).value = data.value;
          });
        }
      });
    }

    const buffer = (await workbook.xlsx.writeBuffer()) as Buffer;

    return this.fileService.fileCreate({
      fileName: `Уведомление о прибытии студента ${
        compact([passport?.lastName, passport?.firstName, passport?.patronymic]).join(' ') || studentId
      }.xlsx`,
      buffer,
      userId: studentId,
      expiresAt: new Date(Date.now() + VisaRequestConstants.docsExpires),
      select,
    });
  }

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
