import { InputType, IntersectionType, PickType } from '@nestjs/graphql';
import { EmployeeEntity } from '@prisma-nestjs-graphql';
import { UserEntity } from '@prisma-nestjs-graphql';

@InputType()
export default class EmployeeCreateInput extends IntersectionType(
  PickType(UserEntity, ['email', 'password']),
  PickType(EmployeeEntity, ['lastName', 'firstName', 'patronymic', 'isAdmin']),
  InputType,
) {}
