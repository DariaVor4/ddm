import { ObjectType, OmitType } from '@nestjs/graphql';
import { StudentCloseRelativeEntity } from '@prisma-nestjs-graphql';

/**
 * Близкий родственник студента без возможности выбора самого студента.
 */
@ObjectType({ description: 'Близкий родственник студента без возможности выбора самого студента' })
export default class StudentCloseRelativeWithoutStudentResult extends OmitType(
  StudentCloseRelativeEntity,
  ['student'],
  ObjectType,
) {}
