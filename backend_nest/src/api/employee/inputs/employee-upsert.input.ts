import {
  InputType, IntersectionType, PartialType, PickType,
} from '@nestjs/graphql';
import { EmployeeEntityCreateInput, UserEntityCreateInput } from '../../../generated/prisma-nestjs-graphql';

@InputType()
export class EmployeeUpsertInput extends PartialType(
  IntersectionType(
    PickType(EmployeeEntityCreateInput, ['lastName', 'firstName', 'patronymic', 'isAdmin']),
    PickType(UserEntityCreateInput, ['email', 'password']),
  ),
  InputType,
) {}
