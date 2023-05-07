import { Route } from 'react-router-dom';
import StudentsCrudRoutes from '../fragments/students-crud.routes.tsx';

// TODO: у админа должна быть возможность рассылать уведомления одному/нескольким

const AdminRoutes: JSX.Element = (
  <>
    <Route path='settings' element={<h1>Settings</h1>}>
      <Route path='authentication' element={<h1>Authentication Settings</h1>} />
    </Route>
    {StudentsCrudRoutes}
    <Route path='visa-requests' element={<h1>Visa Requests</h1>}>
      <Route path=':id' element={<h1>Visa Request page</h1>} />
    </Route>
    <Route path='employees' element={<h1>Employees List</h1>}>
      <Route path=':id' element={<h1>Employee page</h1>} />
    </Route>
  </>
);

export default AdminRoutes;
