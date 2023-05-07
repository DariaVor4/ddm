import { Dayjs } from 'dayjs';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: Dayjs;
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: string;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: string;
};

export type GConfirmationEmailEntityCountAggregate = {
  _all: Scalars['Int'];
  code: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  isConfirmed: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GConfirmationEmailEntityMaxAggregate = {
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['EmailAddress']>;
  id?: Maybe<Scalars['UUID']>;
  isConfirmed?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GConfirmationEmailEntityMinAggregate = {
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['EmailAddress']>;
  id?: Maybe<Scalars['UUID']>;
  isConfirmed?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GConfirmationPhoneEntityCountAggregate = {
  _all: Scalars['Int'];
  code: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  isConfirmed: Scalars['Int'];
  phone: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GConfirmationPhoneEntityMaxAggregate = {
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['UUID']>;
  isConfirmed?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GConfirmationPhoneEntityMinAggregate = {
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['UUID']>;
  isConfirmed?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GEmailAvailabilityResponse = {
  message: Scalars['String'];
  verdict: GEmailAvailabilityVerdictEnum;
};

/** Вердикт проверки почты на доступность */
export enum GEmailAvailabilityVerdictEnum {
  Incorrect = 'Incorrect',
  Occupied = 'Occupied',
  Ok = 'Ok'
}

export type GEmployeeCreateInput = {
  /** Электронная почта (должна быть подтверждена) */
  email: Scalars['EmailAddress'];
  /** Имя */
  firstName?: InputMaybe<Scalars['String']>;
  /** Является ли админом? */
  isAdmin?: Scalars['Boolean'];
  /** Фамилия */
  lastName?: InputMaybe<Scalars['String']>;
  /** Отчество */
  patronymic?: InputMaybe<Scalars['String']>;
};

/** Сотрудник */
export type GEmployeeEntity = {
  createdAt: Scalars['DateTime'];
  /** Имя */
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** Является ли админом? */
  isAdmin: Scalars['Boolean'];
  /** Фамилия */
  lastName?: Maybe<Scalars['String']>;
  /** Отчество */
  patronymic?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: GUserEntity;
};

export type GEmployeeEntityCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  isAdmin: Scalars['Int'];
  lastName: Scalars['Int'];
  patronymic: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GEmployeeEntityMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GEmployeeEntityMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GEmployeeUpdateInput = {
  /** Электронная почта (должна быть подтверждена) */
  email?: InputMaybe<Scalars['EmailAddress']>;
  /** Имя */
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** Является ли админом? */
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  /** Фамилия */
  lastName?: InputMaybe<Scalars['String']>;
  /** Отчество */
  patronymic?: InputMaybe<Scalars['String']>;
};

/** Пол */
export enum GGenderEnum {
  Female = 'Female',
  Male = 'Male'
}

export type GMutation = {
  /** Создание сотрудника */
  createEmployee: GEmployeeEntity;
  /** Удаление сотрудника */
  deleteEmployee: GEmployeeEntity;
  /** Подтверждение электронной почты кодом. Возвращает true, если почта успешно подтверждена. */
  emailConfirmByCode: Scalars['Boolean'];
  /** Вход по почте и паролю, возвращает токен доступа и время его истечения */
  loginByPassword: GTokenResponse;
  /** Обновление пары токенов для авторизованного пользователя */
  refreshTokens: GTokenResponse;
  /** Регистрация студента. Сначала необходимо подтвердить почту. */
  registration: Scalars['Boolean'];
  /** Отправка кода подтверждения почты. Устанавливает RegistrationToken в cookies. Возвращает время до которого необходимо завершить регистрацию. */
  sendConfirmationCode: Scalars['DateTime'];
  /** Создание/регистрация студента. */
  studentCreate: GStudentEntity;
  /** Удаление паспорта студента. Студент не может удалить свой паспорт. */
  studentPassportDelete: GStudentPassportWithoutStudentEntity;
  /** Перезапись паспорта студента. */
  studentPassportUpsert: GStudentPassportWithoutStudentEntity;
  /** Обновление студента. */
  studentUpdate: GStudentEntity;
  /** Обновление сотрудника */
  updateEmployee: GEmployeeEntity;
};


export type GMutationCreateEmployeeArgs = {
  input: GEmployeeCreateInput;
};


export type GMutationDeleteEmployeeArgs = {
  id: Scalars['UUID'];
};


export type GMutationEmailConfirmByCodeArgs = {
  code: Scalars['String'];
  email: Scalars['EmailAddress'];
};


export type GMutationLoginByPasswordArgs = {
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
};


export type GMutationRegistrationArgs = {
  input: GStudentCreateInput;
};


export type GMutationSendConfirmationCodeArgs = {
  email: Scalars['EmailAddress'];
};


export type GMutationStudentCreateArgs = {
  input: GStudentCreateInput;
};


export type GMutationStudentPassportDeleteArgs = {
  studentId: Scalars['UUID'];
};


export type GMutationStudentPassportUpsertArgs = {
  data: GStudentPassportUpsertInput;
  studentId?: InputMaybe<Scalars['UUID']>;
};


export type GMutationStudentUpdateArgs = {
  input: GStudentUpdateInput;
};


export type GMutationUpdateEmployeeArgs = {
  input: GEmployeeUpdateInput;
};

/** Уведомление */
export type GNotificationEntity = {
  _count: GNotificationEntityCount;
  /** Содержимое */
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  /** Заголовок */
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Получатели */
  users?: Maybe<Array<GNotificationToUserEntity>>;
};

export type GNotificationEntityCount = {
  users: Scalars['Int'];
};

export type GNotificationEntityCountAggregate = {
  _all: Scalars['Int'];
  content: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GNotificationEntityMaxAggregate = {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['UUID']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GNotificationEntityMinAggregate = {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['UUID']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Уведомления для пользователей */
export type GNotificationToUserEntity = {
  createdAt: Scalars['DateTime'];
  /** Прочитано ли уведомление? */
  isRead: Scalars['Boolean'];
  notification: GNotificationEntity;
  notificationId: Scalars['UUID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: GUserEntity;
  userId: Scalars['UUID'];
};

export type GNotificationToUserEntityCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  isRead: Scalars['Int'];
  notificationId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type GNotificationToUserEntityMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  isRead?: Maybe<Scalars['Boolean']>;
  notificationId?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['UUID']>;
};

export type GNotificationToUserEntityMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  isRead?: Maybe<Scalars['Boolean']>;
  notificationId?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['UUID']>;
};

export type GQuery = {
  /** Проверка почты на корректность и доступность */
  emailAvailability: GEmailAvailabilityResponse;
  /** Выборка сотрудника по id */
  getEmployeeById: GEmployeeEntity;
  /** Выборка всех сотрудников */
  getEmployees: Array<GEmployeeEntity>;
  /** Получение студента по id. */
  student: GStudentEntity;
  /** Получить паспорт студента. */
  studentPassport?: Maybe<GStudentPassportWithoutStudentEntity>;
  /** Получение списка студентов. */
  students: Array<GStudentEntity>;
  /** Получить текущего пользователя */
  userCurrent: GUserCurrentResponse;
};


export type GQueryEmailAvailabilityArgs = {
  email: Scalars['String'];
};


export type GQueryStudentArgs = {
  id: Scalars['UUID'];
};


export type GQueryStudentPassportArgs = {
  studentId?: InputMaybe<Scalars['UUID']>;
};

/** Уведомление о прибытии студента */
export type GStudentArrivalNoticeEntity = {
  /** Адрес регистрации */
  address?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  /** Дата регистрации */
  date?: Maybe<Scalars['DateTime']>;
  /** Дата окончания регистрации */
  expires?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  /** Приглашающая сторона */
  invitingSide?: Maybe<Scalars['String']>;
  /** Профессия */
  profession?: Maybe<Scalars['String']>;
  /** Принимающая сторона */
  receivingSide?: Maybe<Scalars['String']>;
  student: GStudentEntity;
  studentId: Scalars['UUID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentArrivalNoticeEntityCountAggregate = {
  _all: Scalars['Int'];
  address: Scalars['Int'];
  createdAt: Scalars['Int'];
  date: Scalars['Int'];
  expires: Scalars['Int'];
  id: Scalars['Int'];
  invitingSide: Scalars['Int'];
  profession: Scalars['Int'];
  receivingSide: Scalars['Int'];
  studentId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GStudentArrivalNoticeEntityMaxAggregate = {
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['UUID']>;
  invitingSide?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  receivingSide?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentArrivalNoticeEntityMinAggregate = {
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['UUID']>;
  invitingSide?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  receivingSide?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Близкие родственники студента */
export type GStudentCloseRelativeEntity = {
  /** Постоянное место жительства */
  addressContinuousResidence?: Maybe<Scalars['String']>;
  /** Дата рождения */
  birthDate?: Maybe<Scalars['DateTime']>;
  /** Гражданство */
  citizenship?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  /** Имя */
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** Фамилия */
  lastName?: Maybe<Scalars['String']>;
  /** Отчество */
  patronymic?: Maybe<Scalars['String']>;
  student: GStudentEntity;
  studentId: Scalars['UUID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentCloseRelativeEntityCountAggregate = {
  _all: Scalars['Int'];
  addressContinuousResidence: Scalars['Int'];
  birthDate: Scalars['Int'];
  citizenship: Scalars['Int'];
  createdAt: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
  patronymic: Scalars['Int'];
  studentId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GStudentCloseRelativeEntityMaxAggregate = {
  addressContinuousResidence?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  citizenship?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  lastName?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentCloseRelativeEntityMinAggregate = {
  addressContinuousResidence?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  citizenship?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  lastName?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentCreateInput = {
  course?: InputMaybe<Scalars['Int']>;
  curator?: InputMaybe<Scalars['String']>;
  email: Scalars['EmailAddress'];
  faculty?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  patronymic?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** Студент */
export type GStudentEntity = {
  _count: GStudentEntityCount;
  /** Уведомление о прибытии */
  arrivalNotice?: Maybe<GStudentArrivalNoticeEntity>;
  /** Близкие родственники */
  closeRelatives?: Maybe<Array<GStudentCloseRelativeEntity>>;
  /** Курс */
  course?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  /** Куратор */
  curator?: Maybe<Scalars['String']>;
  /** Факультет */
  faculty?: Maybe<Scalars['String']>;
  /** Группа */
  group?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** Миграционная карта */
  migrationCard?: Maybe<GStudentMigrationCardEntity>;
  /** Паспорт */
  passport?: Maybe<GStudentPassportEntity>;
  /** Телефон */
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: GUserEntity;
  /** Виза */
  visa?: Maybe<GStudentVisaEntity>;
  /** Визовые анкеты */
  visaRequests?: Maybe<Array<GStudentVisaRequestEntity>>;
};

export type GStudentEntityAvgAggregate = {
  course?: Maybe<Scalars['Float']>;
};

export type GStudentEntityCount = {
  closeRelatives: Scalars['Int'];
  visaRequests: Scalars['Int'];
};

export type GStudentEntityCountAggregate = {
  _all: Scalars['Int'];
  course: Scalars['Int'];
  createdAt: Scalars['Int'];
  curator: Scalars['Int'];
  faculty: Scalars['Int'];
  group: Scalars['Int'];
  id: Scalars['Int'];
  phone: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GStudentEntityMaxAggregate = {
  course?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  curator?: Maybe<Scalars['String']>;
  faculty?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentEntityMinAggregate = {
  course?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  curator?: Maybe<Scalars['String']>;
  faculty?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentEntitySumAggregate = {
  course?: Maybe<Scalars['Int']>;
};

/** Миграционная карта студента */
export type GStudentMigrationCardEntity = {
  createdAt: Scalars['DateTime'];
  /** Дата истечения */
  expirationDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  /** Дата выдачи */
  issueDate?: Maybe<Scalars['DateTime']>;
  /** Номер */
  number?: Maybe<Scalars['String']>;
  /** Серия */
  series?: Maybe<Scalars['String']>;
  student: GStudentEntity;
  studentId: Scalars['UUID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentMigrationCardEntityCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  expirationDate: Scalars['Int'];
  id: Scalars['Int'];
  issueDate: Scalars['Int'];
  number: Scalars['Int'];
  series: Scalars['Int'];
  studentId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GStudentMigrationCardEntityMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['UUID']>;
  issueDate?: Maybe<Scalars['DateTime']>;
  number?: Maybe<Scalars['String']>;
  series?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentMigrationCardEntityMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['UUID']>;
  issueDate?: Maybe<Scalars['DateTime']>;
  number?: Maybe<Scalars['String']>;
  series?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Паспорт студента */
export type GStudentPassportEntity = {
  /** Дата рождения */
  birthDate?: Maybe<Scalars['DateTime']>;
  /** Место рождения */
  birthPlace?: Maybe<Scalars['String']>;
  /** Гражданство */
  citizenship?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  /** Дата истечения */
  expirationDate?: Maybe<Scalars['DateTime']>;
  /** Имя */
  firstName?: Maybe<Scalars['String']>;
  /** Пол */
  gender?: Maybe<GGenderEnum>;
  id: Scalars['UUID'];
  /** Дата выдачи */
  issueDate?: Maybe<Scalars['DateTime']>;
  /** Кем выдан */
  issuedBy?: Maybe<Scalars['String']>;
  /** Фамилия */
  lastName?: Maybe<Scalars['String']>;
  /** Номер */
  number?: Maybe<Scalars['String']>;
  /** Отчество */
  patronymic?: Maybe<Scalars['String']>;
  /** Серия */
  series?: Maybe<Scalars['String']>;
  student: GStudentEntity;
  studentId: Scalars['UUID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentPassportEntityCountAggregate = {
  _all: Scalars['Int'];
  birthDate: Scalars['Int'];
  birthPlace: Scalars['Int'];
  citizenship: Scalars['Int'];
  createdAt: Scalars['Int'];
  expirationDate: Scalars['Int'];
  firstName: Scalars['Int'];
  gender: Scalars['Int'];
  id: Scalars['Int'];
  issueDate: Scalars['Int'];
  issuedBy: Scalars['Int'];
  lastName: Scalars['Int'];
  number: Scalars['Int'];
  patronymic: Scalars['Int'];
  series: Scalars['Int'];
  studentId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GStudentPassportEntityMaxAggregate = {
  birthDate?: Maybe<Scalars['DateTime']>;
  birthPlace?: Maybe<Scalars['String']>;
  citizenship?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<GGenderEnum>;
  id?: Maybe<Scalars['UUID']>;
  issueDate?: Maybe<Scalars['DateTime']>;
  issuedBy?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  series?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentPassportEntityMinAggregate = {
  birthDate?: Maybe<Scalars['DateTime']>;
  birthPlace?: Maybe<Scalars['String']>;
  citizenship?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<GGenderEnum>;
  id?: Maybe<Scalars['UUID']>;
  issueDate?: Maybe<Scalars['DateTime']>;
  issuedBy?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  series?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentPassportUpsertInput = {
  birthDate?: InputMaybe<Scalars['DateTime']>;
  birthPlace?: InputMaybe<Scalars['String']>;
  citizenship?: InputMaybe<Scalars['String']>;
  expirationDate?: InputMaybe<Scalars['DateTime']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<GGenderEnum>;
  issueDate?: InputMaybe<Scalars['DateTime']>;
  issuedBy?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  patronymic?: InputMaybe<Scalars['String']>;
  series?: InputMaybe<Scalars['String']>;
};

export type GStudentPassportWithoutStudentEntity = {
  /** Дата рождения */
  birthDate?: Maybe<Scalars['DateTime']>;
  /** Место рождения */
  birthPlace?: Maybe<Scalars['String']>;
  /** Гражданство */
  citizenship?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  /** Дата истечения */
  expirationDate?: Maybe<Scalars['DateTime']>;
  /** Имя */
  firstName?: Maybe<Scalars['String']>;
  /** Пол */
  gender?: Maybe<GGenderEnum>;
  id: Scalars['UUID'];
  /** Дата выдачи */
  issueDate?: Maybe<Scalars['DateTime']>;
  /** Кем выдан */
  issuedBy?: Maybe<Scalars['String']>;
  /** Фамилия */
  lastName?: Maybe<Scalars['String']>;
  /** Номер */
  number?: Maybe<Scalars['String']>;
  /** Отчество */
  patronymic?: Maybe<Scalars['String']>;
  /** Серия */
  series?: Maybe<Scalars['String']>;
  studentId: Scalars['UUID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentUpdateInput = {
  course?: InputMaybe<Scalars['Int']>;
  curator?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['EmailAddress']>;
  faculty?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  /** Идентификатор пользователя */
  id: Scalars['UUID'];
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  patronymic?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** Виза студента */
export type GStudentVisaEntity = {
  /** Серия бланка */
  blankSeries?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  /** Дата истечения */
  expirationDate?: Maybe<Scalars['DateTime']>;
  /** Идентификатор визы */
  id: Scalars['ID'];
  /** Номер приглашения */
  invitationNumber?: Maybe<Scalars['String']>;
  /** Дата выдачи */
  issueDate?: Maybe<Scalars['DateTime']>;
  /** Номер */
  number?: Maybe<Scalars['String']>;
  student: GStudentEntity;
  studentId: Scalars['UUID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentVisaEntityCountAggregate = {
  _all: Scalars['Int'];
  blankSeries: Scalars['Int'];
  createdAt: Scalars['Int'];
  expirationDate: Scalars['Int'];
  id: Scalars['Int'];
  invitationNumber: Scalars['Int'];
  issueDate: Scalars['Int'];
  number: Scalars['Int'];
  studentId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GStudentVisaEntityMaxAggregate = {
  blankSeries?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  invitationNumber?: Maybe<Scalars['String']>;
  issueDate?: Maybe<Scalars['DateTime']>;
  number?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentVisaEntityMinAggregate = {
  blankSeries?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  invitationNumber?: Maybe<Scalars['String']>;
  issueDate?: Maybe<Scalars['DateTime']>;
  number?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Визовая анкета студента */
export type GStudentVisaRequestEntity = {
  /** Адрес в стране постоянного проживания */
  addressInCountryOfContinuousResidence?: Maybe<Scalars['String']>;
  /** Адрес постановки на миграционный учет */
  addressOfMigrationRegistration?: Maybe<Scalars['String']>;
  /** Прилагаемые документы */
  attachedDocuments?: Maybe<Scalars['String']>;
  /** Категория визы */
  category?: Maybe<GVisaCategoryEnum>;
  createdAt: Scalars['DateTime'];
  /** Комментарий сотрудника */
  employeeComment?: Maybe<Scalars['String']>;
  /** Маршрут предполагаемого пребывания */
  estimatedRouteOfStay?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** Кратность визы */
  multiplicity?: Maybe<GVisaMultiplicityEnum>;
  /** Место работы или учёбы, должность */
  placeOfWorkOrStudyAndEmploymentPosition?: Maybe<Scalars['String']>;
  /** В связи с ... */
  reason?: Maybe<Scalars['String']>;
  /** Регистрационный номер заполняемый только сотрудником */
  registrationNumber?: Maybe<Scalars['String']>;
  /** Родственники на территории РФ */
  russianFederationRelatives?: Maybe<Scalars['String']>;
  /** Статус визовой анкеты */
  status: GVisaRequestStatusEnum;
  student: GStudentEntity;
  studentId: Scalars['UUID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentVisaRequestEntityCountAggregate = {
  _all: Scalars['Int'];
  addressInCountryOfContinuousResidence: Scalars['Int'];
  addressOfMigrationRegistration: Scalars['Int'];
  attachedDocuments: Scalars['Int'];
  category: Scalars['Int'];
  createdAt: Scalars['Int'];
  employeeComment: Scalars['Int'];
  estimatedRouteOfStay: Scalars['Int'];
  id: Scalars['Int'];
  multiplicity: Scalars['Int'];
  placeOfWorkOrStudyAndEmploymentPosition: Scalars['Int'];
  reason: Scalars['Int'];
  registrationNumber: Scalars['Int'];
  russianFederationRelatives: Scalars['Int'];
  status: Scalars['Int'];
  studentId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GStudentVisaRequestEntityMaxAggregate = {
  addressInCountryOfContinuousResidence?: Maybe<Scalars['String']>;
  addressOfMigrationRegistration?: Maybe<Scalars['String']>;
  attachedDocuments?: Maybe<Scalars['String']>;
  category?: Maybe<GVisaCategoryEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  employeeComment?: Maybe<Scalars['String']>;
  estimatedRouteOfStay?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  multiplicity?: Maybe<GVisaMultiplicityEnum>;
  placeOfWorkOrStudyAndEmploymentPosition?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  registrationNumber?: Maybe<Scalars['String']>;
  russianFederationRelatives?: Maybe<Scalars['String']>;
  status?: Maybe<GVisaRequestStatusEnum>;
  studentId?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentVisaRequestEntityMinAggregate = {
  addressInCountryOfContinuousResidence?: Maybe<Scalars['String']>;
  addressOfMigrationRegistration?: Maybe<Scalars['String']>;
  attachedDocuments?: Maybe<Scalars['String']>;
  category?: Maybe<GVisaCategoryEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  employeeComment?: Maybe<Scalars['String']>;
  estimatedRouteOfStay?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  multiplicity?: Maybe<GVisaMultiplicityEnum>;
  placeOfWorkOrStudyAndEmploymentPosition?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  registrationNumber?: Maybe<Scalars['String']>;
  russianFederationRelatives?: Maybe<Scalars['String']>;
  status?: Maybe<GVisaRequestStatusEnum>;
  studentId?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Ответ на запрос токена */
export type GTokenResponse = {
  /** Токен доступа */
  accessToken: Scalars['String'];
  /** Время истечения токена */
  accessTokenExpires: Scalars['DateTime'];
};

export type GUserCurrentResponse = {
  /** Дата истечения токена доступа */
  accessTokenExpires: Scalars['DateTime'];
  /** Роли текущего пользователя */
  roles: Array<GUserRoleEnum>;
  /** Текущий пользователь */
  user: GUserEntity;
};

/** Пользователь */
export type GUserEntity = {
  _count: GUserEntityCount;
  createdAt: Scalars['DateTime'];
  /** Электронная почта (должна быть подтверждена) */
  email: Scalars['EmailAddress'];
  /** Если пользователь - сотрудник */
  employee?: Maybe<GEmployeeEntity>;
  /** Идентификатор пользователя */
  id: Scalars['UUID'];
  /** Последняя активность */
  lastActivity?: Maybe<Scalars['DateTime']>;
  /** Уведомления пользователя */
  notifications?: Maybe<Array<GNotificationToUserEntity>>;
  /** Если пользователь - студент */
  student?: Maybe<GStudentEntity>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GUserEntityCount = {
  notifications: Scalars['Int'];
};

export type GUserEntityCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  lastActivity: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GUserEntityMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['EmailAddress']>;
  id?: Maybe<Scalars['UUID']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GUserEntityMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['EmailAddress']>;
  id?: Maybe<Scalars['UUID']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Роли пользователя */
export enum GUserRoleEnum {
  Admin = 'Admin',
  Any = 'Any',
  Employee = 'Employee',
  Student = 'Student'
}

/** Требуемая категория визы в визовой анкете */
export enum GVisaCategoryEnum {
  RegularBusiness = 'RegularBusiness',
  RegularGroupTravel = 'RegularGroupTravel',
  RegularHumanitarian = 'RegularHumanitarian',
  RegularNationalEntry = 'RegularNationalEntry',
  RegularPrivate = 'RegularPrivate',
  RegularStudy = 'RegularStudy',
  RegularTourist = 'RegularTourist',
  RegularWorking = 'RegularWorking',
  TemporaryResident = 'TemporaryResident',
  Transit = 'Transit'
}

/** Требуемая кратность визы в визовой анкете */
export enum GVisaMultiplicityEnum {
  Double = 'Double',
  Multiple = 'Multiple',
  Single = 'Single'
}

/** Статус анкеты на визу */
export enum GVisaRequestStatusEnum {
  Finished = 'Finished',
  Pending = 'Pending',
  PendingCorrectionsByStudent = 'PendingCorrectionsByStudent',
  Verified = 'Verified'
}

export type GLoginByPasswordMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
}>;


export type GLoginByPasswordMutation = { loginByPassword: { accessToken: string, accessTokenExpires: Dayjs } };

export type GRefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type GRefreshTokensMutation = { refreshTokens: { accessToken: string, accessTokenExpires: Dayjs } };

export type GUserCurrentQueryVariables = Exact<{ [key: string]: never; }>;


export type GUserCurrentQuery = { userCurrent: { roles: Array<GUserRoleEnum>, accessTokenExpires: Dayjs, user: { id: string, email: string, lastActivity?: Dayjs | null, createdAt: Dayjs, updatedAt?: Dayjs | null, employee?: { id: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, isAdmin: boolean, createdAt: Dayjs, updatedAt?: Dayjs | null } | null, student?: { id: string, phone?: string | null, curator?: string | null, faculty?: string | null, course?: number | null, group?: string | null, createdAt: Dayjs, updatedAt?: Dayjs | null, arrivalNotice?: { id: string, studentId: string, profession?: string | null, address?: string | null, date?: Dayjs | null, expires?: Dayjs | null, invitingSide?: string | null, receivingSide?: string | null, createdAt: Dayjs, updatedAt?: Dayjs | null } | null, migrationCard?: { id: string, studentId: string, series?: string | null, number?: string | null, issueDate?: Dayjs | null, expirationDate?: Dayjs | null, createdAt: Dayjs, updatedAt?: Dayjs | null } | null, visa?: { id: string, studentId: string, blankSeries?: string | null, number?: string | null, issueDate?: Dayjs | null, expirationDate?: Dayjs | null, invitationNumber?: string | null, createdAt: Dayjs, updatedAt?: Dayjs | null } | null, passport?: { id: string, studentId: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, birthDate?: Dayjs | null, birthPlace?: string | null, gender?: GGenderEnum | null, citizenship?: string | null, series?: string | null, number?: string | null, issueDate?: Dayjs | null, issuedBy?: string | null, expirationDate?: Dayjs | null, createdAt: Dayjs, updatedAt?: Dayjs | null } | null, closeRelatives?: Array<{ id: string, studentId: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, birthDate?: Dayjs | null, citizenship?: string | null, addressContinuousResidence?: string | null, createdAt: Dayjs, updatedAt?: Dayjs | null }> | null, visaRequests?: Array<{ id: string, studentId: string, status: GVisaRequestStatusEnum, employeeComment?: string | null, registrationNumber?: string | null, category?: GVisaCategoryEnum | null, multiplicity?: GVisaMultiplicityEnum | null, reason?: string | null, addressOfMigrationRegistration?: string | null, estimatedRouteOfStay?: string | null, addressInCountryOfContinuousResidence?: string | null, placeOfWorkOrStudyAndEmploymentPosition?: string | null, russianFederationRelatives?: string | null, attachedDocuments?: string | null, createdAt: Dayjs, updatedAt?: Dayjs | null }> | null } | null, notifications?: Array<{ notificationId: string, userId: string, isRead: boolean, createdAt: Dayjs, updatedAt?: Dayjs | null, notification: { id: string, title: string, content: string, createdAt: Dayjs, updatedAt?: Dayjs | null } }> | null } } };

export type GEmailAvailabilityQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GEmailAvailabilityQuery = { emailAvailability: { verdict: GEmailAvailabilityVerdictEnum, message: string } };

export type GEmailConfirmByCodeMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
  code: Scalars['String'];
}>;


export type GEmailConfirmByCodeMutation = { emailConfirmByCode: boolean };

export type GSendConfirmationCodeMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
}>;


export type GSendConfirmationCodeMutation = { sendConfirmationCode: Dayjs };

export type GRegistrationMutationVariables = Exact<{
  input: GStudentCreateInput;
}>;


export type GRegistrationMutation = { registration: boolean };

export type GStudentPassportQueryVariables = Exact<{
  studentId?: InputMaybe<Scalars['UUID']>;
}>;


export type GStudentPassportQuery = { studentPassport?: { id: string, studentId: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, birthDate?: Dayjs | null, birthPlace?: string | null, gender?: GGenderEnum | null, citizenship?: string | null, series?: string | null, number?: string | null, issueDate?: Dayjs | null, issuedBy?: string | null, expirationDate?: Dayjs | null, createdAt: Dayjs, updatedAt?: Dayjs | null } | null };

export type GStudentPassportDeleteMutationVariables = Exact<{
  studentId: Scalars['UUID'];
}>;


export type GStudentPassportDeleteMutation = { studentPassportDelete: { id: string, studentId: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, birthDate?: Dayjs | null, birthPlace?: string | null, gender?: GGenderEnum | null, citizenship?: string | null, series?: string | null, number?: string | null, issueDate?: Dayjs | null, issuedBy?: string | null, expirationDate?: Dayjs | null, createdAt: Dayjs, updatedAt?: Dayjs | null } };

export type GStudentPassportUpsertMutationVariables = Exact<{
  data: GStudentPassportUpsertInput;
  studentId?: InputMaybe<Scalars['UUID']>;
}>;


export type GStudentPassportUpsertMutation = { studentPassportUpsert: { id: string, studentId: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, birthDate?: Dayjs | null, birthPlace?: string | null, gender?: GGenderEnum | null, citizenship?: string | null, series?: string | null, number?: string | null, issueDate?: Dayjs | null, issuedBy?: string | null, expirationDate?: Dayjs | null, createdAt: Dayjs, updatedAt?: Dayjs | null } };


export const LoginByPasswordDocument = gql`
    mutation LoginByPassword($email: EmailAddress!, $password: String!) {
  loginByPassword(email: $email, password: $password) {
    accessToken
    accessTokenExpires
  }
}
    `;
export type GLoginByPasswordMutationFn = Apollo.MutationFunction<GLoginByPasswordMutation, GLoginByPasswordMutationVariables>;

/**
 * __useLoginByPasswordMutation__
 *
 * To run a mutation, you first call `useLoginByPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginByPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginByPasswordMutation, { data, loading, error }] = useLoginByPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginByPasswordMutation(baseOptions?: Apollo.MutationHookOptions<GLoginByPasswordMutation, GLoginByPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GLoginByPasswordMutation, GLoginByPasswordMutationVariables>(LoginByPasswordDocument, options);
      }
export type LoginByPasswordMutationHookResult = ReturnType<typeof useLoginByPasswordMutation>;
export type LoginByPasswordMutationResult = Apollo.MutationResult<GLoginByPasswordMutation>;
export type LoginByPasswordMutationOptions = Apollo.BaseMutationOptions<GLoginByPasswordMutation, GLoginByPasswordMutationVariables>;
export const RefreshTokensDocument = gql`
    mutation RefreshTokens {
  refreshTokens {
    accessToken
    accessTokenExpires
  }
}
    `;
export type GRefreshTokensMutationFn = Apollo.MutationFunction<GRefreshTokensMutation, GRefreshTokensMutationVariables>;

/**
 * __useRefreshTokensMutation__
 *
 * To run a mutation, you first call `useRefreshTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokensMutation, { data, loading, error }] = useRefreshTokensMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokensMutation(baseOptions?: Apollo.MutationHookOptions<GRefreshTokensMutation, GRefreshTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GRefreshTokensMutation, GRefreshTokensMutationVariables>(RefreshTokensDocument, options);
      }
export type RefreshTokensMutationHookResult = ReturnType<typeof useRefreshTokensMutation>;
export type RefreshTokensMutationResult = Apollo.MutationResult<GRefreshTokensMutation>;
export type RefreshTokensMutationOptions = Apollo.BaseMutationOptions<GRefreshTokensMutation, GRefreshTokensMutationVariables>;
export const UserCurrentDocument = gql`
    query UserCurrent {
  userCurrent {
    roles
    accessTokenExpires
    user {
      id
      email
      lastActivity
      createdAt
      updatedAt
      employee {
        id
        lastName
        firstName
        patronymic
        isAdmin
        createdAt
        updatedAt
      }
      student {
        id
        phone
        curator
        faculty
        course
        group
        createdAt
        updatedAt
        arrivalNotice {
          id
          studentId
          profession
          address
          date
          expires
          invitingSide
          receivingSide
          createdAt
          updatedAt
        }
        migrationCard {
          id
          studentId
          series
          number
          issueDate
          expirationDate
          createdAt
          updatedAt
        }
        visa {
          id
          studentId
          blankSeries
          number
          issueDate
          expirationDate
          invitationNumber
          createdAt
          updatedAt
        }
        passport {
          id
          studentId
          lastName
          firstName
          patronymic
          birthDate
          birthPlace
          gender
          citizenship
          series
          number
          issueDate
          issuedBy
          expirationDate
          createdAt
          updatedAt
        }
        closeRelatives {
          id
          studentId
          lastName
          firstName
          patronymic
          birthDate
          citizenship
          addressContinuousResidence
          createdAt
          updatedAt
        }
        visaRequests {
          id
          studentId
          status
          employeeComment
          registrationNumber
          category
          multiplicity
          reason
          addressOfMigrationRegistration
          estimatedRouteOfStay
          addressInCountryOfContinuousResidence
          placeOfWorkOrStudyAndEmploymentPosition
          russianFederationRelatives
          attachedDocuments
          createdAt
          updatedAt
        }
      }
      notifications {
        notificationId
        userId
        isRead
        createdAt
        updatedAt
        notification {
          id
          title
          content
          createdAt
          updatedAt
        }
      }
    }
  }
}
    `;

/**
 * __useUserCurrentQuery__
 *
 * To run a query within a React component, call `useUserCurrentQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCurrentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCurrentQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserCurrentQuery(baseOptions?: Apollo.QueryHookOptions<GUserCurrentQuery, GUserCurrentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GUserCurrentQuery, GUserCurrentQueryVariables>(UserCurrentDocument, options);
      }
export function useUserCurrentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GUserCurrentQuery, GUserCurrentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GUserCurrentQuery, GUserCurrentQueryVariables>(UserCurrentDocument, options);
        }
export type UserCurrentQueryHookResult = ReturnType<typeof useUserCurrentQuery>;
export type UserCurrentLazyQueryHookResult = ReturnType<typeof useUserCurrentLazyQuery>;
export type UserCurrentQueryResult = Apollo.QueryResult<GUserCurrentQuery, GUserCurrentQueryVariables>;
export function refetchUserCurrentQuery(variables?: GUserCurrentQueryVariables) {
      return { query: UserCurrentDocument, variables: variables }
    }
export const EmailAvailabilityDocument = gql`
    query EmailAvailability($email: String!) {
  emailAvailability(email: $email) {
    verdict
    message
  }
}
    `;

/**
 * __useEmailAvailabilityQuery__
 *
 * To run a query within a React component, call `useEmailAvailabilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailAvailabilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailAvailabilityQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useEmailAvailabilityQuery(baseOptions: Apollo.QueryHookOptions<GEmailAvailabilityQuery, GEmailAvailabilityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GEmailAvailabilityQuery, GEmailAvailabilityQueryVariables>(EmailAvailabilityDocument, options);
      }
export function useEmailAvailabilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GEmailAvailabilityQuery, GEmailAvailabilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GEmailAvailabilityQuery, GEmailAvailabilityQueryVariables>(EmailAvailabilityDocument, options);
        }
export type EmailAvailabilityQueryHookResult = ReturnType<typeof useEmailAvailabilityQuery>;
export type EmailAvailabilityLazyQueryHookResult = ReturnType<typeof useEmailAvailabilityLazyQuery>;
export type EmailAvailabilityQueryResult = Apollo.QueryResult<GEmailAvailabilityQuery, GEmailAvailabilityQueryVariables>;
export function refetchEmailAvailabilityQuery(variables: GEmailAvailabilityQueryVariables) {
      return { query: EmailAvailabilityDocument, variables: variables }
    }
export const EmailConfirmByCodeDocument = gql`
    mutation EmailConfirmByCode($email: EmailAddress!, $code: String!) {
  emailConfirmByCode(email: $email, code: $code)
}
    `;
export type GEmailConfirmByCodeMutationFn = Apollo.MutationFunction<GEmailConfirmByCodeMutation, GEmailConfirmByCodeMutationVariables>;

/**
 * __useEmailConfirmByCodeMutation__
 *
 * To run a mutation, you first call `useEmailConfirmByCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEmailConfirmByCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [emailConfirmByCodeMutation, { data, loading, error }] = useEmailConfirmByCodeMutation({
 *   variables: {
 *      email: // value for 'email'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useEmailConfirmByCodeMutation(baseOptions?: Apollo.MutationHookOptions<GEmailConfirmByCodeMutation, GEmailConfirmByCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GEmailConfirmByCodeMutation, GEmailConfirmByCodeMutationVariables>(EmailConfirmByCodeDocument, options);
      }
export type EmailConfirmByCodeMutationHookResult = ReturnType<typeof useEmailConfirmByCodeMutation>;
export type EmailConfirmByCodeMutationResult = Apollo.MutationResult<GEmailConfirmByCodeMutation>;
export type EmailConfirmByCodeMutationOptions = Apollo.BaseMutationOptions<GEmailConfirmByCodeMutation, GEmailConfirmByCodeMutationVariables>;
export const SendConfirmationCodeDocument = gql`
    mutation SendConfirmationCode($email: EmailAddress!) {
  sendConfirmationCode(email: $email)
}
    `;
export type GSendConfirmationCodeMutationFn = Apollo.MutationFunction<GSendConfirmationCodeMutation, GSendConfirmationCodeMutationVariables>;

/**
 * __useSendConfirmationCodeMutation__
 *
 * To run a mutation, you first call `useSendConfirmationCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendConfirmationCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendConfirmationCodeMutation, { data, loading, error }] = useSendConfirmationCodeMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendConfirmationCodeMutation(baseOptions?: Apollo.MutationHookOptions<GSendConfirmationCodeMutation, GSendConfirmationCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GSendConfirmationCodeMutation, GSendConfirmationCodeMutationVariables>(SendConfirmationCodeDocument, options);
      }
export type SendConfirmationCodeMutationHookResult = ReturnType<typeof useSendConfirmationCodeMutation>;
export type SendConfirmationCodeMutationResult = Apollo.MutationResult<GSendConfirmationCodeMutation>;
export type SendConfirmationCodeMutationOptions = Apollo.BaseMutationOptions<GSendConfirmationCodeMutation, GSendConfirmationCodeMutationVariables>;
export const RegistrationDocument = gql`
    mutation Registration($input: StudentCreateInput!) {
  registration(input: $input)
}
    `;
export type GRegistrationMutationFn = Apollo.MutationFunction<GRegistrationMutation, GRegistrationMutationVariables>;

/**
 * __useRegistrationMutation__
 *
 * To run a mutation, you first call `useRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registrationMutation, { data, loading, error }] = useRegistrationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<GRegistrationMutation, GRegistrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GRegistrationMutation, GRegistrationMutationVariables>(RegistrationDocument, options);
      }
export type RegistrationMutationHookResult = ReturnType<typeof useRegistrationMutation>;
export type RegistrationMutationResult = Apollo.MutationResult<GRegistrationMutation>;
export type RegistrationMutationOptions = Apollo.BaseMutationOptions<GRegistrationMutation, GRegistrationMutationVariables>;
export const StudentPassportDocument = gql`
    query StudentPassport($studentId: UUID) {
  studentPassport(studentId: $studentId) {
    id
    studentId
    lastName
    firstName
    patronymic
    birthDate
    birthPlace
    gender
    citizenship
    series
    number
    issueDate
    issuedBy
    expirationDate
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useStudentPassportQuery__
 *
 * To run a query within a React component, call `useStudentPassportQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentPassportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentPassportQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentPassportQuery(baseOptions?: Apollo.QueryHookOptions<GStudentPassportQuery, GStudentPassportQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GStudentPassportQuery, GStudentPassportQueryVariables>(StudentPassportDocument, options);
      }
export function useStudentPassportLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GStudentPassportQuery, GStudentPassportQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GStudentPassportQuery, GStudentPassportQueryVariables>(StudentPassportDocument, options);
        }
export type StudentPassportQueryHookResult = ReturnType<typeof useStudentPassportQuery>;
export type StudentPassportLazyQueryHookResult = ReturnType<typeof useStudentPassportLazyQuery>;
export type StudentPassportQueryResult = Apollo.QueryResult<GStudentPassportQuery, GStudentPassportQueryVariables>;
export function refetchStudentPassportQuery(variables?: GStudentPassportQueryVariables) {
      return { query: StudentPassportDocument, variables: variables }
    }
export const StudentPassportDeleteDocument = gql`
    mutation StudentPassportDelete($studentId: UUID!) {
  studentPassportDelete(studentId: $studentId) {
    id
    studentId
    lastName
    firstName
    patronymic
    birthDate
    birthPlace
    gender
    citizenship
    series
    number
    issueDate
    issuedBy
    expirationDate
    createdAt
    updatedAt
  }
}
    `;
export type GStudentPassportDeleteMutationFn = Apollo.MutationFunction<GStudentPassportDeleteMutation, GStudentPassportDeleteMutationVariables>;

/**
 * __useStudentPassportDeleteMutation__
 *
 * To run a mutation, you first call `useStudentPassportDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentPassportDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentPassportDeleteMutation, { data, loading, error }] = useStudentPassportDeleteMutation({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentPassportDeleteMutation(baseOptions?: Apollo.MutationHookOptions<GStudentPassportDeleteMutation, GStudentPassportDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GStudentPassportDeleteMutation, GStudentPassportDeleteMutationVariables>(StudentPassportDeleteDocument, options);
      }
export type StudentPassportDeleteMutationHookResult = ReturnType<typeof useStudentPassportDeleteMutation>;
export type StudentPassportDeleteMutationResult = Apollo.MutationResult<GStudentPassportDeleteMutation>;
export type StudentPassportDeleteMutationOptions = Apollo.BaseMutationOptions<GStudentPassportDeleteMutation, GStudentPassportDeleteMutationVariables>;
export const StudentPassportUpsertDocument = gql`
    mutation StudentPassportUpsert($data: StudentPassportUpsertInput!, $studentId: UUID) {
  studentPassportUpsert(data: $data, studentId: $studentId) {
    id
    studentId
    lastName
    firstName
    patronymic
    birthDate
    birthPlace
    gender
    citizenship
    series
    number
    issueDate
    issuedBy
    expirationDate
    createdAt
    updatedAt
  }
}
    `;
export type GStudentPassportUpsertMutationFn = Apollo.MutationFunction<GStudentPassportUpsertMutation, GStudentPassportUpsertMutationVariables>;

/**
 * __useStudentPassportUpsertMutation__
 *
 * To run a mutation, you first call `useStudentPassportUpsertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentPassportUpsertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentPassportUpsertMutation, { data, loading, error }] = useStudentPassportUpsertMutation({
 *   variables: {
 *      data: // value for 'data'
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentPassportUpsertMutation(baseOptions?: Apollo.MutationHookOptions<GStudentPassportUpsertMutation, GStudentPassportUpsertMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GStudentPassportUpsertMutation, GStudentPassportUpsertMutationVariables>(StudentPassportUpsertDocument, options);
      }
export type StudentPassportUpsertMutationHookResult = ReturnType<typeof useStudentPassportUpsertMutation>;
export type StudentPassportUpsertMutationResult = Apollo.MutationResult<GStudentPassportUpsertMutation>;
export type StudentPassportUpsertMutationOptions = Apollo.BaseMutationOptions<GStudentPassportUpsertMutation, GStudentPassportUpsertMutationVariables>;