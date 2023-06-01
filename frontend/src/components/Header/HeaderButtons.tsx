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
            disabled={isMenuOpen}
            color='inherit'
            variant='text'
            size='medium'
            startIcon={<UserRoleIcon userRole={role} />}
            onClick={userMenuToggleFn}
          >
            {current?.user.initials || 'Пользователь'}
          </Button>
        ) : (
          <>
            <Button
              variant='text'
              size='medium'
              onClick={loginDialogOpenFn}
              color='inherit'
            >
              Вход
            </Button>
            <Button
              variant='text'
              size='medium'
              component={Link}
              to={AppRoutesEnum.RegisterRoute}
              color='inherit'
            >
              Регистрация
            </Button>
          </>
        )
      }
    </>
  );
};
