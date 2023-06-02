import { InputType } from '@nestjs/graphql';
import { SetRequiredType } from '@common/graphql-mapped-types/set-required-type';
import StudentUpsertInput from './student-upsert.input';

// TODO: remove this
@InputType()
export default class StudentCreateInput extends SetRequiredType(
  StudentUpsertInput,
  ['email', 'password'],
  InputType,
) {}

// @InputType()
// export default class StudentCreateInput extends IntersectionType(
//   RequiredType(PickType(UserEntityCreateInput, ['email', 'password'])),
//   IntersectionType(
//     PickType(StudentEntityCreateInput, ['phone', 'curator', 'faculty', 'course', 'group']),
//     PickType(StudentPassportEntityCreateInput, ['lastName', 'firstName', 'patronymic']),
//     InputType,
//   ),
//   InputType,
// ) {}
