import { Route } from 'react-router-dom';
import { StudentsCrudRoutes } from '../fragments/students-crud.routes.tsx';
import { EmployeesPage } from '../../views/pages/user-lists/EmployeesPage.tsx';
import { EmployeeProfilePage } from '../../views/pages/profiles/EmployeeProfilePage.tsx';
import { VisaRequestsPage } from '../../views/pages/VisaRequestsPage.tsx';
import { AppRoutesEnum } from '../app-routes.enum.ts';
import { NotificationsSendPage } from '../../views/pages/notifications/NotificationsSendPage/NotificationsSendPage.tsx';
import { NotificationsPage } from '../../views/pages/notifications/NotificationsPage/NotificationsPage.tsx';

export const AdminRoutes: JSX.Element = (
  <>
    <Route element={<EmployeeProfilePage />} path={AppRoutesEnum.AccountSettingsRoute} />
    <Route element={<NotificationsPage />} path={AppRoutesEnum.NotificationsRoute} />
    <Route element={<NotificationsPage />} path={AppRoutesEnum.NotificationPattern} />

    <Route element={<VisaRequestsPage />} path={AppRoutesEnum.VisaRequestsRoute} />
    <Route element={<NotificationsSendPage />} path={AppRoutesEnum.NotificationsSendRoute} />
    {StudentsCrudRoutes}

    <Route element={<EmployeesPage />} path={AppRoutesEnum.EmployeesRoute} />
    <Route element={<EmployeeProfilePage />} path={AppRoutesEnum.EmployeeCreateRoute} />
    <Route element={<EmployeeProfilePage />} path={AppRoutesEnum.EmployeePattern} />
  </>
);
