import { InputType, OmitType } from '@nestjs/graphql';
import { StudentArrivalNoticeEntityCreateInput } from '../../../generated/prisma-nestjs-graphql';

/**
 * Входные данные для создания/обновления уведомления о прибытии студента.
 */
@InputType({ description: 'Входные данные для создания/обновления уведомления о прибытии студента' })
export default class StudentArrivalNoticeUpsertInput extends OmitType(
  StudentArrivalNoticeEntityCreateInput,
  ['id', 'student'],
  InputType,
) {}
