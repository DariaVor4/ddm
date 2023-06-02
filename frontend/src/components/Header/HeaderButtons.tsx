import { FC } from 'react';
import { Button, IconButton } from '@mui/material';
import { useReactiveVar } from '@apollo/client';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Link } from 'react-router-dom';
import { UserRoleIcon } from '../UserRoleIcon.tsx';
import { GUserRoleEnum, useUserCurrentQuery } from '../../api/generated.ts';
import { getRole } from '../../core/roles-checker.ts';
import { useMainStore } from '../../store/theme-store.ts';
import { loginDialogOpenFn } from '../Dialogs/LoginDialog.tsx';
import { AppRoutesEnum } from '../../views/app-routes.enum.ts';
import { isUserMenuOpenVar, userMenuToggleFn } from './UserMenu/user-menu-store.ts';

export const HeaderButtons: FC = () => {
  const { data: { current } = {} } = useUserCurrentQuery();
  const { isDarkTheme, toggleTheme } = useMainStore();
  const role = getRole(current?.roles);
  const isMenuOpen = useReactiveVar(isUserMenuOpenVar);

  return (
    <>
      <IconButton color='inherit' onClick={toggleTheme}>
        {/* {isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />} */}
        {isDarkTheme ? <LightModeIcon /> : <NightsStayIcon />}
      </IconButton>
      {
        role !== GUserRoleEnum.Any ? (
          <Button
            color='inherit'
            disabled={isMenuOpen}
            size='medium'
            startIcon={<UserRoleIcon userRole={role} />}
            variant='text'
            onClick={userMenuToggleFn}
          >
            {current?.user.initials || 'Пользователь'}
          </Button>
        ) : (
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
        )
      }
    </>
  );
};
