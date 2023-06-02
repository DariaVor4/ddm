import { Route } from 'react-router-dom';
import { StudentsCrudRoutes } from '../fragments/students-crud.routes.tsx';

export const EmployeeRoutes: JSX.Element = (
  <>
    <Route element={<h1>Settings</h1>} path='settings'>
      <Route element={<h1>Authentication Settings</h1>} path='authentication' />
    </Route>
    {StudentsCrudRoutes}
    <Route element={<h1>Visa Requests</h1>} path='visa-requests'>
      <Route element={<h1>Visa Request page</h1>} path=':id' />
    </Route>
  </>
);
