import * as yup from 'yup';
import { GEmailAvailabilityQuery, GEmailAvailabilityVerdictEnum } from '../api/generated.ts';

export const checkEmail = (data: GEmailAvailabilityQuery | undefined, ctx: yup.TestContext) => {
  switch (data?.emailAvailability.verdict) {
    case GEmailAvailabilityVerdictEnum.Ok:
      return true;
    case GEmailAvailabilityVerdictEnum.Incorrect:
      return ctx.createError({ message: 'Неверный формат почты' });
    case GEmailAvailabilityVerdictEnum.Occupied:
      return ctx.createError({ message: 'Почта уже занята' });
    default:
      return ctx.createError({ message: 'Неизвестная ошибка' });
  }
};
