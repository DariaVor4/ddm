import { Route } from 'react-router-dom';
import StudentPassportPage from '../../pages/student-pages/StudentPassportPage.tsx';

const StudentRoutes: JSX.Element = (
  <>
    <Route path='visa-request' element={<h1>Visa Request</h1>}>
      <Route path='edit' element={<h1>Visa Request Edit</h1>} />
    </Route>
    <Route path='notifications' element={<h1>Notifications</h1>} />
    <Route path='account' element={<h1>Account Settings</h1>} />
    <Route path='documents'>
      <Route path='passport' element={<StudentPassportPage />} />
      <Route path='visa' element={<h1>Visa Settings</h1>} />
      <Route path='migration-card' element={<h1>Migration Card Settings</h1>} />
      <Route path='arrival-notice' element={<h1>Arrival Notice Settings</h1>} />
      <Route path='close-relatives' element={<h1>Close Relatives Settings</h1>} />
    </Route>
  </>
);

export default StudentRoutes;
