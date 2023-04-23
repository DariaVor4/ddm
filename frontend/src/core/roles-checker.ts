import { GUserRoleEnum } from '../api/generated';

export function isRoleAdmin(roles?: GUserRoleEnum[]): boolean {
  return !!roles?.includes(GUserRoleEnum.Admin);
}

export function isRoleEmployee(roles?: GUserRoleEnum[]): boolean {
  return !!roles?.includes(GUserRoleEnum.Employee);
}

export function isRoleStudent(roles?: GUserRoleEnum[]): boolean {
  return !!roles?.includes(GUserRoleEnum.Student);
}

export function isRoleAdminOrEmployee(roles?: GUserRoleEnum[]): boolean {
  return !!roles?.some(role => role === GUserRoleEnum.Admin || role === GUserRoleEnum.Employee);
}

export function getRole(roles?: GUserRoleEnum[]): GUserRoleEnum {
  return isRoleAdmin(roles) ? GUserRoleEnum.Admin
    : isRoleEmployee(roles) ? GUserRoleEnum.Employee
      : isRoleStudent(roles) ? GUserRoleEnum.Student
        : GUserRoleEnum.Any;
}
