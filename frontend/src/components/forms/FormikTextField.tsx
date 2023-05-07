import { FC, forwardRef, memo } from 'react';
import { useField, useFormikContext } from 'formik';
import { TextField, TextFieldProps } from '@mui/material';
import dayjs from 'dayjs';

type TFormikTextFieldProps = TextFieldProps & {
  name: string;
  helpText?: string;
  shrink?: boolean;
};

const titlePullUp = { shrink: true };

const FormikTextField: FC<TFormikTextFieldProps> = memo(forwardRef(({
  name, helpText, shrink, ...props
}, ref) => {
  const [{ value, ...field }, meta] = useField(name);
  const { isSubmitting } = useFormikContext();

  return (
    <TextField
      {...field}
      ref={ref}
      value={props.type === 'date' ? dayjs(value).format('DD.MM.YYYY') : value}
      error={meta.touched && !!meta.error}
      helperText={(meta.touched && meta.error) || helpText}
      disabled={isSubmitting}
      InputLabelProps={props.type === 'date' || shrink ? titlePullUp : undefined}
      {...props}
    />
  );
}));

export default FormikTextField;
