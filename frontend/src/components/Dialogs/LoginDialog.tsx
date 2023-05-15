import { FC, useState } from 'react';
import {
  Alert, Button, Collapse, DialogActions, DialogContent, IconButton, InputAdornment, TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import { makeVar, useReactiveVar } from '@apollo/client';
import AppRoutesEnum from '../../views/routes.enum';
import { GLoginByPasswordMutationVariables, useLoginByPasswordMutation } from '../../api/generated';
import { authHelper } from '../../api/apollo-client.tsx';
import onEnterDown from '../../core/onEnterDown.ts';
import FormikTextField from '../forms/FormikTextField.tsx';
import AppDialog from './AppDialog.tsx';

const isLoginDialogOpenVar = makeVar(false);
export const loginDialogOpenFn = () => isLoginDialogOpenVar(true);
const loginDialogCloseFn = () => isLoginDialogOpenVar(false);
const authResultMessageVar = makeVar<string | null>(null);

const LoginDialog: FC = () => {
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
    onSubmit: variables => loginByPassword({ variables }),
    validationSchema: yup.object({
      email: yup.string().email('Неверный формат почты').required('Почта обязательна'),
      password: yup.string().required('Пароль обязателен'),
    }),
  });

  return (
    <AppDialog title='Вход в систему' open={isOpen} onClose={loginDialogCloseFn}>
      <DialogContent className='flex flex-col !py-10' dividers onKeyDown={onEnterDown(formik.submitForm)}>
        <FormikProvider value={formik}>
          <FormikTextField name='email' label='Почта' required />
          <FormikTextField
            className='!mt-4'
            name='password'
            label='Пароль'
            required
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
          />
        </FormikProvider>
        <Collapse in={!!authResultMessage}>
          <Alert className='mt-6' variant='filled' severity='error'>{authResultMessage}</Alert>
        </Collapse>
      </DialogContent>
      <DialogActions className='gap-2'>
        <Button
          size='small'
          onClick={loginDialogCloseFn}
          component={Link}
          variant='text'
          to={AppRoutesEnum.Register}
        >
          Регистрация
        </Button>
        <Button
          autoFocus
          size='small'
          onClick={formik.submitForm}
          disabled={!!authResultMessage || formik.isSubmitting || !formik.isValid || !formik.dirty}
        >
          Войти
        </Button>
      </DialogActions>
    </AppDialog>
  );
};

export default LoginDialog;
