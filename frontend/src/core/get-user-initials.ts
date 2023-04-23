import { compact } from 'lodash';
import { GUserEntity } from '../api/generated';

function getUserInitials(user: Partial<GUserEntity> | undefined): string {
  return compact([
    user?.employee?.lastName || user?.student?.passport?.lastName,
    (user?.employee?.firstName || user?.student?.passport?.firstName)?.slice(0, 1).concat('.'),
  ]).join(' ');
}

export default getUserInitials;
