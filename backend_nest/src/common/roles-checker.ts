import UserRoleEnum from '../api/auth/interfaces/user-role.enum';

export function isRoleAdmin(roles: UserRoleEnum[] | undefined): boolean {
  return !!roles?.includes(UserRoleEnum.Admin);
}

export function isRoleEmployee(roles: UserRoleEnum[] | undefined): boolean {
  return !!roles?.includes(UserRoleEnum.Employee);
}

export function isRoleStudent(roles: UserRoleEnum[] | undefined): boolean {
  return !!roles?.includes(UserRoleEnum.Student);
}

export function isRoleAdminOrEmployee(roles: UserRoleEnum[] | undefined): boolean {
  return !!roles?.some((role) => role === UserRoleEnum.Admin || role === UserRoleEnum.Employee);
}
