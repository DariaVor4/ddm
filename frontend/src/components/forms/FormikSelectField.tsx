import { FC, forwardRef } from 'react';
import { useField, useFormikContext } from 'formik';
import type {
  FormControlProps as TFormControlProps,
  FormHelperTextProps as TFormHelperTextProps,
  InputLabelProps as TInputLabelProps,
} from '@mui/material';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  SelectProps,
} from '@mui/material';
import type { SetRequired } from 'type-fest';

type TFormikSelectFieldProps = SetRequired<SelectProps, 'name'> & {
  name: string;
  helpText?: string;
  shrink?: boolean;
  isVisible?: boolean;
  isHidden?: boolean;
  FormControlProps?: TFormControlProps;
  InputLabelProps?: TInputLabelProps;
  FormHelperTextProps?: TFormHelperTextProps;
};

export const FormikSelectField: FC<TFormikSelectFieldProps> = forwardRef(({
  name,
  helpText,
  isVisible,
  isHidden,
  children,
  label,
  InputLabelProps,
  FormHelperTextProps,
  FormControlProps,
  ...props
}, ref) => {
  const [field, meta] = useField(name);
  const { isSubmitting } = useFormikContext();

  if (isVisible === false || isHidden === true) return null;

  return (
    <>
      <FormControl fullWidth {...FormControlProps}>
        {label && (
          <InputLabel
            {...InputLabelProps}
          >
            {label}
          </InputLabel>
        )}
        <Select
          {...field}
          ref={ref}
          disabled={isSubmitting}
          error={meta.touched && !!meta.error}
          label={label}
          {...props}
        >
          {children}
        </Select>
        {helpText && <FormHelperText {...FormHelperTextProps}>{(meta.touched && meta.error) || helpText}</FormHelperText>}
      </FormControl>
    </>
  );
});
