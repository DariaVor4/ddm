import { ChipProps } from '@mui/material';
import { GVisaRequestStatusEnum } from '../../api/generated.ts';

export const visaRequestStatusMapper = (status: GVisaRequestStatusEnum) => {
  switch (status) {
    case GVisaRequestStatusEnum.Pending:
      return 'Ожидает проверки сотрудником';
    case GVisaRequestStatusEnum.PendingCorrectionsByStudent:
      return 'Требуются правки студента';
    case GVisaRequestStatusEnum.Verified:
      return 'Проверена';
    case GVisaRequestStatusEnum.Finished:
      return 'Передана в визовый отдел';
    default:
      return `Неизвестный статус: ${status satisfies never}`;
  }
};

export const visaRequestStatusColorMapper = (status: GVisaRequestStatusEnum): ChipProps['color'] => {
  switch (status) {
    case GVisaRequestStatusEnum.Pending:
      return 'warning';
    case GVisaRequestStatusEnum.PendingCorrectionsByStudent:
      return 'secondary';
    case GVisaRequestStatusEnum.Verified:
      return 'success';
    case GVisaRequestStatusEnum.Finished:
      return 'default';
    default:
      return 'error';
  }
};
