import { FC } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { loginDialogOpenFn } from '../Dialogs/LoginDialog.tsx';
import { AppRoutesEnum } from '../../routes/app-routes.enum.ts';

export const HeaderGuestButtons: FC = () => (
  <>
    <Button
      color='inherit'
      size='medium'
      variant='text'
      onClick={loginDialogOpenFn}
    >
      Вход
    </Button>
    <Button
      color='inherit'
      component={Link}
      size='medium'
      to={AppRoutesEnum.RegisterRoute}
      variant='text'
    >
      Регистрация
    </Button>
  </>
);
