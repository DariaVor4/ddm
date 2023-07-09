import { ObjectType, OmitType } from '@nestjs/graphql';
import { StudentMigrationCardEntity } from '../../../generated/prisma-nestjs-graphql';

/**
 * Миграционная карта студента без возможности выбора самого студента.
 */
@ObjectType({ description: 'Миграционная карта студента без возможности выбора самого студента' })
export default class StudentMigrationCardWithoutStudentResponse extends OmitType(
  StudentMigrationCardEntity,
  ['student'],
  ObjectType,
) {}
