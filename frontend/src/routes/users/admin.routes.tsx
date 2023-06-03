import { Route } from 'react-router-dom';
import { StudentsCrudRoutes } from '../fragments/students-crud.routes.tsx';
import { EmployeesPage } from '../../views/pages/user-lists/EmployeesPage.tsx';
import { EmployeeProfilePage } from '../../views/pages/profiles/EmployeeProfilePage.tsx';

// TODO: у админа должна быть возможность рассылать уведомления одному/нескольким

export const AdminRoutes: JSX.Element = (
  <>
    <Route element={<EmployeeProfilePage />} path='account' />
    <Route element={<h1>Visa Requests</h1>} path='visa-requests'>
      <Route element={<h1>Visa Request page</h1>} path=':id' />
    </Route>
    <Route element={<h1>Notifications</h1>} path='notifications'>
      <Route element={<h1>Notification page</h1>} path=':id' />
    </Route>
    {StudentsCrudRoutes}

    <Route element={<EmployeesPage />} path='employees' />
    <Route element={<EmployeeProfilePage />} path='/employees/create' />
    <Route element={<EmployeeProfilePage />} path='/employees/:employeeId' />

    <Route element={<h1>Admins List</h1>} path='admins'>
      <Route element={<h1>User admin page</h1>} path=':id' />
    </Route>
  </>
);
