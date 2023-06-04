import { FC, useState } from 'react';
import {
  Alert, Button, Collapse, DialogActions, DialogContent, IconButton, InputAdornment,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import { makeVar, useReactiveVar } from '@apollo/client';
import { AppRoutesEnum } from '../../routes/app-routes.enum.ts';
import { GLoginByPasswordMutationVariables, useLoginByPasswordMutation } from '../../api/generated';
import { authHelper } from '../../api/apollo-client.tsx';
import { onEnterDown } from '../../core/on-enter-down.ts';
import { FormikTextField } from '../forms/FormikTextField.tsx';
import { AppDialog } from './AppDialog.tsx';

const isLoginDialogOpenVar = makeVar(false);
export const loginDialogOpenFn = () => isLoginDialogOpenVar(true);
const loginDialogCloseFn = () => isLoginDialogOpenVar(false);
const authResultMessageVar = makeVar<string | null>(null);

export const LoginDialog: FC = () => {
  const isOpen = useReactiveVar(isLoginDialogOpenVar);
  const [showPassword, setShowPassword] = useState(false);
  const authResultMessage = useReactiveVar(authResultMessageVar);
  const [loginByPassword] = useLoginByPasswordMutation({
    onCompleted: async data => {
      loginDialogCloseFn();
      await authHelper.login(data.response);
    },
    onError: error => {
      if ((error.graphQLErrors.at(0)?.extensions as any)?.originalError?.statusCode === 401) {
        authResultMessageVar('Данные входа неверны!');
        setTimeout(() => authResultMessageVar(null), 5000);
      } else {
        authResultMessageVar(error.message);
        setTimeout(() => authResultMessageVar(null), 5000);
      }
    },
  });
  const formik = useFormik<GLoginByPasswordMutationVariables>({
    initialValues: { email: '', password: '' },
    validateOnChange: false,
    onSubmit: variables => loginByPassword({ variables }),
    validationSchema: yup.object({
      email: yup.string().email('Неверный формат почты').required('Почта обязательна'),
      password: yup.string().required('Пароль обязателен'),
    }),
  });

  return (
    <AppDialog open={isOpen} title='Вход в систему' onClose={loginDialogCloseFn}>
      <DialogContent className='flex flex-col !py-10' dividers onKeyDown={onEnterDown(formik.submitForm)}>
        <FormikProvider value={formik}>
          <FormikTextField label='Почта' name='email' required />
          <FormikTextField
            className='!mt-4'
            label='Пароль'
            name='password'
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end' onClick={() => setShowPassword(!showPassword)}>
                  <IconButton>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
          />
        </FormikProvider>
        <Collapse in={!!authResultMessage}>
          <Alert className='mt-6' severity='error' variant='filled'>{authResultMessage}</Alert>
        </Collapse>
      </DialogContent>
      <DialogActions className='gap-2'>
        <Button
          component={Link}
          size='small'
          to={AppRoutesEnum.RegisterRoute}
          variant='text'
          onClick={loginDialogCloseFn}
        >
          Регистрация
        </Button>
        <Button
          disabled={!!authResultMessage || formik.isSubmitting || !formik.isValid || !formik.dirty}
          size='small'
          autoFocus
          onClick={formik.submitForm}
        >
          Войти
        </Button>
      </DialogActions>
    </AppDialog>
  );
};
