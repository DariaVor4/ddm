import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Box, Toolbar, Typography,
} from '@mui/material';
import HubIcon from '@mui/icons-material/Hub';
import { AppRoutesEnum } from '../../views/app-routes.enum.ts';
import { LoginDialog } from '../Dialogs/LoginDialog';
import { UserMenu } from './UserMenu/UserMenu';
import { HeaderButtons } from './HeaderButtons.tsx';

export const Header: FC = () => (
  <>
    <AppBar position='static'>
      <Toolbar>
        <Box className='grow flex justify-start'>
          <Link className='flex items-center gap-1' to={AppRoutesEnum.HomeRoute}>
            <HubIcon className='mr-2' />
            <Typography fontSize='medium'>VisaCenter</Typography>
          </Link>
        </Box>
        <HeaderButtons />
      </Toolbar>
    </AppBar>
    <LoginDialog />
    <UserMenu />
  </>
);
