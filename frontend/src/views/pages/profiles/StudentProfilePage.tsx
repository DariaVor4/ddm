import { FC, useEffect, useState } from 'react';
import {
  Button, IconButton, InputAdornment, Paper, Stack, Tooltip, Typography,
} from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { compact } from 'lodash';
import {
  GEmailAvailabilityVerdictEnum,
  GStudentUpsertInput,
  refetchStudentQuery,
  refetchStudentsQuery,
  useRegistrationMutation,
  useStudentQuery,
  useStudentUpsertMutation,
  useUserCurrentQuery,
} from '../../../api/generated.ts';
import { loginDialogOpenFn } from '../../../components/Dialogs/LoginDialog.tsx';
import { EmailConfirmationDialog, useEmailConfirmationDialog } from '../../../components/Dialogs/EmailConfirmationDialog.tsx';
import { AppRoutesEnum } from '../../../routes/app-routes.enum.ts';
import { strictPick } from '../../../core/strict-lodash/strict-pick.ts';
import { strictOmit } from '../../../core/strict-lodash/strict-omit.ts';
import { FormikTextField } from '../../../components/forms/FormikTextField.tsx';
import { checkPassword } from '../../../core/password-checker.ts';
import { emailAvailabilityQuery } from '../../../api/global-methods/check-email-availability.ts';
import { PageLoading } from '../../../components/PageLoading.tsx';
import { yupFormikValidate } from '../../../core/yup-formik-validate.ts';

// TODO: remove CreateInput
type StudentUpsertPageForm = GStudentUpsertInput & {
  passwordRepeat: string;
};

enum PageModeEnum {Register, Create, Update, SelfUpdate}

type TValidationSchemaCtx = { pageMode: PageModeEnum, originalEmail: string | null };
const validationSchema = yup.object<TValidationSchemaCtx>({
  lastName: yup.string().required('Фамилия обязательна'),
  firstName: yup.string().required('Имя обязательно'),
  patronymic: yup.string().optional(),
  email: yup.string().email('Неверный формат почты').required('Почта обязательна').test('email-availability', async (value, ctx) => {
    const originalEmail = ctx.options.context?.originalEmail;
    if (originalEmail && originalEmail === value) { return true; }
    const verdict = await emailAvailabilityQuery({ variables: { email: value } }).then(res => res.data.emailAvailability.verdict);
    if (verdict === GEmailAvailabilityVerdictEnum.Ok) { return true; }
    if (verdict === GEmailAvailabilityVerdictEnum.Incorrect) { return ctx.createError({ message: 'Неверный формат почты' }); }
    if (verdict === GEmailAvailabilityVerdictEnum.Occupied) { return ctx.createError({ message: 'Почта уже занята' }); }
    return ctx.createError({ message: 'Неизвестная ошибка' });
  }),
  password: yup.string().when(['$pageMode'], ([pageMode], schema, { value: value1 }) => ([PageModeEnum.Register, PageModeEnum.Create].includes(pageMode) || value1
    ? schema.min(8, 'Пароль должен быть не менее 8 символов').test('password-estimator', async (value, ctx) => checkPassword(value || '', ctx))
    : schema.optional())),
  passwordRepeat: yup.string().when(['$pageMode', 'password'], ([pageMode, password], schema) => ([PageModeEnum.Register, PageModeEnum.SelfUpdate].includes(pageMode) && password
    ? schema.oneOf([yup.ref('password')], 'Пароли должны совпадать').required('Повтор пароля обязателен')
    : schema.strip())),
  faculty: yup.string().required('Факультет обязателен'),
  course: yup.number().typeError('Курс должен быть числом')
    .min(1, 'Не может быть меньше 1')
    .max(10, 'Слишком большое значение')
    .required('Курс обязателен'),
  group: yup.string().required('Группа обязательна'),
  curator: yup.string().required('Куратор обязателен'),
});

// TODO ERROR: Сделать обработку ошибки если редактируемый студент не найден
// TODO ERROR: Обработать ошибку при редактировании профиля самим студентом
export const StudentProfilePage: FC = () => {
  // React Router
  const navigate = useNavigate();
  const { studentId } = useParams<{ studentId?: string }>();

  // Page mode
  const { data: { current } = {}, loading: isUserCurrentLoading } = useUserCurrentQuery();
  const isRegisterRoute = useMatch(AppRoutesEnum.RegisterRoute);
  const isStudentProfileRoute = useMatch(AppRoutesEnum.AccountSettingsRoute);
  const pageMode = isRegisterRoute ? PageModeEnum.Register
    : isStudentProfileRoute ? PageModeEnum.SelfUpdate
      : studentId ? PageModeEnum.Update
        : PageModeEnum.Create;
  const targetId = pageMode === PageModeEnum.Update ? studentId
    : pageMode === PageModeEnum.SelfUpdate ? current?.user.id
      : undefined;
  const pageTitle = pageMode === PageModeEnum.Register ? 'Регистрация'
    : pageMode === PageModeEnum.Create ? 'Создание студента'
      : pageMode === PageModeEnum.Update ? 'Редактирование студента'
        : /* pageMode === PageMode.SelfUpdate */ 'Редактирование профиля';
  const saveActionTitle = pageMode === PageModeEnum.Register ? 'Зарегистрироваться'
    : pageMode === PageModeEnum.Create ? 'Создать студента'
      : /* pageMode === PageMode.Update || pageMode === PageMode.SelfUpdate */ 'Сохранить изменения';

  // For register
  const emailConfirmationDialog = useEmailConfirmationDialog(state => strictPick(state, ['isEmailConfirmed', 'reset', 'open', 'confirm']));
  useEffect(() => {
    if (pageMode !== PageModeEnum.Register && !emailConfirmationDialog.isEmailConfirmed) emailConfirmationDialog.confirm();
  }, [emailConfirmationDialog, pageMode]);
  const [register] = useRegistrationMutation();

  // For update | create
  const [upsert] = useStudentUpsertMutation({
    refetchQueries: compact([
      [PageModeEnum.Create, PageModeEnum.Update].includes(pageMode) && refetchStudentsQuery(),
      [PageModeEnum.Create, PageModeEnum.SelfUpdate].includes(pageMode) && refetchStudentQuery({ studentId }),
    ]),
  });
  const { data: { student: studentOriginal } = {}, loading: isStudentOriginalLoading } = useStudentQuery({
    variables: { studentId },
    skip: [PageModeEnum.Register, PageModeEnum.Create].includes(pageMode),
  });

  // Other
  const [isShowPassword, setIsShowPassword] = useState(pageMode === PageModeEnum.Create);

  // Main
  const formik = useFormik<StudentUpsertPageForm>({
    enableReinitialize: [PageModeEnum.Update, PageModeEnum.SelfUpdate].includes(pageMode),
    initialValues: {
      lastName: studentOriginal?.passport?.lastName || '',
      firstName: studentOriginal?.passport?.firstName || '',
      patronymic: studentOriginal?.passport?.patronymic || '',
      email: studentOriginal?.user.email || '',
      password: '',
      passwordRepeat: '',
      faculty: studentOriginal?.faculty || '',
      course: studentOriginal?.course || 0,
      group: studentOriginal?.group || '',
      curator: studentOriginal?.curator || '',
      phone: studentOriginal?.phone || '',
    },
    onSubmit: async values => {
      const input = strictOmit(values, ['passwordRepeat']);
      if (pageMode === PageModeEnum.Register) {
        const isSuccess = await toast.promise(register({ variables: { input } }).then(value => value.data?.isRegistered), {
          pending: 'Загрузка...',
          success: 'Вы успешно зарегистрировались!',
          error: { render: ({ data: err }) => `Ошибка регистрации: ${err}` },
        });
        if (isSuccess) {
          navigate(AppRoutesEnum.HomeRoute);
          loginDialogOpenFn();
          emailConfirmationDialog.reset();
        }
      } else {
        await toast.promise(upsert({ variables: { input, studentId: targetId } }), {
          pending: 'Загрузка...',
          success: pageMode === PageModeEnum.Create ? 'Создание успешно!' : 'Данные обновлены!',
          error: { render: ({ data: err }) => `Ошибка сохранения: ${err}` },
        });
      }
    },
    validate: yupFormikValidate(validationSchema, {
      context: {
        pageMode,
        originalEmail: studentOriginal?.user.email || null,
      },
    }),
  });

  if (pageMode !== PageModeEnum.Register && (isUserCurrentLoading || isStudentOriginalLoading)) return <PageLoading />;

  return (
    <FormikProvider value={formik}>
      <EmailConfirmationDialog />
      <Stack
        alignItems='center'
        direction='row'
        display='flex'
        gap={2}
        justifyContent='center'
        marginBottom={1}
      >
        {pageMode !== PageModeEnum.Register && <IconButton onClick={() => navigate(-1)}><ArrowBackIcon /></IconButton>}
        <Typography align='center' fontWeight='500' variant='h5'>{pageTitle}</Typography>
      </Stack>
      <Paper className='px-10 py-4 pt-10 flex flex-col gap-4 mx-auto max-w-lg' elevation={4}>
        <FormikTextField label='Фамилия' name='lastName' required />
        <FormikTextField label='Имя' name='firstName' required />
        <FormikTextField label='Отчество' name='patronymic' />
        <FormikTextField
          disabled={pageMode === PageModeEnum.SelfUpdate}
          error={formik.touched.email && (!!formik.errors.email || !emailConfirmationDialog.isEmailConfirmed)}
          helperText={formik.touched.email && (formik.errors.email || (!emailConfirmationDialog.isEmailConfirmed && 'Подтвердите почту'))}
          label='Почта'
          name='email'
          type='email'
          InputProps={{
            endAdornment: formik.touched.email && !formik.errors.email && formik.values.email && (
              <InputAdornment position='end'>
                {emailConfirmationDialog.isEmailConfirmed
                  ? [PageModeEnum.Register, PageModeEnum.SelfUpdate] && <Tooltip title='Почта подтверждена ✅'><VerifiedIcon color='success' /></Tooltip>
                  : <Button size='small' variant='outlined' onClick={() => emailConfirmationDialog.open(formik.values.email!)}>Подтвердить</Button>}
              </InputAdornment>
            ),
          }}
          required
          onChange={e => {
            if ([PageModeEnum.Register, PageModeEnum.SelfUpdate].includes(pageMode)) emailConfirmationDialog.reset();
            formik.handleChange(e);
          }}
        />
        <FormikTextField
          label='Пароль'
          name='password'
          type={isShowPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end' onClick={() => setIsShowPassword(value => !value)}>
                <IconButton>{isShowPassword ? <VisibilityOff /> : <Visibility />}</IconButton>
              </InputAdornment>
            ),
          }}
          required
        />
        <FormikTextField
          isVisible={[PageModeEnum.Register, PageModeEnum.SelfUpdate].includes(pageMode)}
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
          onFocus={() => [PageModeEnum.Register, PageModeEnum.SelfUpdate].includes(pageMode) && setIsShowPassword(false)}
          onPaste={e => [PageModeEnum.Register, PageModeEnum.SelfUpdate].includes(pageMode) && e.preventDefault()}
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
          {pageMode !== PageModeEnum.Register
            && <Button color='error' disabled={formik.isSubmitting} onClick={() => navigate(-1)}>Отмена</Button>}
          {pageMode === PageModeEnum.Register
            && <Tooltip title='Уже зарегистрированы?'><Button variant='text' onClick={loginDialogOpenFn}>Вход</Button></Tooltip>}
          <Button disabled={formik.isSubmitting || !formik.dirty} onClick={formik.submitForm}>{saveActionTitle}</Button>
        </Stack>
      </Paper>
    </FormikProvider>
  );
};
