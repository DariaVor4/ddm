import { FC } from 'react';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import SchoolIcon from '@mui/icons-material/School';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BadgeIcon from '@mui/icons-material/Badge';
import { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon';
import { GUserRoleEnum } from '../api/generated.ts';
import { getRole } from '../core/roles-checker.ts';

interface IRoleIconProps extends SvgIconProps {
  userRole: GUserRoleEnum[] | GUserRoleEnum | undefined;
}

export const UserRoleIcon: FC<IRoleIconProps> = ({ userRole, ...props }) => {
  switch (getRole(userRole)) {
    case GUserRoleEnum.Student:
      return <SchoolIcon {...props} />;
    case GUserRoleEnum.Admin:
      return <AdminPanelSettingsIcon {...props} />;
    case GUserRoleEnum.Employee:
      return <BadgeIcon {...props} />;
    default:
      return <NoAccountsIcon {...props} />;
  }
};
