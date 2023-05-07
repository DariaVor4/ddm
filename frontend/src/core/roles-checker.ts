/* eslint-disable import/prefer-default-export */
import { GUserRoleEnum } from '../api/generated';

function isRoleAdmin(roles?: GUserRoleEnum[]): boolean {
  return !!roles?.includes(GUserRoleEnum.Admin);
}

function isRoleEmployee(roles?: GUserRoleEnum[]): boolean {
  return !!roles?.includes(GUserRoleEnum.Employee);
}

function isRoleStudent(roles?: GUserRoleEnum[]): boolean {
  return !!roles?.includes(GUserRoleEnum.Student);
}

// function isRoleAdminOrEmployee(roles?: GUserRoleEnum[]): boolean {
//   return !!roles?.some(role => role === GUserRoleEnum.Admin || role === GUserRoleEnum.Employee);
// }

export function getRole(roles?: GUserRoleEnum[] | GUserRoleEnum): GUserRoleEnum {
  const rolesArray = !roles ? undefined
    : Array.isArray(roles)
      ? roles
      : [roles];
  return isRoleAdmin(rolesArray) ? GUserRoleEnum.Admin
    : isRoleEmployee(rolesArray) ? GUserRoleEnum.Employee
      : isRoleStudent(rolesArray) ? GUserRoleEnum.Student
        : GUserRoleEnum.Any;
}

export function getRoleName(roles?: GUserRoleEnum[] | GUserRoleEnum): string {
  switch (getRole(roles)) {
    case GUserRoleEnum.Admin:
      return 'Администратор';
    case GUserRoleEnum.Employee:
      return 'Сотрудник';
    case GUserRoleEnum.Student:
      return 'Студент';
    default:
      return 'Гость';
  }
}
