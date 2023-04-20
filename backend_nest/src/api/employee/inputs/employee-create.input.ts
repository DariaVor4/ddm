import { joi } from '@common';

export interface IEmployeeCreateInput {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  patronymic?: string;
  isAdmin?: boolean;
}

export const EmployeeCreateInputSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
  lastName: joi.string().min(1).required(),
  firstName: joi.string().min(1).required(),
  patronymic: joi.string().min(1).optional(),
  isAdmin: joi.boolean().optional(),
}).required();
