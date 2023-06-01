import React, { useState } from 'react';
import * as yup from 'yup';
import { FormikProvider, useFormik } from 'formik';
import { toast } from 'react-toastify';
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  GEmailAvailabilityVerdictEnum,
  GEmployeeUpsertInput,
  useEmailAvailabilityLazyQuery,
  useEmployeeUpsertMutation,
} from '../../../api/generated.ts';
import { checkPassword } from '../../../core/passwordChecker.ts';
import { FormikTextField } from '../../../components/forms/FormikTextField.tsx';
import {
  EmailConfirmationDialog,
  useEmailConfirmationDialog,
} from '../../../components/Dialogs/EmailConfirmationDialog.tsx';
import { strictPick } from '../../../core/strict-lodash/strict-pick.ts';
import { strictOmit } from '../../../core/strict-lodash/strict-omit.ts';

interface EmployeeCreationFormValue extends GEmployeeUpsertInput {
  passwordRepeat: string;
}

export const EmployeeCreatePage: React.FC = () => {
  const [checkEmailAvailability] = useEmailAvailabilityLazyQuery();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dialog = useEmailConfirmationDialog(state => strictPick(state, ['isEmailConfirmed', 'reset', 'open']));
  const [saveEmployee] = useEmployeeUpsertMutation();

  const formik = useFormik<EmployeeCreationFormValue>({
    enableReinitialize: true,
    initialValues: {
      lastName: '',
      firstName: '',
      patronymic: '',
      email: '',
      password: '',
      passwordRepeat: '',
      isAdmin: false,
    },
    onSubmit: async data => toast.promise(saveEmployee({
      variables: {
        input: strictOmit(data, ['passwordRepeat']),
      },
    }), {
      pending: 'Сохранение...',
      success: 'Сохранено',
    }),
    validationSchema: yup.object({
      lastName: yup.string().required('Фамилия обязательна'),
      firstName: yup.string().required('Имя обязательно'),
      patronymic: yup.string().optional(),
      email: yup.string().email('Неверный формат почты').required('Почта обязательна').test('email-availability', async (value, ctx) => {
        const { data } = await checkEmailAvailability({ variables: { email: value } });
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
      }),
      password: yup.string().min(8, 'Пароль должен быть длиннее 8 символов').required('Пароль обязателен').test('password-estimator', async (value, ctx) => checkPassword(value, ctx)),
      passwordRepeat: yup.string().oneOf([yup.ref('password')], 'Пароли должны совпадать').required('Повтор пароля обязателен'),
      isAdmin: yup.boolean(),
    }),
  });

  return (
    <FormikProvider value={formik}>
      <Paper className='px-10 py-4 flex flex-col gap-4 mx-auto max-w-lg' elevation={4}>
        <Typography className='text-center'>Регистрация работника</Typography>
        <FormikTextField label='Фамилия' name='lastName' required />
        <FormikTextField label='Имя' name='firstName' required />
        <FormikTextField label='Отчество' name='patronymic' />
        <FormikTextField
          error={formik.touched.email && !!formik.errors.email}
          label='Почта'
          name='email'
          type='email'
          required
          onChange={e => {
            dialog.reset();
            formik.handleChange(e);
          }}
        />
        <FormikTextField
          label='Пароль'
          name='password'
          type={isShowPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end' onClick={() => setIsShowPassword(!isShowPassword)}>
                <IconButton>
                  {isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
        />
        <FormikTextField
          label='Повторите пароль'
          name='passwordRepeat'
          type={isShowPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end' onClick={() => setIsShowPassword(!isShowPassword)}>
                <IconButton>
                  {isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
          onFocus={() => setIsShowPassword(false)}
          onPaste={e => e.preventDefault()}
        />
        <FormControl className='!flex-row items-center gap-3'>
          <FormLabel>Администратор:</FormLabel>
          <Checkbox
            {/*todo я не придумал....*/}
            checked={formik.values?.isAdmin}
            name='isAdmin'
            value='Администратор'
            onChange={formik.handleChange}
          />
        </FormControl>
        <Stack direction='row' gap={2} justifyContent='flex-end'>
          <Tooltip title='Сначала необходимо заполнить форму и подтвердить почту'>
            <span>
              <Button
                disabled={formik.isSubmitting || !formik.dirty}
                onClick={formik.submitForm}
              >
                Зарегистрировать
              </Button>
            </span>
          </Tooltip>
        </Stack>
      </Paper>
      <EmailConfirmationDialog />
    </FormikProvider>
  );
};
