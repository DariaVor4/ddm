import { useState } from 'react';
import * as yup from 'yup';
import { FormikProvider, useFormik } from 'formik';
import { toast } from 'react-toastify';
import {
  Button, Checkbox, FormControl, FormLabel, IconButton, InputAdornment, Paper, Stack, Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import { compact, omitBy } from 'lodash';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  GEmailAvailabilityVerdictEnum,
  GEmployeeUpsertInput,
  refetchEmployeeQuery,
  refetchEmployeesQuery,
  useEmployeeQuery,
  useEmployeeUpsertMutation,
  useUserCurrentQuery,
} from '../../../api/generated.ts';
import { checkPassword } from '../../../core/password-checker.ts';
import { FormikTextField } from '../../../components/forms/FormikTextField.tsx';
import { EmailConfirmationDialog, useEmailConfirmationDialog } from '../../../components/Dialogs/EmailConfirmationDialog.tsx';
import { strictPick } from '../../../core/strict-lodash/strict-pick.ts';
import { AppRoutesEnum } from '../../../routes/app-routes.enum.ts';
import { emailAvailabilityQuery } from '../../../api/global-methods/check-email-availability.ts';
import { yupFormikValidate } from '../../../core/yup-formik-validate.ts';

enum PageModeEnum {Create, Update, SelfUpdate}

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
  password: yup.string().when(['$pageMode'], ([pageMode], schema, { value: value1 }) => ([PageModeEnum.Create].includes(pageMode) || value1
    ? schema.min(8, 'Пароль должен быть не менее 8 символов').test('password-estimator', async (value, ctx) => checkPassword(value || '', ctx))
    : schema.optional())),
  passwordRepeat: yup.string().when(['$pageMode', 'password'], ([pageMode, password], schema) => ([PageModeEnum.SelfUpdate].includes(pageMode) && password
    ? schema.oneOf([yup.ref('password')], 'Пароли должны совпадать').required('Повтор пароля обязателен')
    : schema.strip())),
  isAdmin: yup.boolean(),
});

export const EmployeeProfilePage: React.FC = () => {
  // React Router
  const navigate = useNavigate();
  const { employeeId } = useParams<{ employeeId: string }>();

  // Current user
  const { data: { current } = {} } = useUserCurrentQuery();

  // Page mode
  const isCreate = !!useMatch(AppRoutesEnum.EmployeeCreate);

  const pageMode = isCreate ? PageModeEnum.Create
    : employeeId ? PageModeEnum.Update
      : PageModeEnum.SelfUpdate;

  const targetId = pageMode === PageModeEnum.SelfUpdate ? current?.user.id : employeeId;

  const pageTitle = pageMode === PageModeEnum.Create ? 'Регистрация работника'
    : pageMode === PageModeEnum.Update ? 'Изменение работника'
      : 'Изменение профиля';

  const saveActionTitle = pageMode === PageModeEnum.Create ? 'Зарегистрировать'
    : pageMode === PageModeEnum.Update ? 'Сохранить'
      : 'Изменить';

  // For create and update
  const [saveEmployee] = useEmployeeUpsertMutation({
    refetchQueries: compact([
      pageMode !== PageModeEnum.SelfUpdate && refetchEmployeesQuery(),
      pageMode !== PageModeEnum.Create && refetchEmployeeQuery({ employeeId }),
    ]),
  });

  // Get user data
  const { data: originalData } = useEmployeeQuery({
    skip: isCreate,
    variables: { employeeId },
  });

  // Form
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dialog = useEmailConfirmationDialog(state => strictPick(state, ['isEmailConfirmed', 'reset', 'open']));

  const formik = useFormik<GEmployeeUpsertInput>({
    enableReinitialize: pageMode !== PageModeEnum.Create,
    validateOnChange: false,
    initialValues: {
      lastName: originalData?.employee.lastName || '',
      firstName: originalData?.employee.firstName || '',
      patronymic: originalData?.employee.patronymic || '',
      email: originalData?.employee.user.email || '',
      password: '',
      isAdmin: originalData?.employee.isAdmin || false,
    },
    onSubmit: async data => {
      const isSuccess = await toast.promise(saveEmployee({
        variables: {
          input: omitBy(data, (value, key) => key === 'passwordRepeat' || (key === 'password' && value === '')),
          employeeId: targetId,
        },
      }), {
        pending: 'Сохранение...',
        success: 'Сохранено',
      });
      if (isSuccess && pageMode !== PageModeEnum.SelfUpdate) {
        navigate(AppRoutesEnum.EmployeesRoute);
      }
    },
    validate: yupFormikValidate(validationSchema, {
      context: {
        pageMode,
        originalEmail: originalData?.employee.user.email || null,
      },
    }),
  });

  return (
    <FormikProvider value={formik}>
      <Stack
        alignItems='center'
        direction='row'
        display='flex'
        gap={2}
        justifyContent='center'
        marginBottom={1}
      >
        <IconButton onClick={() => navigate(-1)}><ArrowBackIcon /></IconButton>
        <Typography align='center' fontWeight='500' variant='h5'>{pageTitle}</Typography>
      </Stack>
      <Paper className='px-10 py-4 pt-10 flex flex-col gap-4 mx-auto max-w-lg' elevation={4}>
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
        {
          pageMode === PageModeEnum.SelfUpdate
          && (
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
            onFocus={() => pageMode === PageModeEnum.SelfUpdate && setIsShowPassword(false)}
            onPaste={e => pageMode === PageModeEnum.SelfUpdate && e.preventDefault()}
          />
          )
        }
        {pageMode !== PageModeEnum.SelfUpdate
          && (
          <FormControl className='!flex-row items-center gap-3'>
            <FormLabel>Администратор:</FormLabel>
            <Checkbox
              checked={formik.values?.isAdmin ?? false}
              name='isAdmin'
              value='Администратор'
              onChange={formik.handleChange}
            />
          </FormControl>
          )}
        <Stack direction='row' gap={2} justifyContent='flex-end'>
          <Button color='error' disabled={formik.isSubmitting} onClick={() => navigate(-1)}>Отмена</Button>
          <Button
            disabled={formik.isSubmitting || !formik.dirty}
            onClick={formik.submitForm}
          >
            {saveActionTitle}
          </Button>
        </Stack>
      </Paper>
      <EmailConfirmationDialog />
    </FormikProvider>
  );
};
