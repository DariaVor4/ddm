import { InputType, OmitType } from '@nestjs/graphql';
import { StudentPassportEntityCreateInput } from '@prisma-nestjs-graphql';

@InputType()
export default class StudentPassportUpsertInput extends OmitType(
  StudentPassportEntityCreateInput,
  ['id', 'student'],
  InputType,
) {}
