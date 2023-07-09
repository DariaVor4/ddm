import { ObjectType, OmitType } from '@nestjs/graphql';
import { StudentPassportEntity } from '../../../generated/prisma-nestjs-graphql';

/**
 * Паспорт студента, где вместо студента присутствует только его studentId.
 */
@ObjectType({ description: 'Паспорт студента, где вместо студента присутствует только его studentId.' })
export default class StudentPassportWithoutStudentResult extends OmitType(
  StudentPassportEntity,
  ['student'],
  ObjectType,
) {}
