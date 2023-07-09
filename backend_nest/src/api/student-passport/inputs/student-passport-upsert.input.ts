import { InputType, OmitType } from '@nestjs/graphql';
import { StudentPassportEntityCreateInput } from '../../../generated/prisma-nestjs-graphql';

/**
 * Входные данные для создания/обновления паспорта студента.
 */
@InputType({ description: 'Входные данные для создания/обновления паспорта студента' })
export default class StudentPassportUpsertInput extends OmitType(
  StudentPassportEntityCreateInput,
  ['id', 'student'],
  InputType,
) {}
