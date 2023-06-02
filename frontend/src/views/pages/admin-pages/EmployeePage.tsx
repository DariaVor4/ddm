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
import { useMatch, useParams } from 'react-router-dom';
import {
  GEmployeeUpsertInput,
  useEmailAvailabilityLazyQuery, useEmployeeQuery,
  useEmployeeUpsertMutation,
} from '../../../api/generated.ts';
import { checkPassword } from '../../../core/passwordChecker.ts';
import { FormikTextField } from '../../../components/forms/FormikTextField.tsx';
import {
  EmailConfirmationDialog,
  useEmailConfirmationDialog,
} from '../../../components/Dialogs/EmailConfirmationDialog.tsx';
import { strictPick } from '../../../core/strict-lodash/strict-pick.ts';
import { checkEmail } from '../../../core/emailChecker.ts';
import { AppRoutesEnum } from '../../app-routes.enum.ts';

export const EmployeePage: React.FC = () => {
  const { employeeId } = useParams<{ employeeId: string }>();
  const [checkEmailAvailability] = useEmailAvailabilityLazyQuery();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dialog = useEmailConfirmationDialog(state => strictPick(state, ['isEmailConfirmed', 'reset', 'open']));
  const [saveEmployee] = useEmployeeUpsertMutation();

  const isCreate = !!useMatch(AppRoutesEnum.EmployeeCreate);

  const { data: originalData } = useEmployeeQuery({
    skip: isCreate,
    variables: { employeeId },
  });

  const formik = useFormik<GEmployeeUpsertInput>({
    enableReinitialize: true,
    initialValues: {
      lastName: originalData?.employee.lastName || '',
      firstName: originalData?.employee.firstName || '',
      patronymic: originalData?.employee.patronymic || '',
      email: originalData?.employee.user.email || '',
      password: '',
      isAdmin: originalData?.employee.isAdmin || false,
    },
    onSubmit: async data => toast.promise(saveEmployee({
      variables: {
        input: {
          ...data,
          password: isCreate && data.password?.length ? data.password : undefined,
        },
        employeeId,
      },
    }), {
      pending: 'Сохранение...',
      success: 'Сохранено',
    }),
    // todo rework password validation
    validationSchema:
      isCreate
        ? yup.object({
          lastName: yup.string().required('Фамилия обязательна'),
          firstName: yup.string().required('Имя обязательно'),
          patronymic: yup.string().optional(),
          email: yup.string().email('Неверный формат почты').required('Почта обязательна').test('email-availability', async (value, ctx) => {
            const { data } = await checkEmailAvailability({ variables: { email: value } });
            return checkEmail(data, ctx);
          }),
          password: yup.string().min(8, 'Пароль должен быть длиннее 8 символов').required('Пароль обязателен').test('password-estimator', async (value, ctx) => checkPassword(value, ctx)),
          isAdmin: yup.boolean(),
        })
        : yup.object({
          lastName: yup.string().required('Фамилия обязательна'),
          firstName: yup.string().required('Имя обязательно'),
          patronymic: yup.string().optional(),
          email: yup.string().email('Неверный формат почты').required('Почта обязательна'),
          password: yup.string().optional(),
          isAdmin: yup.boolean(),
        }),
  });

  return (
    <FormikProvider value={formik}>
      <Paper className='px-10 py-4 flex flex-col gap-4 mx-auto max-w-lg' elevation={4}>
        <Typography className='text-center'>
          {
            isCreate ? 'Регистрация работника' : 'Изменение работника'
          }
        </Typography>
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
        <FormControl className='!flex-row items-center gap-3'>
          <FormLabel>Администратор:</FormLabel>
          <Checkbox
            checked={formik.values?.isAdmin ?? false}
            name='isAdmin'
            value='Администратор'
            onChange={formik.handleChange}
          />
        </FormControl>
        <Stack direction='row' gap={2} justifyContent='flex-end'>
          <Tooltip title='Сначала необходимо заполнить форму и подтвердить почту'>
            <span>
              <Button
                disabled={isCreate ? formik.isSubmitting || !formik.dirty : false}
                onClick={formik.submitForm}
              >
                {
                  isCreate ? 'Зарегистрировать' : 'Сохранить'
                }
              </Button>
            </span>
          </Tooltip>
        </Stack>
      </Paper>
      <EmailConfirmationDialog />
    </FormikProvider>
  );
};
