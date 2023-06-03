import { FC, forwardRef, memo } from 'react';
import { useField, useFormikContext } from 'formik';
import { TextField, TextFieldProps } from '@mui/material';

type TFormikTextFieldProps = TextFieldProps & {
  name: string;
  helpText?: string;
  shrink?: boolean;
  visible?: boolean | string;
  hidden?: boolean;
};

const titlePullUp = { shrink: true };

export const FormikTextField: FC<TFormikTextFieldProps> = memo(forwardRef(({
  name, helpText, shrink, ...props
}, ref) => {
  const [field, meta] = useField(name);
  const { isSubmitting } = useFormikContext();

  if (props.visible === false || props.hidden === true) return null;

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
