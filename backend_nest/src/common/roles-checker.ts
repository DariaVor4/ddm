import UserRoleEnum from '../api/auth/interfaces/user-role.enum';

export const isRoleAdmin = (roles:UserRoleEnum[]) => roles.includes(UserRoleEnum.Admin);

export const isRoleEmployee = (roles:UserRoleEnum[]) => roles.includes(UserRoleEnum.Employee);

export const isRoleStudent = (roles:UserRoleEnum[]) => roles.includes(UserRoleEnum.Student);

export const isRoleAdminOrEmployee = (roles:UserRoleEnum[]) => roles.some((role) => role === UserRoleEnum.Admin || role === UserRoleEnum.Employee);
