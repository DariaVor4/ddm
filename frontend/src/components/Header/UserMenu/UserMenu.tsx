import { FC } from 'react';
import {
  Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import PortraitIcon from '@mui/icons-material/Portrait';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import BadgeIcon from '@mui/icons-material/Badge';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import { makeVar, useReactiveVar } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import AppRoutesEnum from '../../../views/routes.enum';
import UserRoleIcon from '../../UserRoleIcon';
import getUserInitials from '../../../core/get-user-initials';
import { GUserCurrentResponse, useUserCurrentQuery } from '../../../api/generated';
import { authHelper } from '../../../api/apollo-client.tsx';
import { TMuiColor } from '../../../styles/mui/theme';
import { getRole } from '../../../core/roles-checker';

export const isUserMenuOpenVar = makeVar(false);
export const userMenuToggleFn = () => isUserMenuOpenVar(!isUserMenuOpenVar());

const UserMenu: FC = () => {
  const { data: { current } = {} } = useUserCurrentQuery();
  const role = getRole(current?.roles);
  const isMenuOpen = useReactiveVar(isUserMenuOpenVar);
  const navigate = useNavigate();

  const handleNavigate = (route: AppRoutesEnum) => {
    userMenuToggleFn();
    navigate(route);
  };

  return (
    <Drawer anchor='right' open={isMenuOpen && !!current} onClose={userMenuToggleFn} className='!flex !items-center'>
      <List className='!my-auto'>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><PortraitIcon /></ListItemIcon>
            <ListItemText primary='Визовая анкета' />
          </ListItemButton>
        </ListItem>
        <Divider className='!mt-4 !mb-2'>Документы</Divider>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate(AppRoutesEnum.DocumentsPassport)}>
            <ListItemIcon><PortraitIcon /></ListItemIcon>
            <ListItemText primary='Паспорт' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate(AppRoutesEnum.DocumentsMigrationCard)}>
            <ListItemIcon><RecentActorsIcon /></ListItemIcon>
            <ListItemText primary='Миграционная карта' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate(AppRoutesEnum.DocumentsArrivalNotice)}>
            <ListItemIcon><FlightLandIcon /></ListItemIcon>
            <ListItemText primary='Уведомление о прибытии' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate(AppRoutesEnum.DocumentsVisa)}>
            <ListItemIcon><BadgeIcon /></ListItemIcon>
            <ListItemText primary='Виза' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate(AppRoutesEnum.DocumentsCloseRelatives)}>
            <ListItemIcon><FamilyRestroomIcon /></ListItemIcon>
            <ListItemText primary='Ближайшие родственники' />
          </ListItemButton>
        </ListItem>
        <Divider className='!mt-4 !mb-2'>
          <UserRoleIcon userRole={role} className='mr-2' />
          {getUserInitials(current as GUserCurrentResponse)}
        </Divider>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate(AppRoutesEnum.AccountSettings)}>
            <ListItemIcon><LockIcon /></ListItemIcon>
            <ListItemText primary='Аккаунт' />
          </ListItemButton>
        </ListItem>
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

export default UserMenu;
