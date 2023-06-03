import { Route, Routes, useNavigate } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';
import { GUserRoleEnum, useUserCurrentQuery } from './api/generated.ts';
import { AppRoutesEnum } from './routes/app-routes.enum.ts';
import { HomePage } from './views/pages/common-pages/HomePage.tsx';
import { MainLayout } from './views/layouts/MainLayout.tsx';
import { UserRoutes } from './routes';
import { NotFoundPage } from './views/pages/common-pages/NotFoundPage.tsx';
import { globalNavigateVar } from './store/global-navigate.ts';
import { isConnectionLostVar } from './api/apollo-client.tsx';
import { NoConnectionPage } from './views/pages/common-pages/NoConnectionPage.tsx';
import { PageLoading } from './components/PageLoading.tsx';
import { StudentProfilePage } from './views/pages/profiles/StudentProfilePage.tsx';
import { LoginDialog } from './components/Dialogs/LoginDialog.tsx';
import { UserSideMenu } from './components/UserSideMenu/UserSideMenu.tsx';

export const App: FC = () => {
  const { data: { current } = {}, loading: isUserLoading } = useUserCurrentQuery();
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
          {!current && <Route element={<StudentProfilePage />} path={AppRoutesEnum.RegisterRoute} />}
          {UserRoutes[current?.user.role || GUserRoleEnum.Any]}
          <Route element={<NotFoundPage />} path={AppRoutesEnum.AnyRoute} />
        </Route>
      </Routes>
      {!current && <LoginDialog />}
      {current && <UserSideMenu />}
    </>
  );
};
