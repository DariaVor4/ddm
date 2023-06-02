import { Route } from 'react-router-dom';
import { StudentPassportPage } from '../../pages/student-documents/StudentPassportPage.tsx';
import { StudentArrivalNoticePage } from '../../pages/student-documents/StudentArrivalNoticePage.tsx';
import { StudentCloseRelativesPage } from '../../pages/student-documents/StudentCloseRelativesPage.tsx';
import { StudentMigrationCardPage } from '../../pages/student-documents/StudentMigrationCardPage.tsx';
import { StudentVisaPage } from '../../pages/student-documents/StudentVisaPage.tsx';
import { StudentProfilePage } from '../../pages/StudentProfilePage.tsx';

export const StudentRoutes: JSX.Element = (
  <>
    <Route element={<StudentProfilePage />} path='account' />
    <Route element={<h1>Notifications</h1>} path='notifications' />
    <Route element={<h1>Visa Request</h1>} path='visa-request'>
      <Route element={<h1>Visa Request Edit</h1>} path='edit' />
    </Route>
    <Route path='documents'>
      <Route element={<StudentPassportPage />} path='passport' />
      <Route element={<StudentVisaPage />} path='visa' />
      <Route element={<StudentMigrationCardPage />} path='migration-card' />
      <Route element={<StudentArrivalNoticePage />} path='arrival-notice' />
      <Route element={<StudentCloseRelativesPage />} path='close-relatives' />
    </Route>
  </>
);
