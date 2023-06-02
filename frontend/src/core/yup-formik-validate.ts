import { yupToFormErrors } from 'formik';
import { Schema, ValidateOptions } from 'yup';

export const yupFormikValidate = <TValue, TCtx>(
  schema: Schema<TValue, TCtx>,
  options?: ValidateOptions<TCtx>,
) => async (values: TValue) => schema.validate(values, {
    ...options,
    abortEarly: false,
    stripUnknown: true,
  })
    .then(() => undefined)
    .catch(yupToFormErrors);
