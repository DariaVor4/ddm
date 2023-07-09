import { Field, InputType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { NotificationServiceEnum } from '../../../generated/prisma-nestjs-graphql';

/**
 * Входные данные для отправки уведомления.
 */
@InputType()
export class NotificationsSendInput {
  /**
   * Заголовок уведомления.
   */
  @Field(() => String, { description: 'Заголовок уведомления' })
  title: string;

  /**
   * Текст уведомления.
   */
  @Field(() => String, { description: 'Текст уведомления' })
  content: string;

  /**
   * Сервисы для рассылки (по умолчанию все).
   */
  @Field(() => [NotificationServiceEnum], { nullable: true, description: 'Сервисы для рассылки (по умолчанию все)' })
  services?: NotificationServiceEnum[];

  /**
   * Получатели.
   */
  @Field(() => [GraphQLUUID], { nullable: true, description: 'Получатели' })
  userIds?: string[];

  /**
   * Всем сотрудникам.
   */
  @Field(() => Boolean, { nullable: true, description: 'Всем сотрудникам' })
  allEmployees?: boolean;

  /**
   * Всем студентам.
   */
  @Field(() => Boolean, { nullable: true, description: 'Всем студентам' })
  allStudents?: boolean;
}
