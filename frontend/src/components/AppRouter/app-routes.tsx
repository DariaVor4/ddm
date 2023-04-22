import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import NotFoundPage from '../../pages/NotFoundPage';
import RegistrationPage from '../../pages/RegistrationPage';

interface IAppRoute {
  path: AppRoutesEnum,
  element: JSX.Element
}

export const enum AppRoutesEnum {
  Home = '/',
  Login = '/login',
  Registration = '/registration',
  NotFound = '/*',
}

export const AppRoutes: IAppRoute[] = [{
  path: AppRoutesEnum.Home,
  element: <HomePage />,
}, {
  path: AppRoutesEnum.Login,
  element: <LoginPage />,
}, {
  path: AppRoutesEnum.NotFound,
  element: <NotFoundPage />,
}, {
  path: AppRoutesEnum.Registration,
  element: <RegistrationPage />,
},
];
