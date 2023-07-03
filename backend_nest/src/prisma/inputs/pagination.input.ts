import { Field, InputType } from '@nestjs/graphql';

/**
 * Входные данные для пагинации.
 */
@InputType({ description: 'Входные данные для пагинации' })
export class PaginationInput {
  @Field({ nullable: true })
  skip?: number;

  @Field({ nullable: true })
  take?: number;
}
