import { FC, forwardRef, memo } from 'react';
import { useField, useFormikContext } from 'formik';
import { TextField, TextFieldProps } from '@mui/material';

type TFormikTextFieldProps = TextFieldProps & {
  name: string;
  helpText?: string;
  shrink?: boolean;
};

const titlePullUp = { shrink: true };

export const FormikTextField: FC<TFormikTextFieldProps> = memo(forwardRef(({
  name, helpText, shrink, ...props
}, ref) => {
  const [field, meta] = useField(name);
  const { isSubmitting } = useFormikContext();

  return (
    <TextField
      {...field}
      ref={ref}
      disabled={isSubmitting}
      error={meta.touched && !!meta.error}
      helperText={(meta.touched && meta.error) || helpText}
      InputLabelProps={props.type === 'date' || shrink ? titlePullUp : undefined}
      {...props}
    />
  );
}));
