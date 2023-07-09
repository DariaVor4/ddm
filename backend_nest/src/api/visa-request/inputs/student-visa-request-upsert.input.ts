import { InputType, OmitType } from '@nestjs/graphql';
import { StudentVisaRequestEntityCreateInput } from '../../../generated/prisma-nestjs-graphql';

@InputType()
export class StudentVisaRequestUpsertInput extends OmitType(
  StudentVisaRequestEntityCreateInput,
  ['id', 'student'],
  InputType,
) {}
