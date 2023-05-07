import { FC, useState } from 'react';
import {
  Button, IconButton, InputAdornment, Paper, Stack, TextField, Tooltip, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useNavigate } from 'react-router-dom';
import {
  GEmailAvailabilityVerdictEnum, GStudentCreateInput, useEmailAvailabilityLazyQuery, useRegistrationMutation,
} from '../../api/generated';
import { loginDialogOpenFn } from '../../components/Dialogs/LoginDialog';
import EmailConfirmationDialog, { useEmailConfirmationDialog } from '../../components/Dialogs/EmailConfirmationDialog';
import AppRoutesEnum from '../routes.enum';
import strictPick from '../../core/strict-lodash/strict-pick.ts';
import strictOmit from '../../core/strict-lodash/strict-omit.ts';

interface RegisterFormValue extends GStudentCreateInput {
  passwordRepeat: string;
}

const RegistrationPage: FC = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dialog = useEmailConfirmationDialog(state => strictPick(state, ['isEmailConfirmed', 'reset', 'open']));
  const [checkEmailAvailability] = useEmailAvailabilityLazyQuery();
  const [register] = useRegistrationMutation();
  const formik = useFormik<RegisterFormValue>({
    initialValues: {
      lastName: '',
      firstName: '',
      patronymic: '',
      email: '',
      password: '',
      passwordRepeat: '',
      faculty: null,
      course: null,
      group: null,
      curator: null,
      phone: null,
    },
    onSubmit: async values => {
      const { data } = await register({ variables: { input: strictOmit(values, ['passwordRepeat']) } });
      if (data?.registration) {
        navigate(AppRoutesEnum.Home);
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
      password: yup.string().min(8, 'Пароль должен быть длиннее 8 символов').required('Пароль обязателен'),
      passwordRepeat: yup.string().oneOf([yup.ref('password')], 'Пароли должны совпадать').required('Повтор пароля обязателен'),
      faculty: yup.string().required('Факультет обязателен'),
      course: yup.number().required('Курс обязателен').typeError('Курс должен быть числом'),
      group: yup.string().required('Группа обязательна'),
      curator: yup.string().required('Куратор обязателен'),
    }),
  });

  return (
    <>
      <Paper className='px-10 py-4 flex flex-col gap-4 mx-auto max-w-lg' elevation={4}>
        <Typography className='text-center'>Регистрация студента</Typography>
        <TextField
          name='lastName'
          size='small'
          required
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          disabled={formik.isSubmitting}
          helperText={formik.touched.lastName && formik.errors.lastName}
          label='Фамилия'
          variant='outlined'
        />
        <TextField
          required
          size='small'
          name='firstName'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          disabled={formik.isSubmitting}
          helperText={formik.touched.firstName && formik.errors.firstName}
          label='Имя'
          variant='outlined'
        />
        <TextField
          name='patronymic'
          size='small'
          value={formik.values.patronymic}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.patronymic && Boolean(formik.errors.patronymic)}
          disabled={formik.isSubmitting}
          helperText={formik.touched.patronymic && formik.errors.patronymic}
          label='Отчество'
          variant='outlined'
        />
        <TextField
          required
          size='small'
          name='email'
          value={formik.values.email}
          onChange={e => {
            dialog.reset();
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
          error={formik.touched.email && (!!formik.errors.email || !dialog.isEmailConfirmed)}
          disabled={formik.isSubmitting}
          helperText={formik.touched.email && (formik.errors.email || (!dialog.isEmailConfirmed && 'Подтвердите почту'))}
          label='Почта'
          variant='outlined'
          InputProps={{
            endAdornment: formik.touched.email && !formik.errors.email && formik.values.email && (
            <InputAdornment position='end'>
              {dialog.isEmailConfirmed
                ? <Tooltip title='Почта подтверждена ✅'><VerifiedIcon color='success' /></Tooltip>
                : <Button size='small' variant='outlined' onClick={() => dialog.open(formik.values.email)}>Подтвердить</Button>}
            </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          size='small'
          name='password'
          type={isShowPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          disabled={formik.isSubmitting}
          helperText={formik.touched.password && formik.errors.password}
          label='Пароль'
          variant='outlined'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end' onClick={() => setIsShowPassword(!isShowPassword)}>
                <IconButton>
                  {isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          size='small'
          name='passwordRepeat'
          type={isShowPassword ? 'text' : 'password'}
          value={formik.values.passwordRepeat}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.passwordRepeat && Boolean(formik.errors.passwordRepeat)}
          disabled={formik.isSubmitting}
          helperText={formik.touched.passwordRepeat && formik.errors.passwordRepeat}
          label='Повторите пароль'
          variant='outlined'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end' onClick={() => setIsShowPassword(!isShowPassword)}>
                <IconButton>
                  {isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          size='small'
          name='faculty'
          value={formik.values.faculty}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.faculty && Boolean(formik.errors.faculty)}
          disabled={formik.isSubmitting}
          helperText={formik.touched.faculty && formik.errors.faculty}
          label='Факультет'
          variant='outlined'
        />
        <TextField
          required
          size='small'
          name='course'
          type='number'
          value={formik.values.course}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.course && Boolean(formik.errors.course)}
          disabled={formik.isSubmitting}
          helperText={formik.touched.course && formik.errors.course}
          label='Курс'
          variant='outlined'
        />
        <TextField
          required
          size='small'
          name='group'
          value={formik.values.group}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.group && Boolean(formik.errors.group)}
          disabled={formik.isSubmitting}
          helperText={formik.touched.group && formik.errors.group}
          label='Группа'
          variant='outlined'
        />
        <TextField
          required
          size='small'
          name='curator'
          value={formik.values.curator}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.curator && Boolean(formik.errors.curator)}
          disabled={formik.isSubmitting}
          helperText={formik.touched.curator && formik.errors.curator}
          label='Куратор'
          variant='outlined'
        />
        <Stack direction='row' justifyContent='flex-end' gap={2}>
          <Tooltip title='Уже зарегистрированы?'>
            <Button variant='text' onClick={loginDialogOpenFn}>Вход</Button>
          </Tooltip>
          <Tooltip title='Сначала необходимо заполнить форму и подтвердить почту'>
            <span>
              <Button
                disabled={formik.isSubmitting || !formik.isValid || !formik.dirty || !dialog.isEmailConfirmed}
                onClick={formik.submitForm}
              >
                Зарегистрироваться
              </Button>
            </span>
          </Tooltip>
        </Stack>
      </Paper>
      <EmailConfirmationDialog />
    </>
  );
};

export default RegistrationPage;
