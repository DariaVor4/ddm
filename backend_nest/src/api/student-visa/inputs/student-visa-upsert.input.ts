import { InputType, OmitType } from '@nestjs/graphql';
import { StudentVisaEntityCreateInput } from '../../../generated/prisma-nestjs-graphql';

/**
 * Входные данные для создания/обновления визы студента.
 */
@InputType({ description: 'Входные данные для создания/обновления визы студента' })
export default class StudentVisaUpsertInput extends OmitType(
  StudentVisaEntityCreateInput,
  ['student'],
  InputType,
) {}
