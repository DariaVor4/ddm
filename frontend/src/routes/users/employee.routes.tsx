import { Route } from 'react-router-dom';
import { StudentsCrudRoutes } from '../fragments/students-crud.routes.tsx';
import { EmployeeProfilePage } from '../../views/pages/profiles/EmployeeProfilePage.tsx';
import { VisaRequestsPage } from '../../views/pages/VisaRequestsPage.tsx';
import { AppRoutesEnum } from '../app-routes.enum.ts';
import { NotificationsPage } from '../../views/pages/notifications/NotificationsPage/NotificationsPage.tsx';

export const EmployeeRoutes: JSX.Element = (
  <>
    <Route element={<EmployeeProfilePage />} path={AppRoutesEnum.AccountSettingsRoute} />
    <Route element={<NotificationsPage />} path={AppRoutesEnum.NotificationsRoute} />
    <Route element={<NotificationsPage />} path={AppRoutesEnum.NotificationPattern} />

    <Route element={<VisaRequestsPage />} path={AppRoutesEnum.VisaRequestsRoute} />
    {StudentsCrudRoutes}
  </>
);
