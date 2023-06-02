import { Route } from 'react-router-dom';
import { StudentsCrudRoutes } from '../fragments/students-crud.routes.tsx';
import { EmployeesPage } from '../../pages/admin-pages/EmployeesPage.tsx';
import { EmployeePage } from '../../pages/admin-pages/EmployeePage.tsx';

// TODO: у админа должна быть возможность рассылать уведомления одному/нескольким

export const AdminRoutes: JSX.Element = (
  <>
    <Route element={<h1>Account Settings</h1>} path='account' />
    <Route element={<h1>Visa Requests</h1>} path='visa-requests'>
      <Route element={<h1>Visa Request page</h1>} path=':id' />
    </Route>
    <Route element={<h1>Notifications</h1>} path='notifications'>
      <Route element={<h1>Notification page</h1>} path=':id' />
    </Route>
    {StudentsCrudRoutes}

    <Route element={<EmployeesPage />} path='employees' />
    <Route element={<EmployeePage />} path='/employees/create' />
    <Route element={<EmployeePage />} path='/employees/:employeeId' />

    <Route element={<h1>Admins List</h1>} path='admins'>
      <Route element={<h1>User admin page</h1>} path=':id' />
    </Route>
  </>
);
