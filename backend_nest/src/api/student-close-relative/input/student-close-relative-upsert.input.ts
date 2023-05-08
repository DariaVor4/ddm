import {
  InputType, IntersectionType, OmitType, PartialType, PickType,
} from '@nestjs/graphql';
import { StudentCloseRelativeEntity, StudentCloseRelativeEntityCreateInput } from '@prisma-nestjs-graphql';

/**
 * Входные данные для создания/обновления близкого родственника студента.
 */
@InputType()
export default class StudentCloseRelativeUpsertInput extends IntersectionType(
  OmitType(
    StudentCloseRelativeEntityCreateInput,
    ['id', 'student'],
    InputType,
  ),
  PartialType(PickType(
    StudentCloseRelativeEntity,
    ['id', 'studentId'],
    InputType,
  )),
  InputType,
) {}
