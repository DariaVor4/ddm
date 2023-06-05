import path from 'path';
import ms from 'ms';

export const VisaRequestConstants = {
  visaRequestTemplatePathDocx: path.resolve(__dirname, 'templates', 'visa-request.docx'),
  arrivalNoticeTemplatePathXls: path.resolve(__dirname, 'templates', 'arrival-notice.xlsx'),
  docsExpires: ms('5m'), // TODO: Поместить время интервала в конфиг
} as const;
