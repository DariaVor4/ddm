import { Route } from 'react-router-dom';
import { StudentsCrudRoutes } from '../fragments/students-crud.routes.tsx';
import { EmployeeProfilePage } from '../../views/pages/profiles/EmployeeProfilePage.tsx';
import { VisaRequestsPage } from '../../views/pages/VisaRequestsPage.tsx';

export const EmployeeRoutes: JSX.Element = (
  <>
    <Route element={<EmployeeProfilePage />} path='account' />
    {StudentsCrudRoutes}
    <Route element={<VisaRequestsPage />} path='visa-requests' />
  </>
);
