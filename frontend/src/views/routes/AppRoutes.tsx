import { Route, Routes, useNavigate } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';
import { GUserRoleEnum, useUserCurrentQuery } from '../../api/generated.ts';
import { AppRoutesEnum } from '../app-routes.enum.ts';
import { HomePage } from '../pages/HomePage.tsx';
import { MainLayout } from '../layouts/MainLayout.tsx';
import { UserRoutes } from './index.tsx';
import { NotFoundPage } from '../pages/NotFoundPage.tsx';
import { globalNavigateVar } from '../../store/global-navigate.ts';
import { isConnectionLostVar } from '../../api/apollo-client.tsx';
import { NoConnectionPage } from '../pages/NoConnectionPage.tsx';
import { ConfirmActionDialog } from '../../core/hooks/useConfirmAction.tsx';
import { StudentProfilePage } from '../pages/StudentProfilePage.tsx';
import { PageLoading } from '../../components/PageLoading.tsx';

export const AppRoutes: FC = () => {
  const { data: { current: user } = {}, loading: isUserLoading } = useUserCurrentQuery();
  const isConnectionLost = useReactiveVar(isConnectionLostVar);
  const navigate = useNavigate();

  useEffect(() => void globalNavigateVar(navigate || ((route:string) => {
    window.location.href = route;
  })), [navigate]);

  if (isConnectionLost) {
    return <NoConnectionPage />;
  }
  if (isUserLoading) {
    return <PageLoading />;
  }

  return (
    <>
      <Routes>
        <Route element={<MainLayout />} path={AppRoutesEnum.HomeRoute}>
          <Route element={<HomePage />} index />
          {/* {!user && <Route path={AppRoutesEnum.RegisterRoute} element={<RegistrationPage />} />} */}
          {!user && <Route element={<StudentProfilePage />} path={AppRoutesEnum.RegisterRoute} />}
          {/* {UserRoutes[getRole(user?.roles)]} */}
          {UserRoutes[user?.user.role || GUserRoleEnum.Any]}
          <Route element={<NotFoundPage />} path={AppRoutesEnum.AnyRoute} />
        </Route>
      </Routes>
      <ConfirmActionDialog />
    </>
  );
};
