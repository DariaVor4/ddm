import { registerEnumType } from '@nestjs/graphql';

/**
 * Вердикт проверки почты на доступность
 */
export enum EmailAvailabilityVerdictEnum {
  Ok = 'Ok',
  Occupied = 'Occupied',
  Incorrect = 'Incorrect',
}

registerEnumType(EmailAvailabilityVerdictEnum, {
  name: 'EmailAvailabilityVerdictEnum',
  description: 'Вердикт проверки почты на доступность',
});
