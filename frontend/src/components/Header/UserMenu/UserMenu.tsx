import { FC } from 'react';
import {
  Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import { useReactiveVar } from '@apollo/client';
import { AppRoutesEnum } from '../../../views/app-routes.enum.ts';
import { UserRoleIcon } from '../../UserRoleIcon';
import { useUserCurrentQuery } from '../../../api/generated';
import { authHelper } from '../../../api/apollo-client.tsx';
import { TMuiColor } from '../../../styles/mui/theme';
import { getRole } from '../../../core/roles-checker';
import { UserMenuButtons } from './UserMenuButtons/UserMenuButtons.tsx';
import { isUserMenuOpenVar, navigateFromMenu, userMenuToggleFn } from './user-menu-store.ts';

export const UserMenu: FC = () => {
  const { data: { current } = {} } = useUserCurrentQuery();
  const role = getRole(current?.roles);
  const isMenuOpen = useReactiveVar(isUserMenuOpenVar);

  return (
    <Drawer
      anchor='right'
      className='!flex !items-center'
      open={isMenuOpen && !!current}
      onClose={userMenuToggleFn}
    >
      <List className='!my-auto'>
        {/* Навигация зависимости от роли пользователя */}
        {UserMenuButtons[role]}
        {/* Прочее: */}
        <Divider className='!mt-4 !mb-2'>
          <UserRoleIcon className='mr-2' userRole={role} />
          {current?.user.initials || 'Пользователь'}
        </Divider>
        {/* Настройки аккаунта */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigateFromMenu(AppRoutesEnum.AccountSettingsRoute)}>
            <ListItemIcon><LockIcon /></ListItemIcon>
            <ListItemText primary='Аккаунт' />
          </ListItemButton>
        </ListItem>
        {/* Выход */}
        <ListItem
          disablePadding
          onClick={async () => {
            userMenuToggleFn();
            await authHelper.logout();
          }}
        >
          <ListItemButton sx={{ ':hover': { bgcolor: 'error.main' satisfies TMuiColor } }}>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary='Выход' />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
