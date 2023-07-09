import {
  InputType, IntersectionType, PartialType, PickType,
} from '@nestjs/graphql';
import { StudentEntityCreateInput, StudentPassportEntityCreateInput, UserEntityCreateInput } from '../../../generated/prisma-nestjs-graphql';

@InputType()
export default class StudentUpsertInput extends PartialType(
  IntersectionType(
    PickType(UserEntityCreateInput, ['email', 'password']),
    IntersectionType(
      PickType(StudentEntityCreateInput, ['phone', 'curator', 'faculty', 'course', 'group']),
      PickType(StudentPassportEntityCreateInput, ['lastName', 'firstName', 'patronymic']),
    ),
  ),
  InputType,
) {}
