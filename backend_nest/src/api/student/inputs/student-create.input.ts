import { InputType, IntersectionType, PickType } from '@nestjs/graphql';
import { UserEntityCreateInput } from '@prisma-nestjs-graphql';
import { StudentEntityCreateInput } from '@prisma-nestjs-graphql';
import { StudentPassportEntityCreateInput } from '@prisma-nestjs-graphql';

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

// /**
//  * Данные для создания студента.
//  */
// export interface IStudentCreateInput {
//   email: string;
//   password: string;
//   phone?: string;
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
//  * Схема валидации данных для создания студента.
//  */
// export const StudentCreateInputSchema = joi.object({
//   email: joi.string().email().required(),
//   password: joi.string().min(8).required(),
//   phone: joi.string().optional(),
//   lastName: joi.string().required(),
//   firstName: joi.string().required(),
//   patronymic: joi.string().optional(),
//   curator: joi.string().optional(),
//   faculty: joi.string().optional(),
//   course: joi.number().integer().min(1).optional(),
//   group: joi.string().optional(),
// });
