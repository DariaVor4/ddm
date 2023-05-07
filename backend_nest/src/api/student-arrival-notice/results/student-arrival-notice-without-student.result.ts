import { ObjectType, OmitType } from '@nestjs/graphql';
import { StudentArrivalNoticeEntity } from '@prisma-nestjs-graphql';

/**
 * Уведомление о прибытии студента без возможности выбора самого студента.
 */
@ObjectType({ description: 'Уведомление о прибытии студента без возможности выбора самого студента' })
export default class StudentArrivalNoticeWithoutStudentResult extends OmitType(
  StudentArrivalNoticeEntity,
  ['student'],
  ObjectType,
) {}
