import { Module } from '@nestjs/common';
import { VisaRequestResolver } from './visa-request.resolver';
import { VisaRequestWordExportService } from './services/visa-request-word-export.service';
import { ArrivalNoticeExcelExportService } from './services/arrival-notice-excel-export.service';
import { FileModule } from '../file/file.module';

/**
 * Модуль визовых анкет.
 */
@Module({
  providers: [
    VisaRequestResolver,
    VisaRequestWordExportService,
    ArrivalNoticeExcelExportService,
  ],
  imports: [FileModule],
})
export class VisaRequestModule {}
