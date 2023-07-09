import { InputType, OmitType } from '@nestjs/graphql';
import { StudentMigrationCardEntityCreateInput } from '../../../generated/prisma-nestjs-graphql';

/**
 * Входные данные для создания/обновления миграционной карты студента.
 */
@InputType({ description: 'Входные данные для создания/обновления миграционной карты студента' })
export default class StudentMigrationCardUpsertInput extends OmitType(
  StudentMigrationCardEntityCreateInput,
  ['id', 'student'],
  InputType,
) {}
