import { CustomProvider } from 'rsuite';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import Header from './components/Header';
import useMainStore from './store/main.store';
import { AppRoutesEnum } from './views/routes/app-routes';
import HomePage from './views/pages/HomePage';
import NotFoundPage from './views/pages/NotFoundPage';
import LoginPage from './views/pages/LoginPage';
import RegistrationPage from './views/pages/RegistrationPage';
import { GUserRoleEnum, useUserCurrentQuery } from './api/generated';
import { getRole } from './core/roles-checker';
import MainLayout from './views/layouts/MainLayout';

const UserRoutes: Record<GUserRoleEnum, JSX.Element> = {
  [GUserRoleEnum.Admin]: <></>,
  [GUserRoleEnum.Employee]: <></>,
  [GUserRoleEnum.Student]: <></>,
  [GUserRoleEnum.Any]: (
    <>
      <Route path={AppRoutesEnum.Login} element={<LoginPage />} />
      <Route path={AppRoutesEnum.Registration} element={<RegistrationPage />} />
    </>
  ),
} as const;

function App() {
  const state = useMainStore();
  const { data, loading } = useUserCurrentQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <CustomProvider theme={state.isDarkMode ? 'dark' : 'light'}>
      <ToastContainer
        autoClose={2500}
        position='bottom-left'
        theme={state.isDarkMode ? 'dark' : 'colored'}
        pauseOnHover
      />
      <Header />
      <Routes>
        <Route path={AppRoutesEnum.Home} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {UserRoutes[getRole(data?.userCurrent.roles)]}
        </Route>
        <Route path={AppRoutesEnum.NotFound} element={<NotFoundPage />} />
      </Routes>
    </CustomProvider>
  );
}

export default App;
