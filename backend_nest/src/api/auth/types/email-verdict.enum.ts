// import { registerEnumType } from '@nestjs/graphql';

enum EmailVerdictEnum {
  InvalidEmail = 'InvalidEmail',
  EmailAlreadyInUse = 'EmailAlreadyInUse',
  Ok = 'Ok',
}

// registerEnumType(EmailVerdictEnum, {
//   name: 'EmailVerdictEnum',
//   description: 'Email verdict',
// });
//
export default EmailVerdictEnum;
