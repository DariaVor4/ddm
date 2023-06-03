import { Route } from 'react-router-dom';
import { StudentsPage } from '../../pages/employee-pages/StudentsPage.tsx';
import { StudentPassportPage } from '../../pages/student-documents/StudentPassportPage.tsx';
import { StudentMigrationCardPage } from '../../pages/student-documents/StudentMigrationCardPage.tsx';
import { StudentVisaPage } from '../../pages/student-documents/StudentVisaPage.tsx';
import { StudentArrivalNoticePage } from '../../pages/student-documents/StudentArrivalNoticePage.tsx';
import { StudentCloseRelativesPage } from '../../pages/student-documents/StudentCloseRelativesPage.tsx';
import { StudentProfilePage } from '../../pages/StudentProfilePage.tsx';
import { AppRoutesEnum } from '../../app-routes.enum.ts';

export const StudentsCrudRoutes = (
  <>
    {/* Students CRUD */}
    <Route element={<StudentsPage />} path={AppRoutesEnum.StudentsRoute} />
    <Route element={<StudentProfilePage />} path={AppRoutesEnum.StudentCreateRoute} />
    <Route element={<StudentProfilePage />} path={AppRoutesEnum.StudentProfilePattern} />
    {/* Documents */}
    <Route element={<StudentPassportPage />} path={AppRoutesEnum.StudentPassportPattern} />
    <Route element={<StudentVisaPage />} path={AppRoutesEnum.StudentVisaPattern} />
    <Route element={<StudentMigrationCardPage />} path={AppRoutesEnum.StudentMigrationCardPattern} />
    <Route element={<StudentArrivalNoticePage />} path={AppRoutesEnum.StudentArrivalNoticePattern} />
    <Route element={<StudentCloseRelativesPage />} path={AppRoutesEnum.StudentCloseRelativesPattern} />
  </>
);
