import { Field, ObjectType } from '@nestjs/graphql';
import { EmailAvailabilityVerdictEnum } from '../types/email-verdict.enum';

@ObjectType()
export default class EmailAvailabilityResponse {
  @Field(() => EmailAvailabilityVerdictEnum)
  verdict: EmailAvailabilityVerdictEnum;

  @Field(() => String)
  message: string;
}
