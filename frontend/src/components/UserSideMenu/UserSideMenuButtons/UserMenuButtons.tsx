import { GUserRoleEnum } from '../../../api/generated.ts';
import { UserMenuAdminButtons } from './UserMenuAdminButtons.tsx';
import { UserMenuStudentButtons } from './UserMenuStudentButtons.tsx';
import { UserMenuEmployeeButtons } from './UserMenuEmployeeButtons.tsx';

export const UserMenuButtons: Record<GUserRoleEnum, JSX.Element> = {
  [GUserRoleEnum.Admin]: <UserMenuAdminButtons />,
  [GUserRoleEnum.Employee]: <UserMenuEmployeeButtons />,
  [GUserRoleEnum.Student]: <UserMenuStudentButtons />,
  [GUserRoleEnum.Any]: <></>,
} as const;
