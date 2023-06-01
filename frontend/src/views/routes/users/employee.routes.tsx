import { Route } from 'react-router-dom';
import { StudentsCrudRoutes } from '../fragments/students-crud.routes.tsx';

export const EmployeeRoutes: JSX.Element = (
  <>
    <Route path='settings' element={<h1>Settings</h1>}>
      <Route path='authentication' element={<h1>Authentication Settings</h1>} />
    </Route>
    {StudentsCrudRoutes}
    <Route path='visa-requests' element={<h1>Visa Requests</h1>}>
      <Route path=':id' element={<h1>Visa Request page</h1>} />
    </Route>
  </>
);
