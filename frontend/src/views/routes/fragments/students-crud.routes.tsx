import { Route } from 'react-router-dom';
import { StudentsPage } from '../../pages/employee-pages/StudentsPage.tsx';
import { StudentPassportPage } from '../../pages/student-documents/StudentPassportPage.tsx';
import { StudentMigrationCardPage } from '../../pages/student-documents/StudentMigrationCardPage.tsx';
import { StudentVisaPage } from '../../pages/student-documents/StudentVisaPage.tsx';
import { StudentArrivalNoticePage } from '../../pages/student-documents/StudentArrivalNoticePage.tsx';
import { StudentCloseRelativesPage } from '../../pages/student-documents/StudentCloseRelativesPage.tsx';
import { StudentCreatePage } from '../../pages/employee-pages/StudentCreatePage.tsx';

export const StudentsCrudRoutes = (
  <>
    <Route element={<StudentsPage />} path='students' />
    <Route element={<StudentCreatePage />} path='students/create' />
    <Route element={<h1>User student page</h1>} path='students/:studentId' />
    <Route element={<StudentPassportPage />} path='students/:studentId/passport' />
    <Route element={<StudentVisaPage />} path='students/:studentId/visa' />
    <Route element={<StudentMigrationCardPage />} path='students/:studentId/migration-card' />
    <Route element={<StudentArrivalNoticePage />} path='students/:studentId/arrival-notice' />
    <Route element={<StudentCloseRelativesPage />} path='students/:studentId/close-relatives' />
  </>
);
