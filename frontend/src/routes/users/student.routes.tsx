import { Route } from 'react-router-dom';
import { StudentPassportPage } from '../../views/pages/student-documents/StudentPassportPage.tsx';
import { StudentArrivalNoticePage } from '../../views/pages/student-documents/StudentArrivalNoticePage.tsx';
import { StudentCloseRelativesPage } from '../../views/pages/student-documents/StudentCloseRelativesPage.tsx';
import { StudentMigrationCardPage } from '../../views/pages/student-documents/StudentMigrationCardPage.tsx';
import { StudentVisaPage } from '../../views/pages/student-documents/StudentVisaPage.tsx';
import { StudentProfilePage } from '../../views/pages/profiles/StudentProfilePage.tsx';
import { AppRoutesEnum } from '../app-routes.enum.ts';
import { VisaRequestPage } from '../../views/pages/VisaRequestPage.tsx';

export const StudentRoutes: JSX.Element = (
  <>
    <Route element={<StudentProfilePage />} path={AppRoutesEnum.AccountSettingsRoute} />
    <Route element={<h1>Notifications</h1>} path='notifications' />
    <Route element={<VisaRequestPage />} path={AppRoutesEnum.VisaRequestRoute}>
      <Route element={<h1>Visa Request Edit</h1>} path='edit' />
    </Route>
    <Route element={<StudentPassportPage />} path={AppRoutesEnum.DocumentsPassportRoute} />
    <Route element={<StudentVisaPage />} path={AppRoutesEnum.DocumentsVisaRoute} />
    <Route element={<StudentMigrationCardPage />} path={AppRoutesEnum.DocumentsMigrationCardRoute} />
    <Route element={<StudentArrivalNoticePage />} path={AppRoutesEnum.DocumentsArrivalNoticeRoute} />
    <Route element={<StudentCloseRelativesPage />} path={AppRoutesEnum.DocumentsCloseRelativesRoute} />
  </>
);
