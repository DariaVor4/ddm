import { registerEnumType } from '@nestjs/graphql';

enum UserRoleEnum {
  Admin = 'Admin',
  Employee = 'Employee',
  Student = 'Student',
  Any = 'Any',
}

registerEnumType(UserRoleEnum, {
  name: 'UserRoleEnum',
  description: 'Роли пользователя',
});

export default UserRoleEnum;
