import { InputType, IntersectionType, PickType } from '@nestjs/graphql';
import { EmployeeEntity } from '@prisma-graphql/employee-entity';
import { UserEntity } from '@prisma-graphql/user-entity';

@InputType()
export default class EmployeeCreateInput extends IntersectionType(
  PickType(UserEntity, ['email', 'password']),
  PickType(EmployeeEntity, ['lastName', 'firstName', 'patronymic', 'isAdmin']),
  InputType,
) {}
