import { Field, ObjectType } from '@nestjs/graphql';
import { FileEntity } from '@prisma-nestjs-graphql';

@ObjectType()
export class FileEntityResponse extends FileEntity {
  /**
   * Ссылка на файл.
   */
  @Field(() => String, { description: 'Ссылка на файл' })
  url: string;
}
