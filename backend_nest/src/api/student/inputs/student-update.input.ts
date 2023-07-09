import {
  InputType, IntersectionType, PartialType, PickType,
} from '@nestjs/graphql';
import StudentCreateInput from './student-create.input';
import { UserEntity } from '../../../generated/prisma-nestjs-graphql';

@InputType()
export default class StudentUpdateInput extends IntersectionType(
  PickType(UserEntity, ['id']),
  PartialType(StudentCreateInput),
  InputType,
) {}

// /**
//  * Данные для обновления студента.
//  */
// export interface IStudentUpdateInput {
//   id: string;
//   email: string;
//   password: string;
//   phone: string;
//   lastName: string;
//   firstName: string;
//   patronymic?: string;
//   curator?: string;
//   faculty?: string;
//   course?: number;
//   group?: string;
// }
//
// /**
//  * Схема валидации данных для обновления студента.
//  */
// export const StudentUpdateInputSchema = joi.object({
//   id: joi.string().uuid().required(),
//   email: joi.string().email().required(),
//   password: joi.string().min(8).required(),
//   phone: joi.string().required(),
//   lastName: joi.string().required(),
//   firstName: joi.string().required(),
//   patronymic: joi.string().optional(),
//   curator: joi.string().optional(),
//   faculty: joi.string().optional(),
//   course: joi.number().min(1).optional(),
//   group: joi.string().optional(),
// });
