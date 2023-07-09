import {
  InputType, IntersectionType, PartialType, PickType,
} from '@nestjs/graphql';
import EmployeeCreateInput from './employee-create.input';
import { EmployeeEntity } from '../../../generated/prisma-nestjs-graphql';

@InputType()
export default class EmployeeUpdateInput extends IntersectionType(
  PickType(EmployeeEntity, ['id']),
  PartialType(EmployeeCreateInput),
  InputType,
) {}
