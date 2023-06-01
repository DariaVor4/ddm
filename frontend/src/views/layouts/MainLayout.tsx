import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Header } from '../../components/Header/Header';

export const MainLayout: FC = () => (
  <>
    <Header />
    <Container className='my-6'>
      <Outlet />
    </Container>
  </>
);
