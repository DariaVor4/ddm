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
  DateTime: string;
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
  email: Scalars['String'];
  /** Имя */
  firstName: InputMaybe<Scalars['String']>;
  /** Является ли админом? */
  isAdmin: Scalars['Boolean'];
  /** Фамилия */
  lastName: InputMaybe<Scalars['String']>;
  /** Отчество */
  patronymic: InputMaybe<Scalars['String']>;
};

/** Сотрудник */
export type GEmployeeEntity = {
  createdAt: Scalars['DateTime'];
  /** Имя */
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
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
  id?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GEmployeeEntityMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GEmployeeUpdateInput = {
  /** Электронная почта (должна быть подтверждена) */
  email: InputMaybe<Scalars['String']>;
  /** Имя */
  firstName: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Является ли админом? */
  isAdmin: InputMaybe<Scalars['Boolean']>;
  /** Фамилия */
  lastName: InputMaybe<Scalars['String']>;
  /** Отчество */
  patronymic: InputMaybe<Scalars['String']>;
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
  /** Вход по почте и паролю, возвращает accessToken */
  loginByPassword: Scalars['String'];
  /** Обновление пары токенов для авторизованного пользователя, возвращает новый accessToken */
  refreshTokens: Scalars['String'];
  /** Регистрация студента. Сначала необходимо подтвердить почту. */
  registration: Scalars['Boolean'];
  /** Отправка кода подтверждения почты. Устанавливает RegistrationToken в cookies. Возвращает время до которого необходимо завершить регистрацию. */
  sendConfirmationCode: Scalars['DateTime'];
  /** Создание/регистрация студента. */
  studentCreate: GStudentEntity;
  /** Обновление студента. */
  studentUpdate: GStudentEntity;
  /** Обновление сотрудника */
  updateEmployee: GEmployeeEntity;
};


export type GMutationCreateEmployeeArgs = {
  input: GEmployeeCreateInput;
};


export type GMutationDeleteEmployeeArgs = {
  id: Scalars['String'];
};


export type GMutationEmailConfirmByCodeArgs = {
  code: Scalars['String'];
  email: Scalars['String'];
};


export type GMutationLoginByPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type GMutationRegistrationArgs = {
  input: GStudentCreateInput;
};


export type GMutationSendConfirmationCodeArgs = {
  email: Scalars['String'];
};


export type GMutationStudentCreateArgs = {
  input: GStudentCreateInput;
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
  id: Scalars['ID'];
  /** Заголовок */
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Получатели */
  users?: Maybe<Array<GNotificationToUserEntity>>;
};

export type GNotificationEntityCount = {
  users: Scalars['Int'];
};

/** Уведомления для пользователей */
export type GNotificationToUserEntity = {
  createdAt: Scalars['DateTime'];
  /** Прочитано ли уведомление? */
  isRead: Scalars['Boolean'];
  notification: GNotificationEntity;
  notificationId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: GUserEntity;
  userId: Scalars['String'];
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
  /** Получение списка студентов. */
  students: Array<GStudentEntity>;
  /** Получить текущего пользователя */
  userCurrent: GUserCurrentResponse;
};


export type GQueryEmailAvailabilityArgs = {
  email: Scalars['String'];
};


export type GQueryStudentArgs = {
  id: Scalars['String'];
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
  id: Scalars['ID'];
  /** Приглашающая сторона */
  invitingSide?: Maybe<Scalars['String']>;
  /** Профессия */
  profession?: Maybe<Scalars['String']>;
  /** Принимающая сторона */
  receivingSide?: Maybe<Scalars['String']>;
  student: GStudentEntity;
  studentId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Близкие родственники студента */
export type GStudentCloseRelativeEntity = {
  /** Постоянное место жительства */
  addressContinuosResidence?: Maybe<Scalars['String']>;
  /** Дата рождения */
  birthDate?: Maybe<Scalars['DateTime']>;
  /** Гражданство */
  citizenship?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  /** Имя */
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Фамилия */
  lastName?: Maybe<Scalars['String']>;
  /** Отчество */
  patronymic?: Maybe<Scalars['String']>;
  student: GStudentEntity;
  studentId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentCreateInput = {
  /** Курс */
  course: InputMaybe<Scalars['Int']>;
  /** Куратор */
  curator: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  /** Факультет */
  faculty: InputMaybe<Scalars['String']>;
  /** Имя */
  firstName: InputMaybe<Scalars['String']>;
  /** Группа */
  group: InputMaybe<Scalars['String']>;
  /** Фамилия */
  lastName: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  /** Отчество */
  patronymic: InputMaybe<Scalars['String']>;
  /** Телефон */
  phone: InputMaybe<Scalars['String']>;
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
  id: Scalars['ID'];
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
  id?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentEntityMinAggregate = {
  course?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  curator?: Maybe<Scalars['String']>;
  faculty?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
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
  id: Scalars['ID'];
  /** Дата выдачи */
  issueDate?: Maybe<Scalars['DateTime']>;
  /** Номер */
  number?: Maybe<Scalars['String']>;
  /** Серия */
  series?: Maybe<Scalars['String']>;
  student: GStudentEntity;
  studentId: Scalars['String'];
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
  id: Scalars['ID'];
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
  studentId: Scalars['String'];
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
  id?: Maybe<Scalars['String']>;
  issueDate?: Maybe<Scalars['DateTime']>;
  issuedBy?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  series?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['String']>;
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
  id?: Maybe<Scalars['String']>;
  issueDate?: Maybe<Scalars['DateTime']>;
  issuedBy?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  series?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GStudentUpdateInput = {
  /** Курс */
  course: InputMaybe<Scalars['Int']>;
  /** Куратор */
  curator: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  /** Факультет */
  faculty: InputMaybe<Scalars['String']>;
  /** Имя */
  firstName: InputMaybe<Scalars['String']>;
  /** Группа */
  group: InputMaybe<Scalars['String']>;
  /** Идентификатор пользователя */
  id: Scalars['ID'];
  /** Фамилия */
  lastName: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  /** Отчество */
  patronymic: InputMaybe<Scalars['String']>;
  /** Телефон */
  phone: InputMaybe<Scalars['String']>;
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
  studentId: Scalars['String'];
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
  id: Scalars['ID'];
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
  studentId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  email: Scalars['String'];
  /** Если пользователь - сотрудник */
  employee?: Maybe<GEmployeeEntity>;
  /** Идентификатор пользователя */
  id: Scalars['ID'];
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
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastActivity?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GUserEntityMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
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

export type GEmailAvailabilityQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GEmailAvailabilityQuery = { emailAvailability: { verdict: GEmailAvailabilityVerdictEnum, message: string } };

export type GEmailConfirmByCodeMutationVariables = Exact<{
  email: Scalars['String'];
  code: Scalars['String'];
}>;


export type GEmailConfirmByCodeMutation = { emailConfirmByCode: boolean };

export type GLoginByPasswordMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type GLoginByPasswordMutation = { loginByPassword: string };

export type GRegistrationMutationVariables = Exact<{
  input: GStudentCreateInput;
}>;


export type GRegistrationMutation = { registration: boolean };

export type GSendConfirmationCodeMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type GSendConfirmationCodeMutation = { sendConfirmationCode: string };

export type GUserCurrentQueryVariables = Exact<{ [key: string]: never; }>;


export type GUserCurrentQuery = { userCurrent: { roles: Array<GUserRoleEnum>, accessTokenExpires: string, user: { id: string, email: string, lastActivity?: string | null, createdAt: string, updatedAt?: string | null, employee?: { id: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, isAdmin: boolean, createdAt: string, updatedAt?: string | null, user: { id: string, email: string, lastActivity?: string | null, createdAt: string, updatedAt?: string | null } } | null, student?: { id: string, phone?: string | null, curator?: string | null, faculty?: string | null, course?: number | null, group?: string | null, createdAt: string, updatedAt?: string | null, passport?: { id: string, studentId: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, birthDate?: string | null, birthPlace?: string | null, gender?: GGenderEnum | null, citizenship?: string | null, series?: string | null, number?: string | null, issueDate?: string | null, issuedBy?: string | null, expirationDate?: string | null, createdAt: string, updatedAt?: string | null } | null } | null } } };


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
export const EmailConfirmByCodeDocument = gql`
    mutation EmailConfirmByCode($email: String!, $code: String!) {
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
export const LoginByPasswordDocument = gql`
    mutation LoginByPassword($email: String!, $password: String!) {
  loginByPassword(email: $email, password: $password)
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
export const SendConfirmationCodeDocument = gql`
    mutation SendConfirmationCode($email: String!) {
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
        user {
          id
          email
          lastActivity
          createdAt
          updatedAt
        }
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