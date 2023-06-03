import { FC } from 'react';
import {
  ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PortraitIcon from '@mui/icons-material/Portrait';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppRoutesEnum } from '../../../routes/app-routes.enum.ts';
import { navigateFromMenu } from '../user-side-menu-store.ts';

export const UserMenuEmployeeButtons:FC = () => (
  <>
    <ListItem disablePadding>
      <ListItemButton onClick={() => navigateFromMenu(AppRoutesEnum.VisaRequestsRoute)}>
        <ListItemIcon><PortraitIcon /></ListItemIcon>
        <ListItemText primary='Визовые анкеты' />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton onClick={() => navigateFromMenu(AppRoutesEnum.NotificationsRoute)}>
        <ListItemIcon><NotificationsIcon /></ListItemIcon>
        <ListItemText primary='Уведомления' />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton onClick={() => navigateFromMenu(AppRoutesEnum.StudentsRoute)}>
        <ListItemIcon><SchoolIcon /></ListItemIcon>
        <ListItemText primary='Студенты' />
      </ListItemButton>
    </ListItem>
  </>
);
