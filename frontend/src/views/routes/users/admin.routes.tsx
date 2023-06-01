import { Route } from 'react-router-dom';
import { StudentsCrudRoutes } from '../fragments/students-crud.routes.tsx';

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
    <Route element={<h1>Employees List</h1>} path='employees'>
      <Route element={<h1>User employee page</h1>} path=':id' />
    </Route>
    <Route element={<h1>Admins List</h1>} path='admins'>
      <Route element={<h1>User admin page</h1>} path=':id' />
    </Route>
  </>
);
