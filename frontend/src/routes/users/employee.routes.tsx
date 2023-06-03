import { Route } from 'react-router-dom';
import { StudentsCrudRoutes } from '../fragments/students-crud.routes.tsx';
import { EmployeeProfilePage } from '../../views/pages/profiles/EmployeeProfilePage.tsx';

export const EmployeeRoutes: JSX.Element = (
  <>
    <Route element={<EmployeeProfilePage />} path='account' />
    {StudentsCrudRoutes}
    <Route element={<h1>Visa Requests</h1>} path='visa-requests'>
      <Route element={<h1>Visa Request page</h1>} path=':id' />
    </Route>
  </>
);
