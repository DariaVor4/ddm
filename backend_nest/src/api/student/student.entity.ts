// import BaseEntity from '@common/BaseEntity/base-entity';
// import {
//   Field, ID, Int, ObjectType,
// } from '@nestjs/graphql';
// import { Student } from '@prisma-client';
// import { OptionalNullable } from '../../type-utils';
// import UserEntity from '../user/user.entity';
// import StudentArrivalNoticeEntity from './student-arrival-notice/student-arrival-notice.entity';
// import StudentMigrationCardEntity from './student-migration-card/student-migration-card.entity';
// import StudentPassportEntity from './student-passport/student-passport.entity';
// import StudentVisaEntity from './student-visa/student-visa.entity';
//
// // Студент
// @ObjectType({ description: 'Студент' })
// export default class StudentEntity extends BaseEntity implements OptionalNullable<Student> {
//   // id Пользователя
//   @Field(() => ID, { description: 'id Пользователя' })
//   id: string;
//
//   // Пользователь
//   @Field(() => UserEntity, { description: 'Пользователь' })
//   user: UserEntity;
//
//   // Уведомление о прибытии
//   @Field(() => StudentArrivalNoticeEntity, { nullable: true, description: 'Уведомление о прибытии' })
//   arrivalNotice?: StudentArrivalNoticeEntity | null;
//
//   // Миграционная карта
//   @Field(() => StudentMigrationCardEntity, { nullable: true, description: 'Миграционная карта' })
//   migrationCard?: StudentMigrationCardEntity | null;
//
//   // Виза
//   @Field(() => StudentVisaEntity, { nullable: true, description: 'Виза' })
//   visa?: StudentVisaEntity | null;
//
//   // Паспорт
//   @Field(() => StudentPassportEntity, { nullable: true, description: 'Паспорт' })
//   passport?: StudentPassportEntity | null;
//
//   // Телефон
//   @Field(() => String, { nullable: true, description: 'Телефон' })
//   phone?: string | null;
//
//   // Куратор
//   @Field(() => String, { nullable: true, description: 'Куратор' })
//   curator?: string | null;
//
//   // Факультет
//   @Field(() => String, { nullable: true, description: 'Факультет' })
//   faculty?: string | null;
//
//   // Курс
//   @Field(() => Int, { nullable: true, description: 'Курс' })
//   course?: number | null;
//
//   // Группа
//   @Field(() => String, { nullable: true, description: 'Группа' })
//   group?: string | null;
// }
