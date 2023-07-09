import { ObjectType, OmitType } from '@nestjs/graphql';
import { StudentVisaEntity } from '../../../generated/prisma-nestjs-graphql';

/**
 * Виза студента без возможности выбора самого студента.
 */
@ObjectType({ description: 'Виза студента без возможности выбора самого студента' })
export default class StudentVisaWithoutStudentResponse extends OmitType(
  StudentVisaEntity,
  ['student'],
  ObjectType,
) {}
