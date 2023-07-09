import { InputType } from '@nestjs/graphql';
import StudentUpsertInput from './student-upsert.input';
import { SetRequiredType } from '../../../common';

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
