import { useReactiveVar } from '@apollo/client';
import { Button } from '@mui/material';
import { FC } from 'react';
import { UserRoleIcon } from '../UserRoleIcon.tsx';
import { isUserMenuOpenVar, userMenuToggleFn } from '../UserSideMenu/user-side-menu-store.ts';
import { HeaderNotificationsBadge } from './HeaderNotificationsBadge.tsx';
import { useCurrentUser } from '../../core/hooks/useCurrentUser.ts';

export const HeaderUserButtons: FC = () => {
  const [current] = useCurrentUser();
  const isUserMenuOpen = useReactiveVar(isUserMenuOpenVar);

  return (
    <>
      <HeaderNotificationsBadge />
      <Button
        color='inherit'
        disabled={isUserMenuOpen}
        size='medium'
        startIcon={<UserRoleIcon userRole={current?.role} />}
        variant='text'
        onClick={userMenuToggleFn}
      >
        {current?.user.initials || 'Пользователь'}
      </Button>
    </>
  );
};
