import { joi } from '@common';

export interface IEmployeeUpdateInput {
  id: string;
  email?: string;
  password?: string;
  lastName?: string;
  firstName?: string;
  patronymic?: string;
  isAdmin?: boolean;
}

export const EmployeeUpdateInputSchema = joi.object({
  id: joi.string().uuid().required(),
  email: joi.string().email().optional(),
  password: joi.string().min(8).optional(),
  lastName: joi.string().min(1).optional(),
  firstName: joi.string().min(1).optional(),
  patronymic: joi.string().min(1).optional(),
  isAdmin: joi.boolean().optional(),
}).required();
