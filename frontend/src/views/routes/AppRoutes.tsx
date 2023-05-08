import { Route, Routes, useNavigate } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useReactiveVar } from '@apollo/client';
import { useUserCurrentQuery } from '../../api/generated.ts';
import AppRoutesEnum from '../routes.enum.ts';
import HomePage from '../pages/HomePage.tsx';
import MainLayout from '../layouts/MainLayout.tsx';
import UserRoutes from './index.tsx';
import { getRole } from '../../core/roles-checker.ts';
import RegistrationPage from '../pages/RegistrationPage.tsx';
import NotFoundPage from '../pages/NotFoundPage.tsx';
import globalNavigateVar from '../../store/global-navigate.ts';
import { isConnectionLostVar } from '../../api/apollo-client.tsx';
import NoConnectionPage from '../pages/NoConnectionPage.tsx';
import { ConfirmActionDialog } from '../../core/hooks/useConfirmAction.tsx';

const AppRoutes: FC = () => {
  const { data: { current: user } = {}, loading } = useUserCurrentQuery();
  const isConnectionLost = useReactiveVar(isConnectionLostVar);
  const navigate = useNavigate();

  useEffect(() => void globalNavigateVar(navigate || ((route:string) => {
    window.location.href = route;
  })), [navigate]);

  if (isConnectionLost) {
    return <NoConnectionPage />;
  }
  if (loading) {
    return <CircularProgress className='my-auto self-center' size={100} />;
  }

  return (
    <>
      <Routes>
        <Route path={AppRoutesEnum.Home} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {!user && <Route path={AppRoutesEnum.Register} element={<RegistrationPage />} />}
          {UserRoutes[getRole(user?.roles)]}
          <Route path={AppRoutesEnum.Any} element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ConfirmActionDialog />
    </>
  );
};

export default AppRoutes;
