import { FC, forwardRef, memo } from 'react';
import { useField, useFormikContext } from 'formik';
import { TextField, TextFieldProps } from '@mui/material';

type TFormikTextFieldProps = TextFieldProps & {
  name: string;
  helpText?: string;
  shrink?: boolean;
  isVisible?: boolean;
  isHidden?: boolean;
};

const titlePullUp = { shrink: true };

export const FormikTextField: FC<TFormikTextFieldProps> = memo(forwardRef(({
  name, helpText, shrink, isVisible, isHidden, ...props
}, ref) => {
  const [field, meta] = useField(name);
  const { isSubmitting } = useFormikContext();

  if (isVisible === false || isHidden === true) return null;

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
