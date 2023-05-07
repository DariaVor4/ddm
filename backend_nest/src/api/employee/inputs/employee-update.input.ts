import {
  InputType, IntersectionType, PartialType, PickType,
} from '@nestjs/graphql';
import { EmployeeEntity } from '@prisma-nestjs-graphql';
import EmployeeCreateInput from './employee-create.input';

@InputType()
export default class EmployeeUpdateInput extends IntersectionType(
  PickType(EmployeeEntity, ['id']),
  PartialType(EmployeeCreateInput),
  InputType,
) {}
