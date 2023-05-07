import { FC, KeyboardEventHandler, useState } from 'react';
import {
  Alert, Button, Collapse, Dialog, DialogActions, DialogContent, DialogTitle, Grow, IconButton, InputAdornment, TextField, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { makeVar, useReactiveVar } from '@apollo/client';
import AppRoutesEnum from '../../views/routes.enum';
import { GLoginByPasswordMutationVariables, useLoginByPasswordMutation } from '../../api/generated';
import { authHelper } from '../../api/apollo-client.tsx';

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
      await authHelper.login(data.loginByPassword);
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
  const submitByEnter: KeyboardEventHandler<HTMLDivElement> = async keyEvent => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      await formik.submitForm();
    }
  };

  return (
    <Dialog TransitionComponent={Grow} transitionDuration={500} fullWidth maxWidth='xs' open={isOpen} onClose={loginDialogCloseFn}>
      <DialogTitle className='flex items-center'>
        <Typography className='grow inline' variant='h6' component='span'>Вход в систему</Typography>
        <IconButton onClick={loginDialogCloseFn}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className='flex flex-col !py-10' dividers onKeyDown={submitByEnter}>
        <TextField
          size='small'
          variant='outlined'
          label='Почта'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          disabled={formik.isSubmitting}
          type='email'
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          className='!mt-6'
          size='small'
          variant='outlined'
          label='Пароль'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
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
        <Collapse in={!!authResultMessage}>
          <Alert className='mt-6' variant='filled' severity='error'>{authResultMessage}</Alert>
        </Collapse>
      </DialogContent>
      <DialogActions className='gap-2'>
        <Button
          size='small'
          onClick={loginDialogCloseFn}
          component={Link}
          to={AppRoutesEnum.Register}
        >
          Регистрация
        </Button>
        <Button
          autoFocus
          size='small'
          variant='contained'
          onClick={formik.submitForm}
          disabled={!!authResultMessage || formik.isSubmitting || !formik.isValid || !formik.dirty}
        >
          Войти
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
