import { InputType, IntersectionType, PickType } from '@nestjs/graphql';
import { UserEntityCreateInput, StudentEntityCreateInput, StudentPassportEntityCreateInput } from '@prisma-nestjs-graphql';

@InputType()
export default class StudentCreateInput extends IntersectionType(
  PickType(UserEntityCreateInput, ['email', 'password']),
  IntersectionType(
    PickType(StudentEntityCreateInput, ['phone', 'curator', 'faculty', 'course', 'group']),
    PickType(StudentPassportEntityCreateInput, ['lastName', 'firstName', 'patronymic']),
    InputType,
  ),
  InputType,
) {}
