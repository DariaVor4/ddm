import { ObjectType, OmitType } from '@nestjs/graphql';
import { StudentPassportEntity } from '@prisma-nestjs-graphql';

/**
 * Паспорт студента, где вместо студента присутствует только его studentId.
 */
@ObjectType()
export default class StudentPassportWithoutStudentEntity extends OmitType(
  StudentPassportEntity,
  ['student'],
  ObjectType,
) {}
