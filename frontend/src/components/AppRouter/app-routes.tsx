import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import NotFoundPage from '../../pages/NotFoundPage';

interface IAppRoute {
  path: AppRoutesEnum,
  element: JSX.Element
}

export const enum AppRoutesEnum {
  Home = '/',
  Login = '/login',
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
}];
