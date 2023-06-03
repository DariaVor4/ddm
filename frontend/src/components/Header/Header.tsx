import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Box, Toolbar, Typography,
} from '@mui/material';
import HubIcon from '@mui/icons-material/Hub';
import { AppRoutesEnum } from '../../routes/app-routes.enum.ts';
import { HeaderButtons } from './HeaderButtons.tsx';

export const Header: FC = () => (
  <AppBar position='sticky'>
    <Toolbar>
      <Box className='grow flex justify-start'>
        <Link className='flex grow items-center gap-1' to={AppRoutesEnum.HomeRoute}>
          <HubIcon className='mr-2' />
          <Typography fontSize='medium'>VisaCenter</Typography>
        </Link>
      </Box>
      <HeaderButtons />
    </Toolbar>
  </AppBar>
);
