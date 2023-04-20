import {
  IsEmail, IsNumber, IsOptional, IsPhoneNumber, IsString, Min, MinLength,
} from 'class-validator';

/**
 * Данные для создания студента
 */
export default class StudentUpdateInput {
  // Почта
  @IsEmail({}, { message: 'Некорректный email' })
  @IsOptional()
  email?: string;

  // Пароль
  @IsString({ message: 'Некорректный пароль' })
  @MinLength(8, { message: 'Пароль должен быть не менее 8 символов' })
  @IsOptional()
  password?: string;

  // Телефон
  @IsPhoneNumber('RU', { message: 'Некорректный номер телефона' })
  @IsOptional()
  phone?: string;

  // Фамилия
  @IsString({ message: 'Некорректная фамилия' })
  @MinLength(1, { message: 'Фамилия не может быть пустой' })
  @IsOptional()
  lastName?: string;

  // Имя
  @IsString({ message: 'Некорректное имя' })
  @MinLength(1, { message: 'Имя не может быть пустым' })
  @IsOptional()
  firstName?: string;

  // Отчество
  @IsString({ message: 'Некорректное отчество' })
  @MinLength(1, { message: 'Отчество не может быть пустым' })
  @IsOptional()
  patronymic?: string;

  // Куратор
  @IsString({ message: 'Некорректный куратор' })
  @IsOptional()
  curator?: string;

  // Факультет
  @IsString({ message: 'Некорректный факультет' })
  @IsOptional()
  faculty?: string;

  // Курс
  @IsNumber({ maxDecimalPlaces: 0, allowNaN: false, allowInfinity: false }, { message: 'Некорректный курс' })
  @Min(1, { message: 'Курс не может быть меньше 1' })
  @IsOptional()
  course?: number;

  // Группа
  @IsString({ message: 'Некорректная группа' })
  @IsOptional()
  group?: string;
}

// TODO: стереть это если не нужно
// export interface IStudentRegistrationInput {
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
// export const StudentRegistrationInputSchema = joi.object({
//   //   email: string;
//   email: joi.string().email().required(),
//   //   password: string;
//   password: joi.string().min(8).required(),
//   //   phone: string;
//   phone: joi.string().required(),
//   //   lastName: string;
//   lastName: joi.string().required(),
//   //   firstName: string;
//   firstName: joi.string().required(),
//   //   patronymic?: string;
//   patronymic: joi.string().optional(),
//   //   curator?: string;
//   curator: joi.string().optional(),
//   //   faculty?: string;
//   faculty: joi.string().optional(),
//   //   course?: number;
//   course: joi.number().min(1).optional(),
//   //   group?: string;
//   group: joi.string().optional(),
// });
