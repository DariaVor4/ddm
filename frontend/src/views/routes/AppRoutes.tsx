import { Route, Routes, useNavigate } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useReactiveVar } from '@apollo/client';
import { GUserRoleEnum, useUserCurrentQuery } from '../../api/generated.ts';
import { AppRoutesEnum } from '../app-routes.enum.ts';
import { HomePage } from '../pages/HomePage.tsx';
import { MainLayout } from '../layouts/MainLayout.tsx';
import { UserRoutes } from './index.tsx';
import { RegistrationPage } from '../pages/RegistrationPage.tsx';
import { NotFoundPage } from '../pages/NotFoundPage.tsx';
import { globalNavigateVar } from '../../store/global-navigate.ts';
import { isConnectionLostVar } from '../../api/apollo-client.tsx';
import { NoConnectionPage } from '../pages/NoConnectionPage.tsx';
import { ConfirmActionDialog } from '../../core/hooks/useConfirmAction.tsx';

export const AppRoutes: FC = () => {
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
        <Route path={AppRoutesEnum.HomeRoute} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {!user && <Route path={AppRoutesEnum.RegisterRoute} element={<RegistrationPage />} />}
          {/* {UserRoutes[getRole(user?.roles)]} */}
          {UserRoutes[user?.user.role || GUserRoleEnum.Any]}
          <Route path={AppRoutesEnum.AnyRoute} element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ConfirmActionDialog />
    </>
  );
};
