import { compact } from 'lodash';
import type { PartialDeep } from 'type-fest';
import type { GUserCurrentResponse } from '../api/generated';
import { getRoleName } from './roles-checker.ts';

export function getUserInitials(current: PartialDeep<GUserCurrentResponse> | undefined): string {
  return compact([
    current?.user?.employee?.lastName || current?.user?.student?.passport?.lastName,
    (current?.user?.employee?.firstName || current?.user?.student?.passport?.firstName)?.slice(0, 1).concat('.'),
  ]).join(' ') || getRoleName(current?.roles);
}
