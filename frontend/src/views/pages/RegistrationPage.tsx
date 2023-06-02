import { FC, useState } from 'react';
import {
  Button, IconButton, InputAdornment, Paper, Stack, Tooltip, Typography,
} from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useNavigate } from 'react-router-dom';
import { GEmailAvailabilityVerdictEnum, GStudentUpsertInput, useRegistrationMutation } from '../../api/generated';
import { loginDialogOpenFn } from '../../components/Dialogs/LoginDialog';
import { EmailConfirmationDialog, useEmailConfirmationDialog } from '../../components/Dialogs/EmailConfirmationDialog';
import { AppRoutesEnum } from '../app-routes.enum.ts';
import { strictPick } from '../../core/strict-lodash/strict-pick.ts';
import { strictOmit } from '../../core/strict-lodash/strict-omit.ts';
import { FormikTextField } from '../../components/forms/FormikTextField.tsx';
import { checkPassword } from '../../core/password-checker.ts';
import { emailAvailabilityQuery } from '../../api/global-methods/check-email-availability.ts';
import { SetNonNil } from '../../core/type-utils/set-non-nil.type.ts';

interface RegisterFormValue extends SetNonNil<GStudentUpsertInput, 'email' | 'password'> {
  passwordRepeat: string;
}

export const RegistrationPage: FC = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dialog = useEmailConfirmationDialog(state => strictPick(state, ['isEmailConfirmed', 'reset', 'open']));
  const [register] = useRegistrationMutation();
  const formik = useFormik<RegisterFormValue>({
    initialValues: {
      lastName: '',
      firstName: '',
      patronymic: '',
      email: '',
      password: '',
      passwordRepeat: '',
      faculty: '',
      course: null,
      group: '',
      curator: '',
      phone: '',
    },
    onSubmit: async values => {
      const { data } = await register({ variables: { input: strictOmit(values, ['passwordRepeat']) } });
      if (data?.isRegistered) {
        navigate(AppRoutesEnum.HomeRoute);
        loginDialogOpenFn();
        dialog.reset();
      } else {
        alert('Произошла ошибка');
      }
    },
    validationSchema: yup.object({
      lastName: yup.string().required('Фамилия обязательна'),
      firstName: yup.string().required('Имя обязательно'),
      patronymic: yup.string().optional(),
      email: yup.string().email('Неверный формат почты').required('Почта обязательна').test('email-availability', async (value, ctx) => {
        const { data } = await emailAvailabilityQuery({ variables: { email: value } });
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
      faculty: yup.string().required('Факультет обязателен'),
      course: yup.number().required('Курс обязателен').typeError('Курс должен быть числом'),
      group: yup.string().required('Группа обязательна'),
      curator: yup.string().required('Куратор обязателен'),
    }),
  });

  return (
    <FormikProvider value={formik}>
      <EmailConfirmationDialog />
      <Paper className='px-10 py-4 flex flex-col gap-4 mx-auto max-w-lg' elevation={4}>
        <Typography className='text-center'>Регистрация студента</Typography>
        <FormikTextField label='Фамилия' name='lastName' required />
        <FormikTextField label='Имя' name='firstName' required />
        <FormikTextField label='Отчество' name='patronymic' />
        <FormikTextField
          error={formik.touched.email && (!!formik.errors.email || !dialog.isEmailConfirmed)}
          helperText={formik.touched.email && (formik.errors.email || (!dialog.isEmailConfirmed && 'Подтвердите почту'))}
          label='Почта'
          name='email'
          type='email'
          InputProps={{
            endAdornment: formik.touched.email && !formik.errors.email && formik.values.email && (
              <InputAdornment position='end'>
                {dialog.isEmailConfirmed
                  ? <Tooltip title='Почта подтверждена ✅'><VerifiedIcon color='success' /></Tooltip>
                  : (
                    <Button
                      size='small'
                      variant='outlined'
                      onClick={() => dialog.open(formik.values.email)}
                    >
                      Подтвердить
                    </Button>
                  )}
              </InputAdornment>
            ),
          }}
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
        <FormikTextField label='Факультет' name='faculty' required />
        <FormikTextField
          label='Курс'
          name='course'
          type='number'
          required
        />
        <FormikTextField label='Группа' name='group' required />
        <FormikTextField label='Куратор' name='curator' required />
        <Stack direction='row' gap={2} justifyContent='flex-end'>
          <Tooltip title='Уже зарегистрированы?'>
            <span><Button variant='text' onClick={loginDialogOpenFn}>Вход</Button></span>
          </Tooltip>
          <Tooltip title='Сначала необходимо заполнить форму и подтвердить почту'>
            <span>
              <Button
                disabled={formik.isSubmitting || !formik.dirty}
                onClick={formik.submitForm}
              >
                Зарегистрироваться
              </Button>
            </span>
          </Tooltip>
        </Stack>
      </Paper>
    </FormikProvider>
  );
};
