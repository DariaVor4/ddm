import { GUserRoleEnum } from '../api/generated.ts';
import { EmployeeRoutes } from './users/employee.routes.tsx';
import { StudentRoutes } from './users/student.routes.tsx';
import { AdminRoutes } from './users/admin.routes.tsx';

export const UserRoutes: Record<GUserRoleEnum, JSX.Element> = {
  [GUserRoleEnum.Admin]: AdminRoutes,
  [GUserRoleEnum.Employee]: EmployeeRoutes,
  [GUserRoleEnum.Student]: StudentRoutes,
  [GUserRoleEnum.Any]: <></>,
} as const;
