import { Dayjs } from 'dayjs';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: Dayjs; output: Dayjs; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: string; output: string; }
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: { input: string; output: string; }
};

/** Входные данные для подключения или отключения бота для аккаунта */
export type GBotConnectionInput = {
  /** Тип бота */
  botType: GBotEnum;
  /** Идентификатор пользователя */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** Перечисление ботов приложения. */
export enum GBotEnum {
  Telegram = 'Telegram',
  Vk = 'Vk'
}

export type GConfirmationEmailEntityCountAggregate = {
  _all: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isConfirmed: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type GConfirmationEmailEntityMaxAggregate = {
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  isConfirmed?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GConfirmationEmailEntityMinAggregate = {
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  isConfirmed?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GConfirmationPhoneEntityCountAggregate = {
  _all: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isConfirmed: Scalars['Int']['output'];
  phone: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type GConfirmationPhoneEntityMaxAggregate = {
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  isConfirmed?: Maybe<Scalars['Boolean']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GConfirmationPhoneEntityMinAggregate = {
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  isConfirmed?: Maybe<Scalars['Boolean']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GEmailAvailabilityResponse = {
  message: Scalars['String']['output'];
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
  email: Scalars['EmailAddress']['input'];
  /** Имя */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Является ли админом? */
  isAdmin?: Scalars['Boolean']['input'];
  /** Фамилия */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Отчество */
  patronymic?: InputMaybe<Scalars['String']['input']>;
};

/** Сотрудник */
export type GEmployeeEntity = {
  createdAt: Scalars['DateTime']['output'];
  /** Имя */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Полное имя */
  fullName: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  /** Инициалы */
  initials: Scalars['String']['output'];
  /** Является ли админом? */
  isAdmin: Scalars['Boolean']['output'];
  /** Фамилия */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Отчество */
  patronymic?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: GUserEntity;
};

export type GEmployeeEntityCountAggregate = {
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  firstName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isAdmin: Scalars['Int']['output'];
  lastName: Scalars['Int']['output'];
  patronymic: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type GEmployeeEntityMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GEmployeeEntityMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GEmployeeUpdateInput = {
  /** Электронная почта (должна быть подтверждена) */
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  /** Имя */
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** Является ли админом? */
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  /** Фамилия */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Отчество */
  patronymic?: InputMaybe<Scalars['String']['input']>;
};

export type GEmployeeUpsertInput = {
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
};

/** Файловое хранилище */
export type GFileEntity = {
  createdAt: Scalars['DateTime']['output'];
  /** Время удаления, если файл должен самоуничтожиться */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Описание */
  description?: Maybe<Scalars['String']['output']>;
  /** Локальная директория внутри хранилища на диске */
  dir?: Maybe<Scalars['String']['output']>;
  /** Расширение */
  ext?: Maybe<Scalars['String']['output']>;
  /** Имя файла внутри хранилища */
  id: Scalars['UUID']['output'];
  /** Оригинальное имя */
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  /** Пользователь, создавший файл */
  user?: Maybe<GUserEntity>;
  /** Пользователь, создавший файл */
  userId?: Maybe<Scalars['UUID']['output']>;
};

export type GFileEntityCountAggregate = {
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  dir: Scalars['Int']['output'];
  ext: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type GFileEntityMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dir?: Maybe<Scalars['String']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['UUID']['output']>;
};

export type GFileEntityMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dir?: Maybe<Scalars['String']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['UUID']['output']>;
};

export type GFileEntityResponse = {
  createdAt: Scalars['DateTime']['output'];
  /** Время удаления, если файл должен самоуничтожиться */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Описание */
  description?: Maybe<Scalars['String']['output']>;
  /** Локальная директория внутри хранилища на диске */
  dir?: Maybe<Scalars['String']['output']>;
  /** Расширение */
  ext?: Maybe<Scalars['String']['output']>;
  /** Имя файла внутри хранилища */
  id: Scalars['UUID']['output'];
  /** Оригинальное имя */
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  /** Ссылка на файл */
  url: Scalars['String']['output'];
  /** Пользователь, создавший файл */
  user?: Maybe<GUserEntity>;
  /** Пользователь, создавший файл */
  userId?: Maybe<Scalars['UUID']['output']>;
};

/** Пол */
export enum GGenderEnum {
  Female = 'Female',
  Male = 'Male'
}

export type GMutation = {
  botDisconnect: Scalars['Boolean']['output'];
  /** Создание сотрудника */
  createEmployee: GEmployeeEntity;
  /** Подтверждение электронной почты кодом. Возвращает true, если почта успешно подтверждена. */
  emailConfirmByCode: Scalars['Boolean']['output'];
  /** Перезапись сотрудника */
  employeeUpsert: GEmployeeEntity;
  /** Удаление сотрудников */
  employeesDelete: Scalars['Int']['output'];
  /** Экспорт документов */
  exportDocuments: Array<GFileEntityResponse>;
  /** Вход по почте и паролю, возвращает токен доступа и время его истечения */
  loginByPassword: GTokenResponse;
  /** Удаление уведомлений. При передаче userId и notificationId удаляются указанные уведомления у указанных пользователя. При передаче только userId удалятся ВСЕ уведомления для указанных пользователей. При передаче только notificationId указанные уведомления удалятся сразу у всех пользователей. */
  notificationsDelete: Scalars['Boolean']['output'];
  /** Рассылка уведомлений */
  notificationsSend: Scalars['Boolean']['output'];
  /** Обновление пары токенов для авторизованного пользователя */
  refreshTokens: GTokenResponse;
  /** Регистрация студента. Сначала необходимо подтвердить почту. */
  registration: Scalars['Boolean']['output'];
  /** Отправка кода подтверждения почты. Устанавливает RegistrationToken в cookies. Возвращает время до которого необходимо завершить регистрацию. */
  sendConfirmationCode: Scalars['DateTime']['output'];
  /** Удаление уведомления о прибытии студента */
  studentArrivalNoticeDelete: Scalars['Boolean']['output'];
  /** Перезапись уведомления о прибытии студента */
  studentArrivalNoticeUpsert: Scalars['Boolean']['output'];
  /** Удалить близкого родственника студента. */
  studentCloseRelativeDelete: Scalars['Int']['output'];
  /** Перезапись близкого родственника студента. */
  studentCloseRelativeUpsert: Scalars['Boolean']['output'];
  /** Создание/регистрация студента. */
  studentCreate: GStudentEntity;
  /** Удаление миграционной карты студента */
  studentMigrationCardDelete: Scalars['Boolean']['output'];
  /** Перезапись миграционной карты студента */
  studentMigrationCardUpsert: Scalars['Boolean']['output'];
  /** Удаление паспорта студента. Студент не может удалить свой паспорт. */
  studentPassportDelete: Scalars['Boolean']['output'];
  /** Перезапись паспорта студента. */
  studentPassportUpsert: Scalars['Boolean']['output'];
  /** Обновление студента. */
  studentUpdate: GStudentEntity;
  /** Перезапись студента. */
  studentUpsert: Scalars['Boolean']['output'];
  /** Удаление визы студента */
  studentVisaDelete: Scalars['Boolean']['output'];
  /** Перезапись визы студента */
  studentVisaUpsert: Scalars['Boolean']['output'];
  /** Удаление студентов. */
  studentsDelete: Scalars['Int']['output'];
  /** Перезапись сотрудника */
  updateEmployee: Scalars['Boolean']['output'];
  /** Удаление визовых анкет */
  visaRequestDelete: GStudentVisaRequestEntity;
  /** Перезапись визовой анкеты */
  visaRequestUpsert: GStudentVisaRequestEntity;
};


export type GMutationBotDisconnectArgs = {
  input: GBotConnectionInput;
};


export type GMutationCreateEmployeeArgs = {
  input: GEmployeeCreateInput;
};


export type GMutationEmailConfirmByCodeArgs = {
  code: Scalars['String']['input'];
  email: Scalars['EmailAddress']['input'];
};


export type GMutationEmployeeUpsertArgs = {
  employeeId?: InputMaybe<Scalars['UUID']['input']>;
  input: GEmployeeUpsertInput;
};


export type GMutationEmployeesDeleteArgs = {
  employeeIds: Array<Scalars['UUID']['input']>;
};


export type GMutationExportDocumentsArgs = {
  studentId?: InputMaybe<Scalars['UUID']['input']>;
  visaRequestId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GMutationLoginByPasswordArgs = {
  email: Scalars['EmailAddress']['input'];
  password: Scalars['String']['input'];
};


export type GMutationNotificationsDeleteArgs = {
  notificationIds?: InputMaybe<Array<Scalars['UUID']['input']>>;
  userIds?: InputMaybe<Array<Scalars['UUID']['input']>>;
};


export type GMutationNotificationsSendArgs = {
  input: GNotificationsSendInput;
};


export type GMutationRegistrationArgs = {
  input: GStudentUpsertInput;
};


export type GMutationSendConfirmationCodeArgs = {
  email: Scalars['EmailAddress']['input'];
};


export type GMutationStudentArrivalNoticeDeleteArgs = {
  studentId: Scalars['UUID']['input'];
};


export type GMutationStudentArrivalNoticeUpsertArgs = {
  data: GStudentArrivalNoticeUpsertInput;
  studentId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GMutationStudentCloseRelativeDeleteArgs = {
  closeRelativeIds: Array<Scalars['UUID']['input']>;
};


export type GMutationStudentCloseRelativeUpsertArgs = {
  data: GStudentCloseRelativeUpsertInput;
};


export type GMutationStudentCreateArgs = {
  input: GStudentCreateInput;
};


export type GMutationStudentMigrationCardDeleteArgs = {
  studentId: Scalars['UUID']['input'];
};


export type GMutationStudentMigrationCardUpsertArgs = {
  data: GStudentMigrationCardUpsertInput;
  studentId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GMutationStudentPassportDeleteArgs = {
  studentId: Scalars['UUID']['input'];
};


export type GMutationStudentPassportUpsertArgs = {
  data: GStudentPassportUpsertInput;
  studentId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GMutationStudentUpdateArgs = {
  input: GStudentUpdateInput;
};


export type GMutationStudentUpsertArgs = {
  input: GStudentUpsertInput;
  studentId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GMutationStudentVisaDeleteArgs = {
  studentId: Scalars['UUID']['input'];
};


export type GMutationStudentVisaUpsertArgs = {
  data: GStudentVisaUpsertInput;
  studentId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GMutationStudentsDeleteArgs = {
  ids: Array<Scalars['UUID']['input']>;
};


export type GMutationUpdateEmployeeArgs = {
  input: GEmployeeUpdateInput;
};


export type GMutationVisaRequestDeleteArgs = {
  studentId?: InputMaybe<Scalars['UUID']['input']>;
  visaRequestId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GMutationVisaRequestUpsertArgs = {
  input: GStudentVisaRequestUpsertInput;
  isForceCreate?: InputMaybe<Scalars['Boolean']['input']>;
  studentId?: InputMaybe<Scalars['UUID']['input']>;
  visaRequestId?: InputMaybe<Scalars['UUID']['input']>;
};

/** Уведомление */
export type GNotificationEntity = {
  _count: GNotificationEntityCount;
  /** Содержимое */
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  /** Сервисы для отправки уведомлений */
  services?: Maybe<Array<GNotificationServiceEnum>>;
  /** Заголовок */
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  /** Получатели */
  users?: Maybe<Array<GNotificationToUserEntity>>;
};

export type GNotificationEntityCount = {
  users: Scalars['Int']['output'];
};

export type GNotificationEntityCountAggregate = {
  _all: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  services: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type GNotificationEntityMaxAggregate = {
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GNotificationEntityMinAggregate = {
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Сервисы для отправки уведомлений */
export enum GNotificationServiceEnum {
  Email = 'Email',
  Sms = 'Sms',
  Telegram = 'Telegram',
  Vk = 'Vk',
  Web = 'Web'
}

/** Уведомления для пользователей */
export type GNotificationToUserEntity = {
  createdAt: Scalars['DateTime']['output'];
  /** Прочитано ли уведомление? */
  isRead: Scalars['Boolean']['output'];
  notification: GNotificationEntity;
  notificationId: Scalars['UUID']['output'];
  /** В какие сервисы отправлено уведомление */
  sentTo?: Maybe<Array<GNotificationServiceEnum>>;
  updatedAt: Scalars['DateTime']['output'];
  user: GUserEntity;
  userId: Scalars['UUID']['output'];
};

export type GNotificationToUserEntityCountAggregate = {
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  isRead: Scalars['Int']['output'];
  notificationId: Scalars['Int']['output'];
  sentTo: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type GNotificationToUserEntityMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  isRead?: Maybe<Scalars['Boolean']['output']>;
  notificationId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['UUID']['output']>;
};

export type GNotificationToUserEntityMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  isRead?: Maybe<Scalars['Boolean']['output']>;
  notificationId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['UUID']['output']>;
};

export type GNotificationsSendInput = {
  /** Всем сотрудникам */
  allEmployees?: InputMaybe<Scalars['Boolean']['input']>;
  /** Всем студентам */
  allStudents?: InputMaybe<Scalars['Boolean']['input']>;
  /** Текст уведомления */
  content: Scalars['String']['input'];
  /** Сервисы для рассылки (по умолчанию все) */
  services?: InputMaybe<Array<GNotificationServiceEnum>>;
  /** Заголовок уведомления */
  title: Scalars['String']['input'];
  /** Получатели */
  userIds?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

/** Входные данные для пагинации */
export type GPaginationInput = {
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GQuery = {
  botConnectionLink: Scalars['String']['output'];
  /** Проверка почты на корректность и доступность */
  emailAvailability: GEmailAvailabilityResponse;
  /** Получение сотрудника. Если не передан идентификатор сотрудника, то возвращает текущего. Только админ может получить других сотрудников. */
  employee: GEmployeeEntity;
  /** Выборка всех сотрудников */
  employees: Array<GEmployeeEntity>;
  /** Получение уведомления. Помечает уведомление как прочитанное. */
  notification: GUserNotificationObject;
  /** Получение уведомлений пользователя */
  notifications: Array<GUserNotificationObject>;
  /** Сколько всего уведомлений у пользователя */
  notificationsTotalCount: Scalars['Int']['output'];
  /** Количество непрочитанных уведомлений пользователя */
  notificationsUnreadCount: Scalars['Int']['output'];
  /** Получение студента по id. */
  student: GStudentEntity;
  /** Получение уведомления о прибытии студента */
  studentArrivalNotice?: Maybe<GStudentArrivalNoticeWithoutStudentResult>;
  /** Получить близкого родственника студента. */
  studentCloseRelative: GStudentCloseRelativeWithoutStudentResult;
  /** Получить близких родственников студента. */
  studentCloseRelatives: Array<GStudentCloseRelativeWithoutStudentResult>;
  /** Получение миграционной карты студента */
  studentMigrationCard?: Maybe<GStudentMigrationCardWithoutStudentResponse>;
  /** Получить паспорт студента. */
  studentPassport?: Maybe<GStudentPassportWithoutStudentResult>;
  /** Получение визы студента */
  studentVisa?: Maybe<GStudentVisaWithoutStudentResponse>;
  /** Получение списка студентов. */
  students: Array<GStudentEntity>;
  /** Получить текущего пользователя */
  userCurrent: GUserCurrentResponse;
  /** Получение последней визовой анкеты */
  visaRequest?: Maybe<GStudentVisaRequestEntity>;
  /** Получение визовых анкет всех или одного студента. */
  visaRequests: Array<GStudentVisaRequestEntity>;
};


export type GQueryBotConnectionLinkArgs = {
  input: GBotConnectionInput;
};


export type GQueryEmailAvailabilityArgs = {
  email: Scalars['String']['input'];
};


export type GQueryEmployeeArgs = {
  employeeId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GQueryNotificationArgs = {
  notificationId: Scalars['UUID']['input'];
  userId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GQueryNotificationsArgs = {
  pagination?: InputMaybe<GPaginationInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GQueryNotificationsTotalCountArgs = {
  userId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GQueryNotificationsUnreadCountArgs = {
  userId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GQueryStudentArgs = {
  studentId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GQueryStudentArrivalNoticeArgs = {
  studentId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GQueryStudentCloseRelativeArgs = {
  closeRelativeId: Scalars['UUID']['input'];
};


export type GQueryStudentCloseRelativesArgs = {
  studentId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GQueryStudentMigrationCardArgs = {
  studentId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GQueryStudentPassportArgs = {
  studentId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GQueryStudentVisaArgs = {
  studentId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GQueryVisaRequestArgs = {
  studentId?: InputMaybe<Scalars['UUID']['input']>;
  visaRequestId?: InputMaybe<Scalars['UUID']['input']>;
};


export type GQueryVisaRequestsArgs = {
  studentId?: InputMaybe<Scalars['UUID']['input']>;
};

/** Уведомление о прибытии студента */
export type GStudentArrivalNoticeEntity = {
  /** Адрес регистрации */
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Дата регистрации */
  date?: Maybe<Scalars['DateTime']['output']>;
  /** Дата окончания регистрации */
  expires?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  /** Приглашающая сторона */
  invitingSide?: Maybe<Scalars['String']['output']>;
  /** Профессия. Заполняется только сотрудниками. */
  profession?: Maybe<Scalars['String']['output']>;
  /** Принимающая сторона */
  receivingSide?: Maybe<Scalars['String']['output']>;
  student: GStudentEntity;
  studentId: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GStudentArrivalNoticeEntityCountAggregate = {
  _all: Scalars['Int']['output'];
  address: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  date: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  invitingSide: Scalars['Int']['output'];
  profession: Scalars['Int']['output'];
  receivingSide: Scalars['Int']['output'];
  studentId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type GStudentArrivalNoticeEntityMaxAggregate = {
  address?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  expires?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  invitingSide?: Maybe<Scalars['String']['output']>;
  profession?: Maybe<Scalars['String']['output']>;
  receivingSide?: Maybe<Scalars['String']['output']>;
  studentId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GStudentArrivalNoticeEntityMinAggregate = {
  address?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  expires?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  invitingSide?: Maybe<Scalars['String']['output']>;
  profession?: Maybe<Scalars['String']['output']>;
  receivingSide?: Maybe<Scalars['String']['output']>;
  studentId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Входные данные для создания/обновления уведомления о прибытии студента */
export type GStudentArrivalNoticeUpsertInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  invitingSide?: InputMaybe<Scalars['String']['input']>;
  profession?: InputMaybe<Scalars['String']['input']>;
  receivingSide?: InputMaybe<Scalars['String']['input']>;
};

/** Уведомление о прибытии студента без возможности выбора самого студента */
export type GStudentArrivalNoticeWithoutStudentResult = {
  /** Адрес регистрации */
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Дата регистрации */
  date?: Maybe<Scalars['DateTime']['output']>;
  /** Дата окончания регистрации */
  expires?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  /** Приглашающая сторона */
  invitingSide?: Maybe<Scalars['String']['output']>;
  /** Профессия. Заполняется только сотрудниками. */
  profession?: Maybe<Scalars['String']['output']>;
  /** Принимающая сторона */
  receivingSide?: Maybe<Scalars['String']['output']>;
  studentId: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Близкие родственники студента */
export type GStudentCloseRelativeEntity = {
  /** Постоянное место жительства */
  addressContinuousResidence?: Maybe<Scalars['String']['output']>;
  /** Дата рождения */
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  /** Гражданство */
  citizenship?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Имя */
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Фамилия */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Отчество */
  patronymic?: Maybe<Scalars['String']['output']>;
  student: GStudentEntity;
  studentId: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GStudentCloseRelativeEntityCountAggregate = {
  _all: Scalars['Int']['output'];
  addressContinuousResidence: Scalars['Int']['output'];
  birthDate: Scalars['Int']['output'];
  citizenship: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  firstName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['Int']['output'];
  patronymic: Scalars['Int']['output'];
  studentId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type GStudentCloseRelativeEntityMaxAggregate = {
  addressContinuousResidence?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  citizenship?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  studentId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GStudentCloseRelativeEntityMinAggregate = {
  addressContinuousResidence?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  citizenship?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  studentId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GStudentCloseRelativeUpsertInput = {
  addressContinuousResidence?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  citizenship?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  studentId?: InputMaybe<Scalars['UUID']['input']>;
};

/** Близкий родственник студента без возможности выбора самого студента */
export type GStudentCloseRelativeWithoutStudentResult = {
  /** Постоянное место жительства */
  addressContinuousResidence?: Maybe<Scalars['String']['output']>;
  /** Дата рождения */
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  /** Гражданство */
  citizenship?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Имя */
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Фамилия */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Отчество */
  patronymic?: Maybe<Scalars['String']['output']>;
  studentId: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GStudentCreateInput = {
  course?: InputMaybe<Scalars['Int']['input']>;
  curator?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['EmailAddress']['input'];
  faculty?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  patronymic?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** Студент */
export type GStudentEntity = {
  _count: GStudentEntityCount;
  /** Уведомление о прибытии */
  arrivalNotice?: Maybe<GStudentArrivalNoticeEntity>;
  /** Близкие родственники */
  closeRelatives?: Maybe<Array<GStudentCloseRelativeEntity>>;
  /** Курс */
  course?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Куратор */
  curator?: Maybe<Scalars['String']['output']>;
  /** Факультет */
  faculty?: Maybe<Scalars['String']['output']>;
  /** Полное имя. Использовать только если в запросе присутствует паспорт студента. */
  fullName: Scalars['String']['output'];
  /** Группа */
  group?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Инициалы. Использовать только если в запросе присутствует паспорт студента. */
  initials: Scalars['String']['output'];
  /** Миграционная карта */
  migrationCard?: Maybe<GStudentMigrationCardEntity>;
  /** Паспорт */
  passport?: Maybe<GStudentPassportEntity>;
  /** Телефон */
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: GUserEntity;
  /** Виза */
  visa?: Maybe<GStudentVisaEntity>;
  /** Визовые анкеты */
  visaRequests?: Maybe<Array<GStudentVisaRequestEntity>>;
};

export type GStudentEntityAvgAggregate = {
  course?: Maybe<Scalars['Float']['output']>;
};

export type GStudentEntityCount = {
  closeRelatives: Scalars['Int']['output'];
  visaRequests: Scalars['Int']['output'];
};

export type GStudentEntityCountAggregate = {
  _all: Scalars['Int']['output'];
  course: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  curator: Scalars['Int']['output'];
  faculty: Scalars['Int']['output'];
  group: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  phone: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type GStudentEntityMaxAggregate = {
  course?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  curator?: Maybe<Scalars['String']['output']>;
  faculty?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GStudentEntityMinAggregate = {
  course?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  curator?: Maybe<Scalars['String']['output']>;
  faculty?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GStudentEntitySumAggregate = {
  course?: Maybe<Scalars['Int']['output']>;
};

/** Миграционная карта студента */
export type GStudentMigrationCardEntity = {
  createdAt: Scalars['DateTime']['output'];
  /** Дата истечения */
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  /** Дата выдачи */
  issueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Номер */
  number?: Maybe<Scalars['String']['output']>;
  /** Серия */
  series?: Maybe<Scalars['String']['output']>;
  student: GStudentEntity;
  studentId: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GStudentMigrationCardEntityCountAggregate = {
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expirationDate: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  issueDate: Scalars['Int']['output'];
  number: Scalars['Int']['output'];
  series: Scalars['Int']['output'];
  studentId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type GStudentMigrationCardEntityMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  issueDate?: Maybe<Scalars['DateTime']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  series?: Maybe<Scalars['String']['output']>;
  studentId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GStudentMigrationCardEntityMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  issueDate?: Maybe<Scalars['DateTime']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  series?: Maybe<Scalars['String']['output']>;
  studentId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Входные данные для создания/обновления миграционной карты студента */
export type GStudentMigrationCardUpsertInput = {
  expirationDate?: InputMaybe<Scalars['DateTime']['input']>;
  issueDate?: InputMaybe<Scalars['DateTime']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  series?: InputMaybe<Scalars['String']['input']>;
};

/** Миграционная карта студента без возможности выбора самого студента */
export type GStudentMigrationCardWithoutStudentResponse = {
  createdAt: Scalars['DateTime']['output'];
  /** Дата истечения */
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  /** Дата выдачи */
  issueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Номер */
  number?: Maybe<Scalars['String']['output']>;
  /** Серия */
  series?: Maybe<Scalars['String']['output']>;
  studentId: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Паспорт студента */
export type GStudentPassportEntity = {
  /** Дата рождения */
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  /** Место рождения */
  birthPlace?: Maybe<Scalars['String']['output']>;
  /** Гражданство */
  citizenship?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Дата истечения */
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** Имя */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Пол */
  gender?: Maybe<GGenderEnum>;
  id: Scalars['UUID']['output'];
  /** Дата выдачи */
  issueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Кем выдан */
  issuedBy?: Maybe<Scalars['String']['output']>;
  /** Фамилия */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Номер */
  number?: Maybe<Scalars['String']['output']>;
  /** Отчество */
  patronymic?: Maybe<Scalars['String']['output']>;
  /** Серия */
  series?: Maybe<Scalars['String']['output']>;
  student: GStudentEntity;
  studentId: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GStudentPassportEntityCountAggregate = {
  _all: Scalars['Int']['output'];
  birthDate: Scalars['Int']['output'];
  birthPlace: Scalars['Int']['output'];
  citizenship: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expirationDate: Scalars['Int']['output'];
  firstName: Scalars['Int']['output'];
  gender: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  issueDate: Scalars['Int']['output'];
  issuedBy: Scalars['Int']['output'];
  lastName: Scalars['Int']['output'];
  number: Scalars['Int']['output'];
  patronymic: Scalars['Int']['output'];
  series: Scalars['Int']['output'];
  studentId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type GStudentPassportEntityMaxAggregate = {
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  birthPlace?: Maybe<Scalars['String']['output']>;
  citizenship?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<GGenderEnum>;
  id?: Maybe<Scalars['UUID']['output']>;
  issueDate?: Maybe<Scalars['DateTime']['output']>;
  issuedBy?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  series?: Maybe<Scalars['String']['output']>;
  studentId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GStudentPassportEntityMinAggregate = {
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  birthPlace?: Maybe<Scalars['String']['output']>;
  citizenship?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<GGenderEnum>;
  id?: Maybe<Scalars['UUID']['output']>;
  issueDate?: Maybe<Scalars['DateTime']['output']>;
  issuedBy?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  series?: Maybe<Scalars['String']['output']>;
  studentId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Входные данные для создания/обновления паспорта студента */
export type GStudentPassportUpsertInput = {
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  birthPlace?: InputMaybe<Scalars['String']['input']>;
  citizenship?: InputMaybe<Scalars['String']['input']>;
  expirationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GGenderEnum>;
  issueDate?: InputMaybe<Scalars['DateTime']['input']>;
  issuedBy?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  series?: InputMaybe<Scalars['String']['input']>;
};

/** Паспорт студента, где вместо студента присутствует только его studentId. */
export type GStudentPassportWithoutStudentResult = {
  /** Дата рождения */
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  /** Место рождения */
  birthPlace?: Maybe<Scalars['String']['output']>;
  /** Гражданство */
  citizenship?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Дата истечения */
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** Имя */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Пол */
  gender?: Maybe<GGenderEnum>;
  id: Scalars['UUID']['output'];
  /** Дата выдачи */
  issueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Кем выдан */
  issuedBy?: Maybe<Scalars['String']['output']>;
  /** Фамилия */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Номер */
  number?: Maybe<Scalars['String']['output']>;
  /** Отчество */
  patronymic?: Maybe<Scalars['String']['output']>;
  /** Серия */
  series?: Maybe<Scalars['String']['output']>;
  studentId: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GStudentUpdateInput = {
  course?: InputMaybe<Scalars['Int']['input']>;
  curator?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  faculty?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  /** Идентификатор пользователя */
  id: Scalars['UUID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type GStudentUpsertInput = {
  course?: InputMaybe<Scalars['Int']['input']>;
  curator?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  faculty?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** Виза студента */
export type GStudentVisaEntity = {
  /** Серия бланка */
  blankSeries?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Дата истечения */
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** Идентификатор визы */
  id: Scalars['ID']['output'];
  /** Номер приглашения */
  invitationNumber?: Maybe<Scalars['String']['output']>;
  /** Дата выдачи */
  issueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Номер */
  number?: Maybe<Scalars['String']['output']>;
  student: GStudentEntity;
  studentId: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GStudentVisaEntityCountAggregate = {
  _all: Scalars['Int']['output'];
  blankSeries: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expirationDate: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  invitationNumber: Scalars['Int']['output'];
  issueDate: Scalars['Int']['output'];
  number: Scalars['Int']['output'];
  studentId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type GStudentVisaEntityMaxAggregate = {
  blankSeries?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitationNumber?: Maybe<Scalars['String']['output']>;
  issueDate?: Maybe<Scalars['DateTime']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  studentId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GStudentVisaEntityMinAggregate = {
  blankSeries?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitationNumber?: Maybe<Scalars['String']['output']>;
  issueDate?: Maybe<Scalars['DateTime']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  studentId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Визовая анкета студента */
export type GStudentVisaRequestEntity = {
  /** Адрес в стране постоянного проживания */
  addressInCountryOfContinuousResidence?: Maybe<Scalars['String']['output']>;
  /** Адрес постановки на миграционный учет */
  addressOfMigrationRegistration?: Maybe<Scalars['String']['output']>;
  /** Прилагаемые документы */
  attachedDocuments?: Maybe<Scalars['String']['output']>;
  /** Категория визы */
  category?: Maybe<GVisaCategoryEnum>;
  createdAt: Scalars['DateTime']['output'];
  /** Комментарий сотрудника */
  employeeComment?: Maybe<Scalars['String']['output']>;
  /** Маршрут предполагаемого пребывания */
  estimatedRouteOfStay?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Кратность визы */
  multiplicity?: Maybe<GVisaMultiplicityEnum>;
  /** Место работы или учёбы, должность */
  placeOfWorkOrStudyAndEmploymentPosition?: Maybe<Scalars['String']['output']>;
  /** В связи с ... */
  reason?: Maybe<Scalars['String']['output']>;
  /** Регистрационный номер заполняемый только сотрудником */
  registrationNumber?: Maybe<Scalars['String']['output']>;
  /** Родственники на территории РФ */
  russianFederationRelatives?: Maybe<Scalars['String']['output']>;
  /** Статус визовой анкеты */
  status: GVisaRequestStatusEnum;
  student: GStudentEntity;
  studentId: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GStudentVisaRequestEntityCountAggregate = {
  _all: Scalars['Int']['output'];
  addressInCountryOfContinuousResidence: Scalars['Int']['output'];
  addressOfMigrationRegistration: Scalars['Int']['output'];
  attachedDocuments: Scalars['Int']['output'];
  category: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  employeeComment: Scalars['Int']['output'];
  estimatedRouteOfStay: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  multiplicity: Scalars['Int']['output'];
  placeOfWorkOrStudyAndEmploymentPosition: Scalars['Int']['output'];
  reason: Scalars['Int']['output'];
  registrationNumber: Scalars['Int']['output'];
  russianFederationRelatives: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  studentId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type GStudentVisaRequestEntityMaxAggregate = {
  addressInCountryOfContinuousResidence?: Maybe<Scalars['String']['output']>;
  addressOfMigrationRegistration?: Maybe<Scalars['String']['output']>;
  attachedDocuments?: Maybe<Scalars['String']['output']>;
  category?: Maybe<GVisaCategoryEnum>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  employeeComment?: Maybe<Scalars['String']['output']>;
  estimatedRouteOfStay?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  multiplicity?: Maybe<GVisaMultiplicityEnum>;
  placeOfWorkOrStudyAndEmploymentPosition?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  registrationNumber?: Maybe<Scalars['String']['output']>;
  russianFederationRelatives?: Maybe<Scalars['String']['output']>;
  status?: Maybe<GVisaRequestStatusEnum>;
  studentId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GStudentVisaRequestEntityMinAggregate = {
  addressInCountryOfContinuousResidence?: Maybe<Scalars['String']['output']>;
  addressOfMigrationRegistration?: Maybe<Scalars['String']['output']>;
  attachedDocuments?: Maybe<Scalars['String']['output']>;
  category?: Maybe<GVisaCategoryEnum>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  employeeComment?: Maybe<Scalars['String']['output']>;
  estimatedRouteOfStay?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  multiplicity?: Maybe<GVisaMultiplicityEnum>;
  placeOfWorkOrStudyAndEmploymentPosition?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  registrationNumber?: Maybe<Scalars['String']['output']>;
  russianFederationRelatives?: Maybe<Scalars['String']['output']>;
  status?: Maybe<GVisaRequestStatusEnum>;
  studentId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GStudentVisaRequestUpsertInput = {
  addressInCountryOfContinuousResidence?: InputMaybe<Scalars['String']['input']>;
  addressOfMigrationRegistration?: InputMaybe<Scalars['String']['input']>;
  attachedDocuments?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<GVisaCategoryEnum>;
  employeeComment?: InputMaybe<Scalars['String']['input']>;
  estimatedRouteOfStay?: InputMaybe<Scalars['String']['input']>;
  multiplicity?: InputMaybe<GVisaMultiplicityEnum>;
  placeOfWorkOrStudyAndEmploymentPosition?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  registrationNumber?: InputMaybe<Scalars['String']['input']>;
  russianFederationRelatives?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<GVisaRequestStatusEnum>;
};

/** Входные данные для создания/обновления визы студента */
export type GStudentVisaUpsertInput = {
  blankSeries?: InputMaybe<Scalars['String']['input']>;
  expirationDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['String']['input'];
  invitationNumber?: InputMaybe<Scalars['String']['input']>;
  issueDate?: InputMaybe<Scalars['DateTime']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

/** Виза студента без возможности выбора самого студента */
export type GStudentVisaWithoutStudentResponse = {
  /** Серия бланка */
  blankSeries?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Дата истечения */
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** Идентификатор визы */
  id: Scalars['ID']['output'];
  /** Номер приглашения */
  invitationNumber?: Maybe<Scalars['String']['output']>;
  /** Дата выдачи */
  issueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Номер */
  number?: Maybe<Scalars['String']['output']>;
  studentId: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GSubscription = {
  botConnected: GBotEnum;
  /** Подписка на уведомления */
  notificationSubscription: GUserNotificationObject;
};

/** Ответ на запрос токена */
export type GTokenResponse = {
  /** Токен доступа */
  accessToken: Scalars['String']['output'];
  /** Время истечения токена */
  accessTokenExpires: Scalars['DateTime']['output'];
};

export type GUserCurrentResponse = {
  /** Дата истечения токена доступа */
  accessTokenExpires: Scalars['DateTime']['output'];
  /** Роль пользователя. Использовать, только если в запросе присутствует roles. */
  role: GUserRoleEnum;
  /** Роли текущего пользователя */
  roles: Array<GUserRoleEnum>;
  /** Текущий пользователь */
  user: GUserEntity;
};

/** Пользователь */
export type GUserEntity = {
  _count: GUserEntityCount;
  createdAt: Scalars['DateTime']['output'];
  /** Электронная почта (должна быть подтверждена) */
  email: Scalars['EmailAddress']['output'];
  /** Если пользователь - сотрудник */
  employee?: Maybe<GEmployeeEntity>;
  /** Файлы созданные пользователем */
  files?: Maybe<Array<GFileEntity>>;
  /** Полное имя. Использовать только если в запросе присутствуют поля паспорта студента или поля сотрудника. */
  fullName: Scalars['String']['output'];
  /** Идентификатор пользователя */
  id: Scalars['UUID']['output'];
  /** Инициалы. Использовать только если в запросе присутствуют поля паспорта студента или поля сотрудника. */
  initials: Scalars['String']['output'];
  /** Последняя активность */
  lastActivity?: Maybe<Scalars['DateTime']['output']>;
  /** Уведомления пользователя */
  notifications?: Maybe<Array<GNotificationToUserEntity>>;
  /** Роль. Использовать только если в запросе присутствует student или employee.isAdmin. */
  role: GUserRoleEnum;
  /** Если пользователь - студент */
  student?: Maybe<GStudentEntity>;
  /** Telegram User ID */
  telegramId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  /** VK User ID */
  vkId?: Maybe<Scalars['String']['output']>;
};

export type GUserEntityCount = {
  files: Scalars['Int']['output'];
  notifications: Scalars['Int']['output'];
};

export type GUserEntityCountAggregate = {
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lastActivity: Scalars['Int']['output'];
  telegramId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  vkId: Scalars['Int']['output'];
};

export type GUserEntityMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  lastActivity?: Maybe<Scalars['DateTime']['output']>;
  telegramId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vkId?: Maybe<Scalars['String']['output']>;
};

export type GUserEntityMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  lastActivity?: Maybe<Scalars['DateTime']['output']>;
  telegramId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vkId?: Maybe<Scalars['String']['output']>;
};

/** Уведомление пользователя */
export type GUserNotificationObject = {
  /** Содержимое */
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  /** Прочитано ли уведомление? */
  isRead: Scalars['Boolean']['output'];
  /** В какие сервисы отправлено уведомление */
  sentTo?: Maybe<Array<GNotificationServiceEnum>>;
  /** Сервисы для отправки уведомлений */
  services?: Maybe<Array<GNotificationServiceEnum>>;
  /** Заголовок */
  title: Scalars['String']['output'];
  userId: Scalars['UUID']['output'];
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
  email: Scalars['EmailAddress']['input'];
  password: Scalars['String']['input'];
}>;


export type GLoginByPasswordMutation = { response: { accessToken: string, accessTokenExpires: Dayjs } };

export type GUserCurrentQueryVariables = Exact<{ [key: string]: never; }>;


export type GUserCurrentQuery = { current: { role: GUserRoleEnum, roles: Array<GUserRoleEnum>, accessTokenExpires: Dayjs, user: { id: string, email: string, lastActivity?: Dayjs | null, createdAt: Dayjs, updatedAt: Dayjs, telegramId?: string | null, vkId?: string | null, role: GUserRoleEnum, initials: string, fullName: string, employee?: { id: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, isAdmin: boolean, createdAt: Dayjs, updatedAt: Dayjs } | null, student?: { id: string, phone?: string | null, curator?: string | null, faculty?: string | null, course?: number | null, group?: string | null, createdAt: Dayjs, updatedAt: Dayjs, passport?: { id: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null } | null } | null } } };

export type GBotConnectionLinkQueryVariables = Exact<{
  input: GBotConnectionInput;
}>;


export type GBotConnectionLinkQuery = { botConnectionLink: string };

export type GBotDisconnectMutationVariables = Exact<{
  input: GBotConnectionInput;
}>;


export type GBotDisconnectMutation = { botDisconnect: boolean };

export type GBotConnectedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GBotConnectedSubscription = { botConnected: GBotEnum };

export type GEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type GEmployeesQuery = { employees: Array<{ id: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, fullName: string, isAdmin: boolean, createdAt: Dayjs, updatedAt: Dayjs, user: { email: string, createdAt: Dayjs, updatedAt: Dayjs, lastActivity?: Dayjs | null } }> };

export type GEmployeesDeleteMutationVariables = Exact<{
  employeeIds: Array<Scalars['UUID']['input']> | Scalars['UUID']['input'];
}>;


export type GEmployeesDeleteMutation = { employeesDelete: number };

export type GEmployeeUpsertMutationVariables = Exact<{
  input: GEmployeeUpsertInput;
  employeeId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GEmployeeUpsertMutation = { employeeUpsert: { id: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, isAdmin: boolean, createdAt: Dayjs, updatedAt: Dayjs, user: { email: string, createdAt: Dayjs, updatedAt: Dayjs, lastActivity?: Dayjs | null } } };

export type GEmployeeQueryVariables = Exact<{
  employeeId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GEmployeeQuery = { employee: { id: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, fullName: string, isAdmin: boolean, createdAt: Dayjs, updatedAt: Dayjs, user: { email: string, createdAt: Dayjs, updatedAt: Dayjs, lastActivity?: Dayjs | null } } };

export type GExportDocumentsMutationVariables = Exact<{
  studentId?: InputMaybe<Scalars['UUID']['input']>;
  visaRequestId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GExportDocumentsMutation = { exportDocuments: Array<{ id: string, userId?: string | null, dir?: string | null, name?: string | null, ext?: string | null, description?: string | null, deletedAt?: Dayjs | null, createdAt: Dayjs, updatedAt: Dayjs, url: string, user?: { id: string } | null }> };

export type GNotificationFragment = { id: string, title: string, content: string, createdAt: Dayjs, isRead: boolean };

export type GNotificationsQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['UUID']['input']>;
  pagination?: InputMaybe<GPaginationInput>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GNotificationsQuery = { notifications: Array<{ id: string, title: string, content: string, createdAt: Dayjs, isRead: boolean }> };

export type GNotificationsTotalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GNotificationsTotalCountQuery = { totalCount: number };

export type GNotificationsUnreadCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GNotificationsUnreadCountQuery = { unreadCount: number };

export type GNotificationQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GNotificationQuery = { notification: { id: string, title: string, content: string, createdAt: Dayjs, isRead: boolean } };

export type GNewNotificationSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GNewNotificationSubscription = { notificationSubscription: { id: string, title: string, content: string, createdAt: Dayjs, isRead: boolean } };

export type GNotificationsSendMutationVariables = Exact<{
  input: GNotificationsSendInput;
}>;


export type GNotificationsSendMutation = { notificationsSend: boolean };

export type GEmailAvailabilityQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GEmailAvailabilityQuery = { emailAvailability: { verdict: GEmailAvailabilityVerdictEnum, message: string } };

export type GEmailConfirmByCodeMutationVariables = Exact<{
  email: Scalars['EmailAddress']['input'];
  code: Scalars['String']['input'];
}>;


export type GEmailConfirmByCodeMutation = { emailConfirmByCode: boolean };

export type GSendConfirmationCodeMutationVariables = Exact<{
  email: Scalars['EmailAddress']['input'];
}>;


export type GSendConfirmationCodeMutation = { sendConfirmationCode: Dayjs };

export type GRegistrationMutationVariables = Exact<{
  input: GStudentUpsertInput;
}>;


export type GRegistrationMutation = { isRegistered: boolean };

export type GStudentArrivalNoticeQueryVariables = Exact<{
  studentId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GStudentArrivalNoticeQuery = { studentArrivalNotice?: { id: string, studentId: string, profession?: string | null, address?: string | null, date?: Dayjs | null, expires?: Dayjs | null, invitingSide?: string | null, receivingSide?: string | null, createdAt: Dayjs, updatedAt: Dayjs } | null };

export type GStudentArrivalNoticeUpsertMutationVariables = Exact<{
  data: GStudentArrivalNoticeUpsertInput;
  studentId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GStudentArrivalNoticeUpsertMutation = { isSuccess: boolean };

export type GStudentArrivalNoticeDeleteMutationVariables = Exact<{
  studentId: Scalars['UUID']['input'];
}>;


export type GStudentArrivalNoticeDeleteMutation = { isDeleted: boolean };

export type GStudentCloseRelativesQueryVariables = Exact<{
  studentId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GStudentCloseRelativesQuery = { studentCloseRelatives: Array<{ id: string, studentId: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, birthDate?: Dayjs | null, citizenship?: string | null, addressContinuousResidence?: string | null, createdAt: Dayjs, updatedAt: Dayjs }> };

export type GStudentCloseRelativeQueryVariables = Exact<{
  closeRelativeId: Scalars['UUID']['input'];
}>;


export type GStudentCloseRelativeQuery = { studentCloseRelative: { id: string, studentId: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, birthDate?: Dayjs | null, citizenship?: string | null, addressContinuousResidence?: string | null, createdAt: Dayjs, updatedAt: Dayjs } };

export type GStudentCloseRelativeUpsertMutationVariables = Exact<{
  data: GStudentCloseRelativeUpsertInput;
}>;


export type GStudentCloseRelativeUpsertMutation = { isSuccess: boolean };

export type GStudentCloseRelativeDeleteMutationVariables = Exact<{
  closeRelativeIds: Array<Scalars['UUID']['input']> | Scalars['UUID']['input'];
}>;


export type GStudentCloseRelativeDeleteMutation = { deletedCount: number };

export type GStudentMigrationCardQueryVariables = Exact<{
  studentId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GStudentMigrationCardQuery = { studentMigrationCard?: { id: string, studentId: string, series?: string | null, number?: string | null, issueDate?: Dayjs | null, expirationDate?: Dayjs | null } | null };

export type GStudentMigrationCardDeleteMutationVariables = Exact<{
  studentId: Scalars['UUID']['input'];
}>;


export type GStudentMigrationCardDeleteMutation = { studentMigrationCardDelete: boolean };

export type GStudentMigrationCardUpsertMutationVariables = Exact<{
  data: GStudentMigrationCardUpsertInput;
  studentId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GStudentMigrationCardUpsertMutation = { studentMigrationCardUpsert: boolean };

export type GStudentPassportQueryVariables = Exact<{
  studentId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GStudentPassportQuery = { studentPassport?: { id: string, studentId: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, birthDate?: Dayjs | null, birthPlace?: string | null, gender?: GGenderEnum | null, citizenship?: string | null, series?: string | null, number?: string | null, issueDate?: Dayjs | null, issuedBy?: string | null, expirationDate?: Dayjs | null, createdAt: Dayjs, updatedAt: Dayjs } | null };

export type GStudentPassportUpsertMutationVariables = Exact<{
  data: GStudentPassportUpsertInput;
  studentId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GStudentPassportUpsertMutation = { isSuccess: boolean };

export type GStudentPassportDeleteMutationVariables = Exact<{
  studentId: Scalars['UUID']['input'];
}>;


export type GStudentPassportDeleteMutation = { isDeleted: boolean };

export type GStudentVisaQueryVariables = Exact<{
  studentId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GStudentVisaQuery = { studentVisa?: { id: string, studentId: string, blankSeries?: string | null, number?: string | null, issueDate?: Dayjs | null, expirationDate?: Dayjs | null, invitationNumber?: string | null } | null };

export type GStudentVisaDeleteMutationVariables = Exact<{
  studentId: Scalars['UUID']['input'];
}>;


export type GStudentVisaDeleteMutation = { studentVisaDelete: boolean };

export type GStudentVisaUpsertMutationVariables = Exact<{
  data: GStudentVisaUpsertInput;
  studentId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GStudentVisaUpsertMutation = { studentVisaUpsert: boolean };

export type GStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GStudentsQuery = { students: Array<{ initials: string, fullName: string, id: string, phone?: string | null, curator?: string | null, faculty?: string | null, course?: number | null, group?: string | null, createdAt: Dayjs, updatedAt: Dayjs, user: { id: string, email: string, lastActivity?: Dayjs | null, createdAt: Dayjs, updatedAt: Dayjs }, arrivalNotice?: { id: string, createdAt: Dayjs, updatedAt: Dayjs } | null, migrationCard?: { id: string, createdAt: Dayjs, updatedAt: Dayjs } | null, visa?: { id: string, createdAt: Dayjs, updatedAt: Dayjs } | null, passport?: { id: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, birthDate?: Dayjs | null, birthPlace?: string | null, gender?: GGenderEnum | null, citizenship?: string | null, createdAt: Dayjs, updatedAt: Dayjs } | null, closeRelatives?: Array<{ id: string, createdAt: Dayjs, updatedAt: Dayjs }> | null, visaRequests?: Array<{ id: string, createdAt: Dayjs, updatedAt: Dayjs }> | null, _count: { closeRelatives: number, visaRequests: number } }> };

export type GStudentQueryVariables = Exact<{
  studentId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GStudentQuery = { student: { id: string, phone?: string | null, curator?: string | null, faculty?: string | null, course?: number | null, group?: string | null, createdAt: Dayjs, updatedAt: Dayjs, initials: string, fullName: string, user: { id: string, email: string, lastActivity?: Dayjs | null, createdAt: Dayjs, updatedAt: Dayjs }, passport?: { id: string, studentId: string, lastName?: string | null, firstName?: string | null, patronymic?: string | null, birthDate?: Dayjs | null, birthPlace?: string | null, gender?: GGenderEnum | null, citizenship?: string | null, series?: string | null, number?: string | null, issueDate?: Dayjs | null, issuedBy?: string | null, expirationDate?: Dayjs | null, createdAt: Dayjs, updatedAt: Dayjs } | null } };

export type GStudentUpsertMutationVariables = Exact<{
  studentId?: InputMaybe<Scalars['UUID']['input']>;
  input: GStudentUpsertInput;
}>;


export type GStudentUpsertMutation = { isUpserted: boolean };

export type GStudentsDeleteMutationVariables = Exact<{
  ids: Array<Scalars['UUID']['input']> | Scalars['UUID']['input'];
}>;


export type GStudentsDeleteMutation = { deletedCount: number };

export type GVisaRequestFragment = { id: string, studentId: string, status: GVisaRequestStatusEnum, employeeComment?: string | null, registrationNumber?: string | null, category?: GVisaCategoryEnum | null, multiplicity?: GVisaMultiplicityEnum | null, reason?: string | null, addressOfMigrationRegistration?: string | null, estimatedRouteOfStay?: string | null, addressInCountryOfContinuousResidence?: string | null, placeOfWorkOrStudyAndEmploymentPosition?: string | null, russianFederationRelatives?: string | null, attachedDocuments?: string | null, createdAt: Dayjs, updatedAt: Dayjs, student: { fullName: string, initials: string, passport?: { lastName?: string | null, firstName?: string | null, patronymic?: string | null } | null } };

export type GVisaRequestsQueryVariables = Exact<{
  studentId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GVisaRequestsQuery = { visaRequests: Array<{ id: string, studentId: string, status: GVisaRequestStatusEnum, employeeComment?: string | null, registrationNumber?: string | null, category?: GVisaCategoryEnum | null, multiplicity?: GVisaMultiplicityEnum | null, reason?: string | null, addressOfMigrationRegistration?: string | null, estimatedRouteOfStay?: string | null, addressInCountryOfContinuousResidence?: string | null, placeOfWorkOrStudyAndEmploymentPosition?: string | null, russianFederationRelatives?: string | null, attachedDocuments?: string | null, createdAt: Dayjs, updatedAt: Dayjs, student: { fullName: string, initials: string, passport?: { lastName?: string | null, firstName?: string | null, patronymic?: string | null } | null } }> };

export type GVisaRequestQueryVariables = Exact<{
  studentId?: InputMaybe<Scalars['UUID']['input']>;
  visaRequestId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GVisaRequestQuery = { visaRequest?: { id: string, studentId: string, status: GVisaRequestStatusEnum, employeeComment?: string | null, registrationNumber?: string | null, category?: GVisaCategoryEnum | null, multiplicity?: GVisaMultiplicityEnum | null, reason?: string | null, addressOfMigrationRegistration?: string | null, estimatedRouteOfStay?: string | null, addressInCountryOfContinuousResidence?: string | null, placeOfWorkOrStudyAndEmploymentPosition?: string | null, russianFederationRelatives?: string | null, attachedDocuments?: string | null, createdAt: Dayjs, updatedAt: Dayjs, student: { fullName: string, initials: string, passport?: { lastName?: string | null, firstName?: string | null, patronymic?: string | null } | null } } | null };

export type GVisaRequestUpsertMutationVariables = Exact<{
  input: GStudentVisaRequestUpsertInput;
  isForceCreate?: InputMaybe<Scalars['Boolean']['input']>;
  studentId?: InputMaybe<Scalars['UUID']['input']>;
  visaRequestId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GVisaRequestUpsertMutation = { visaRequestUpsert: { id: string, studentId: string, status: GVisaRequestStatusEnum, employeeComment?: string | null, registrationNumber?: string | null, category?: GVisaCategoryEnum | null, multiplicity?: GVisaMultiplicityEnum | null, reason?: string | null, addressOfMigrationRegistration?: string | null, estimatedRouteOfStay?: string | null, addressInCountryOfContinuousResidence?: string | null, placeOfWorkOrStudyAndEmploymentPosition?: string | null, russianFederationRelatives?: string | null, attachedDocuments?: string | null, createdAt: Dayjs, updatedAt: Dayjs, student: { fullName: string, initials: string, passport?: { lastName?: string | null, firstName?: string | null, patronymic?: string | null } | null } } };

export type GVisaRequestDeleteMutationVariables = Exact<{
  visaRequestId?: InputMaybe<Scalars['UUID']['input']>;
  studentId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GVisaRequestDeleteMutation = { visaRequestDelete: { id: string } };

export const NotificationFragmentDoc = gql`
    fragment Notification on UserNotificationObject {
  id
  title
  content
  createdAt
  isRead
}
    `;
export const VisaRequestFragmentDoc = gql`
    fragment VisaRequest on StudentVisaRequestEntity {
  id
  studentId
  student {
    fullName @client
    initials @client
    passport {
      lastName
      firstName
      patronymic
    }
  }
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
    `;
export const LoginByPasswordDocument = gql`
    mutation LoginByPassword($email: EmailAddress!, $password: String!) {
  response: loginByPassword(email: $email, password: $password) {
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
export const UserCurrentDocument = gql`
    query UserCurrent {
  current: userCurrent {
    role @client
    roles
    accessTokenExpires
    user {
      id
      email
      lastActivity
      createdAt
      updatedAt
      telegramId
      vkId
      role @client
      initials @client
      fullName @client
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
        passport {
          id
          lastName
          firstName
          patronymic
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
export const BotConnectionLinkDocument = gql`
    query BotConnectionLink($input: BotConnectionInput!) {
  botConnectionLink(input: $input)
}
    `;

/**
 * __useBotConnectionLinkQuery__
 *
 * To run a query within a React component, call `useBotConnectionLinkQuery` and pass it any options that fit your needs.
 * When your component renders, `useBotConnectionLinkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBotConnectionLinkQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBotConnectionLinkQuery(baseOptions: Apollo.QueryHookOptions<GBotConnectionLinkQuery, GBotConnectionLinkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GBotConnectionLinkQuery, GBotConnectionLinkQueryVariables>(BotConnectionLinkDocument, options);
      }
export function useBotConnectionLinkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GBotConnectionLinkQuery, GBotConnectionLinkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GBotConnectionLinkQuery, GBotConnectionLinkQueryVariables>(BotConnectionLinkDocument, options);
        }
export type BotConnectionLinkQueryHookResult = ReturnType<typeof useBotConnectionLinkQuery>;
export type BotConnectionLinkLazyQueryHookResult = ReturnType<typeof useBotConnectionLinkLazyQuery>;
export type BotConnectionLinkQueryResult = Apollo.QueryResult<GBotConnectionLinkQuery, GBotConnectionLinkQueryVariables>;
export function refetchBotConnectionLinkQuery(variables: GBotConnectionLinkQueryVariables) {
      return { query: BotConnectionLinkDocument, variables: variables }
    }
export const BotDisconnectDocument = gql`
    mutation BotDisconnect($input: BotConnectionInput!) {
  botDisconnect(input: $input)
}
    `;
export type GBotDisconnectMutationFn = Apollo.MutationFunction<GBotDisconnectMutation, GBotDisconnectMutationVariables>;

/**
 * __useBotDisconnectMutation__
 *
 * To run a mutation, you first call `useBotDisconnectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBotDisconnectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [botDisconnectMutation, { data, loading, error }] = useBotDisconnectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBotDisconnectMutation(baseOptions?: Apollo.MutationHookOptions<GBotDisconnectMutation, GBotDisconnectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GBotDisconnectMutation, GBotDisconnectMutationVariables>(BotDisconnectDocument, options);
      }
export type BotDisconnectMutationHookResult = ReturnType<typeof useBotDisconnectMutation>;
export type BotDisconnectMutationResult = Apollo.MutationResult<GBotDisconnectMutation>;
export type BotDisconnectMutationOptions = Apollo.BaseMutationOptions<GBotDisconnectMutation, GBotDisconnectMutationVariables>;
export const BotConnectedDocument = gql`
    subscription BotConnected {
  botConnected
}
    `;

/**
 * __useBotConnectedSubscription__
 *
 * To run a query within a React component, call `useBotConnectedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBotConnectedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBotConnectedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useBotConnectedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GBotConnectedSubscription, GBotConnectedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GBotConnectedSubscription, GBotConnectedSubscriptionVariables>(BotConnectedDocument, options);
      }
export type BotConnectedSubscriptionHookResult = ReturnType<typeof useBotConnectedSubscription>;
export type BotConnectedSubscriptionResult = Apollo.SubscriptionResult<GBotConnectedSubscription>;
export const EmployeesDocument = gql`
    query Employees {
  employees {
    id
    lastName
    firstName
    patronymic
    fullName @client
    isAdmin
    createdAt
    updatedAt
    user {
      email
      createdAt
      updatedAt
      lastActivity
    }
  }
}
    `;

/**
 * __useEmployeesQuery__
 *
 * To run a query within a React component, call `useEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmployeesQuery({
 *   variables: {
 *   },
 * });
 */
export function useEmployeesQuery(baseOptions?: Apollo.QueryHookOptions<GEmployeesQuery, GEmployeesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GEmployeesQuery, GEmployeesQueryVariables>(EmployeesDocument, options);
      }
export function useEmployeesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GEmployeesQuery, GEmployeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GEmployeesQuery, GEmployeesQueryVariables>(EmployeesDocument, options);
        }
export type EmployeesQueryHookResult = ReturnType<typeof useEmployeesQuery>;
export type EmployeesLazyQueryHookResult = ReturnType<typeof useEmployeesLazyQuery>;
export type EmployeesQueryResult = Apollo.QueryResult<GEmployeesQuery, GEmployeesQueryVariables>;
export function refetchEmployeesQuery(variables?: GEmployeesQueryVariables) {
      return { query: EmployeesDocument, variables: variables }
    }
export const EmployeesDeleteDocument = gql`
    mutation EmployeesDelete($employeeIds: [UUID!]!) {
  employeesDelete(employeeIds: $employeeIds)
}
    `;
export type GEmployeesDeleteMutationFn = Apollo.MutationFunction<GEmployeesDeleteMutation, GEmployeesDeleteMutationVariables>;

/**
 * __useEmployeesDeleteMutation__
 *
 * To run a mutation, you first call `useEmployeesDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEmployeesDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [employeesDeleteMutation, { data, loading, error }] = useEmployeesDeleteMutation({
 *   variables: {
 *      employeeIds: // value for 'employeeIds'
 *   },
 * });
 */
export function useEmployeesDeleteMutation(baseOptions?: Apollo.MutationHookOptions<GEmployeesDeleteMutation, GEmployeesDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GEmployeesDeleteMutation, GEmployeesDeleteMutationVariables>(EmployeesDeleteDocument, options);
      }
export type EmployeesDeleteMutationHookResult = ReturnType<typeof useEmployeesDeleteMutation>;
export type EmployeesDeleteMutationResult = Apollo.MutationResult<GEmployeesDeleteMutation>;
export type EmployeesDeleteMutationOptions = Apollo.BaseMutationOptions<GEmployeesDeleteMutation, GEmployeesDeleteMutationVariables>;
export const EmployeeUpsertDocument = gql`
    mutation EmployeeUpsert($input: EmployeeUpsertInput!, $employeeId: UUID) {
  employeeUpsert(input: $input, employeeId: $employeeId) {
    id
    lastName
    firstName
    patronymic
    isAdmin
    createdAt
    updatedAt
    user {
      email
      createdAt
      updatedAt
      lastActivity
    }
  }
}
    `;
export type GEmployeeUpsertMutationFn = Apollo.MutationFunction<GEmployeeUpsertMutation, GEmployeeUpsertMutationVariables>;

/**
 * __useEmployeeUpsertMutation__
 *
 * To run a mutation, you first call `useEmployeeUpsertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEmployeeUpsertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [employeeUpsertMutation, { data, loading, error }] = useEmployeeUpsertMutation({
 *   variables: {
 *      input: // value for 'input'
 *      employeeId: // value for 'employeeId'
 *   },
 * });
 */
export function useEmployeeUpsertMutation(baseOptions?: Apollo.MutationHookOptions<GEmployeeUpsertMutation, GEmployeeUpsertMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GEmployeeUpsertMutation, GEmployeeUpsertMutationVariables>(EmployeeUpsertDocument, options);
      }
export type EmployeeUpsertMutationHookResult = ReturnType<typeof useEmployeeUpsertMutation>;
export type EmployeeUpsertMutationResult = Apollo.MutationResult<GEmployeeUpsertMutation>;
export type EmployeeUpsertMutationOptions = Apollo.BaseMutationOptions<GEmployeeUpsertMutation, GEmployeeUpsertMutationVariables>;
export const EmployeeDocument = gql`
    query Employee($employeeId: UUID) {
  employee(employeeId: $employeeId) {
    id
    lastName
    firstName
    patronymic
    fullName @client
    isAdmin
    createdAt
    updatedAt
    user {
      email
      createdAt
      updatedAt
      lastActivity
    }
  }
}
    `;

/**
 * __useEmployeeQuery__
 *
 * To run a query within a React component, call `useEmployeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmployeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmployeeQuery({
 *   variables: {
 *      employeeId: // value for 'employeeId'
 *   },
 * });
 */
export function useEmployeeQuery(baseOptions?: Apollo.QueryHookOptions<GEmployeeQuery, GEmployeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GEmployeeQuery, GEmployeeQueryVariables>(EmployeeDocument, options);
      }
export function useEmployeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GEmployeeQuery, GEmployeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GEmployeeQuery, GEmployeeQueryVariables>(EmployeeDocument, options);
        }
export type EmployeeQueryHookResult = ReturnType<typeof useEmployeeQuery>;
export type EmployeeLazyQueryHookResult = ReturnType<typeof useEmployeeLazyQuery>;
export type EmployeeQueryResult = Apollo.QueryResult<GEmployeeQuery, GEmployeeQueryVariables>;
export function refetchEmployeeQuery(variables?: GEmployeeQueryVariables) {
      return { query: EmployeeDocument, variables: variables }
    }
export const ExportDocumentsDocument = gql`
    mutation ExportDocuments($studentId: UUID, $visaRequestId: UUID) {
  exportDocuments(studentId: $studentId, visaRequestId: $visaRequestId) {
    id
    userId
    dir
    name
    ext
    description
    deletedAt
    createdAt
    updatedAt
    url
    user {
      id
    }
  }
}
    `;
export type GExportDocumentsMutationFn = Apollo.MutationFunction<GExportDocumentsMutation, GExportDocumentsMutationVariables>;

/**
 * __useExportDocumentsMutation__
 *
 * To run a mutation, you first call `useExportDocumentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExportDocumentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exportDocumentsMutation, { data, loading, error }] = useExportDocumentsMutation({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      visaRequestId: // value for 'visaRequestId'
 *   },
 * });
 */
export function useExportDocumentsMutation(baseOptions?: Apollo.MutationHookOptions<GExportDocumentsMutation, GExportDocumentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GExportDocumentsMutation, GExportDocumentsMutationVariables>(ExportDocumentsDocument, options);
      }
export type ExportDocumentsMutationHookResult = ReturnType<typeof useExportDocumentsMutation>;
export type ExportDocumentsMutationResult = Apollo.MutationResult<GExportDocumentsMutation>;
export type ExportDocumentsMutationOptions = Apollo.BaseMutationOptions<GExportDocumentsMutation, GExportDocumentsMutationVariables>;
export const NotificationsDocument = gql`
    query Notifications($userId: UUID, $pagination: PaginationInput, $search: String) {
  notifications(userId: $userId, pagination: $pagination, search: $search) {
    ...Notification
  }
}
    ${NotificationFragmentDoc}`;

/**
 * __useNotificationsQuery__
 *
 * To run a query within a React component, call `useNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      pagination: // value for 'pagination'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useNotificationsQuery(baseOptions?: Apollo.QueryHookOptions<GNotificationsQuery, GNotificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GNotificationsQuery, GNotificationsQueryVariables>(NotificationsDocument, options);
      }
export function useNotificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GNotificationsQuery, GNotificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GNotificationsQuery, GNotificationsQueryVariables>(NotificationsDocument, options);
        }
export type NotificationsQueryHookResult = ReturnType<typeof useNotificationsQuery>;
export type NotificationsLazyQueryHookResult = ReturnType<typeof useNotificationsLazyQuery>;
export type NotificationsQueryResult = Apollo.QueryResult<GNotificationsQuery, GNotificationsQueryVariables>;
export function refetchNotificationsQuery(variables?: GNotificationsQueryVariables) {
      return { query: NotificationsDocument, variables: variables }
    }
export const NotificationsTotalCountDocument = gql`
    query NotificationsTotalCount {
  totalCount: notificationsTotalCount
}
    `;

/**
 * __useNotificationsTotalCountQuery__
 *
 * To run a query within a React component, call `useNotificationsTotalCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationsTotalCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationsTotalCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotificationsTotalCountQuery(baseOptions?: Apollo.QueryHookOptions<GNotificationsTotalCountQuery, GNotificationsTotalCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GNotificationsTotalCountQuery, GNotificationsTotalCountQueryVariables>(NotificationsTotalCountDocument, options);
      }
export function useNotificationsTotalCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GNotificationsTotalCountQuery, GNotificationsTotalCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GNotificationsTotalCountQuery, GNotificationsTotalCountQueryVariables>(NotificationsTotalCountDocument, options);
        }
export type NotificationsTotalCountQueryHookResult = ReturnType<typeof useNotificationsTotalCountQuery>;
export type NotificationsTotalCountLazyQueryHookResult = ReturnType<typeof useNotificationsTotalCountLazyQuery>;
export type NotificationsTotalCountQueryResult = Apollo.QueryResult<GNotificationsTotalCountQuery, GNotificationsTotalCountQueryVariables>;
export function refetchNotificationsTotalCountQuery(variables?: GNotificationsTotalCountQueryVariables) {
      return { query: NotificationsTotalCountDocument, variables: variables }
    }
export const NotificationsUnreadCountDocument = gql`
    query NotificationsUnreadCount {
  unreadCount: notificationsUnreadCount
}
    `;

/**
 * __useNotificationsUnreadCountQuery__
 *
 * To run a query within a React component, call `useNotificationsUnreadCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationsUnreadCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationsUnreadCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotificationsUnreadCountQuery(baseOptions?: Apollo.QueryHookOptions<GNotificationsUnreadCountQuery, GNotificationsUnreadCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GNotificationsUnreadCountQuery, GNotificationsUnreadCountQueryVariables>(NotificationsUnreadCountDocument, options);
      }
export function useNotificationsUnreadCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GNotificationsUnreadCountQuery, GNotificationsUnreadCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GNotificationsUnreadCountQuery, GNotificationsUnreadCountQueryVariables>(NotificationsUnreadCountDocument, options);
        }
export type NotificationsUnreadCountQueryHookResult = ReturnType<typeof useNotificationsUnreadCountQuery>;
export type NotificationsUnreadCountLazyQueryHookResult = ReturnType<typeof useNotificationsUnreadCountLazyQuery>;
export type NotificationsUnreadCountQueryResult = Apollo.QueryResult<GNotificationsUnreadCountQuery, GNotificationsUnreadCountQueryVariables>;
export function refetchNotificationsUnreadCountQuery(variables?: GNotificationsUnreadCountQueryVariables) {
      return { query: NotificationsUnreadCountDocument, variables: variables }
    }
export const NotificationDocument = gql`
    query Notification($id: UUID!) {
  notification(notificationId: $id) {
    ...Notification
  }
}
    ${NotificationFragmentDoc}`;

/**
 * __useNotificationQuery__
 *
 * To run a query within a React component, call `useNotificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNotificationQuery(baseOptions: Apollo.QueryHookOptions<GNotificationQuery, GNotificationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GNotificationQuery, GNotificationQueryVariables>(NotificationDocument, options);
      }
export function useNotificationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GNotificationQuery, GNotificationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GNotificationQuery, GNotificationQueryVariables>(NotificationDocument, options);
        }
export type NotificationQueryHookResult = ReturnType<typeof useNotificationQuery>;
export type NotificationLazyQueryHookResult = ReturnType<typeof useNotificationLazyQuery>;
export type NotificationQueryResult = Apollo.QueryResult<GNotificationQuery, GNotificationQueryVariables>;
export function refetchNotificationQuery(variables: GNotificationQueryVariables) {
      return { query: NotificationDocument, variables: variables }
    }
export const NewNotificationDocument = gql`
    subscription NewNotification {
  notificationSubscription {
    ...Notification
  }
}
    ${NotificationFragmentDoc}`;

/**
 * __useNewNotificationSubscription__
 *
 * To run a query within a React component, call `useNewNotificationSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewNotificationSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewNotificationSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewNotificationSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GNewNotificationSubscription, GNewNotificationSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GNewNotificationSubscription, GNewNotificationSubscriptionVariables>(NewNotificationDocument, options);
      }
export type NewNotificationSubscriptionHookResult = ReturnType<typeof useNewNotificationSubscription>;
export type NewNotificationSubscriptionResult = Apollo.SubscriptionResult<GNewNotificationSubscription>;
export const NotificationsSendDocument = gql`
    mutation NotificationsSend($input: NotificationsSendInput!) {
  notificationsSend(input: $input)
}
    `;
export type GNotificationsSendMutationFn = Apollo.MutationFunction<GNotificationsSendMutation, GNotificationsSendMutationVariables>;

/**
 * __useNotificationsSendMutation__
 *
 * To run a mutation, you first call `useNotificationsSendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNotificationsSendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [notificationsSendMutation, { data, loading, error }] = useNotificationsSendMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useNotificationsSendMutation(baseOptions?: Apollo.MutationHookOptions<GNotificationsSendMutation, GNotificationsSendMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GNotificationsSendMutation, GNotificationsSendMutationVariables>(NotificationsSendDocument, options);
      }
export type NotificationsSendMutationHookResult = ReturnType<typeof useNotificationsSendMutation>;
export type NotificationsSendMutationResult = Apollo.MutationResult<GNotificationsSendMutation>;
export type NotificationsSendMutationOptions = Apollo.BaseMutationOptions<GNotificationsSendMutation, GNotificationsSendMutationVariables>;
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
    mutation Registration($input: StudentUpsertInput!) {
  isRegistered: registration(input: $input)
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
export const StudentArrivalNoticeDocument = gql`
    query StudentArrivalNotice($studentId: UUID) {
  studentArrivalNotice(studentId: $studentId) {
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
}
    `;

/**
 * __useStudentArrivalNoticeQuery__
 *
 * To run a query within a React component, call `useStudentArrivalNoticeQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentArrivalNoticeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentArrivalNoticeQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentArrivalNoticeQuery(baseOptions?: Apollo.QueryHookOptions<GStudentArrivalNoticeQuery, GStudentArrivalNoticeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GStudentArrivalNoticeQuery, GStudentArrivalNoticeQueryVariables>(StudentArrivalNoticeDocument, options);
      }
export function useStudentArrivalNoticeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GStudentArrivalNoticeQuery, GStudentArrivalNoticeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GStudentArrivalNoticeQuery, GStudentArrivalNoticeQueryVariables>(StudentArrivalNoticeDocument, options);
        }
export type StudentArrivalNoticeQueryHookResult = ReturnType<typeof useStudentArrivalNoticeQuery>;
export type StudentArrivalNoticeLazyQueryHookResult = ReturnType<typeof useStudentArrivalNoticeLazyQuery>;
export type StudentArrivalNoticeQueryResult = Apollo.QueryResult<GStudentArrivalNoticeQuery, GStudentArrivalNoticeQueryVariables>;
export function refetchStudentArrivalNoticeQuery(variables?: GStudentArrivalNoticeQueryVariables) {
      return { query: StudentArrivalNoticeDocument, variables: variables }
    }
export const StudentArrivalNoticeUpsertDocument = gql`
    mutation StudentArrivalNoticeUpsert($data: StudentArrivalNoticeUpsertInput!, $studentId: UUID) {
  isSuccess: studentArrivalNoticeUpsert(data: $data, studentId: $studentId)
}
    `;
export type GStudentArrivalNoticeUpsertMutationFn = Apollo.MutationFunction<GStudentArrivalNoticeUpsertMutation, GStudentArrivalNoticeUpsertMutationVariables>;

/**
 * __useStudentArrivalNoticeUpsertMutation__
 *
 * To run a mutation, you first call `useStudentArrivalNoticeUpsertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentArrivalNoticeUpsertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentArrivalNoticeUpsertMutation, { data, loading, error }] = useStudentArrivalNoticeUpsertMutation({
 *   variables: {
 *      data: // value for 'data'
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentArrivalNoticeUpsertMutation(baseOptions?: Apollo.MutationHookOptions<GStudentArrivalNoticeUpsertMutation, GStudentArrivalNoticeUpsertMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GStudentArrivalNoticeUpsertMutation, GStudentArrivalNoticeUpsertMutationVariables>(StudentArrivalNoticeUpsertDocument, options);
      }
export type StudentArrivalNoticeUpsertMutationHookResult = ReturnType<typeof useStudentArrivalNoticeUpsertMutation>;
export type StudentArrivalNoticeUpsertMutationResult = Apollo.MutationResult<GStudentArrivalNoticeUpsertMutation>;
export type StudentArrivalNoticeUpsertMutationOptions = Apollo.BaseMutationOptions<GStudentArrivalNoticeUpsertMutation, GStudentArrivalNoticeUpsertMutationVariables>;
export const StudentArrivalNoticeDeleteDocument = gql`
    mutation StudentArrivalNoticeDelete($studentId: UUID!) {
  isDeleted: studentArrivalNoticeDelete(studentId: $studentId)
}
    `;
export type GStudentArrivalNoticeDeleteMutationFn = Apollo.MutationFunction<GStudentArrivalNoticeDeleteMutation, GStudentArrivalNoticeDeleteMutationVariables>;

/**
 * __useStudentArrivalNoticeDeleteMutation__
 *
 * To run a mutation, you first call `useStudentArrivalNoticeDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentArrivalNoticeDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentArrivalNoticeDeleteMutation, { data, loading, error }] = useStudentArrivalNoticeDeleteMutation({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentArrivalNoticeDeleteMutation(baseOptions?: Apollo.MutationHookOptions<GStudentArrivalNoticeDeleteMutation, GStudentArrivalNoticeDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GStudentArrivalNoticeDeleteMutation, GStudentArrivalNoticeDeleteMutationVariables>(StudentArrivalNoticeDeleteDocument, options);
      }
export type StudentArrivalNoticeDeleteMutationHookResult = ReturnType<typeof useStudentArrivalNoticeDeleteMutation>;
export type StudentArrivalNoticeDeleteMutationResult = Apollo.MutationResult<GStudentArrivalNoticeDeleteMutation>;
export type StudentArrivalNoticeDeleteMutationOptions = Apollo.BaseMutationOptions<GStudentArrivalNoticeDeleteMutation, GStudentArrivalNoticeDeleteMutationVariables>;
export const StudentCloseRelativesDocument = gql`
    query StudentCloseRelatives($studentId: UUID) {
  studentCloseRelatives(studentId: $studentId) {
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
}
    `;

/**
 * __useStudentCloseRelativesQuery__
 *
 * To run a query within a React component, call `useStudentCloseRelativesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentCloseRelativesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentCloseRelativesQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentCloseRelativesQuery(baseOptions?: Apollo.QueryHookOptions<GStudentCloseRelativesQuery, GStudentCloseRelativesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GStudentCloseRelativesQuery, GStudentCloseRelativesQueryVariables>(StudentCloseRelativesDocument, options);
      }
export function useStudentCloseRelativesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GStudentCloseRelativesQuery, GStudentCloseRelativesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GStudentCloseRelativesQuery, GStudentCloseRelativesQueryVariables>(StudentCloseRelativesDocument, options);
        }
export type StudentCloseRelativesQueryHookResult = ReturnType<typeof useStudentCloseRelativesQuery>;
export type StudentCloseRelativesLazyQueryHookResult = ReturnType<typeof useStudentCloseRelativesLazyQuery>;
export type StudentCloseRelativesQueryResult = Apollo.QueryResult<GStudentCloseRelativesQuery, GStudentCloseRelativesQueryVariables>;
export function refetchStudentCloseRelativesQuery(variables?: GStudentCloseRelativesQueryVariables) {
      return { query: StudentCloseRelativesDocument, variables: variables }
    }
export const StudentCloseRelativeDocument = gql`
    query StudentCloseRelative($closeRelativeId: UUID!) {
  studentCloseRelative(closeRelativeId: $closeRelativeId) {
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
}
    `;

/**
 * __useStudentCloseRelativeQuery__
 *
 * To run a query within a React component, call `useStudentCloseRelativeQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentCloseRelativeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentCloseRelativeQuery({
 *   variables: {
 *      closeRelativeId: // value for 'closeRelativeId'
 *   },
 * });
 */
export function useStudentCloseRelativeQuery(baseOptions: Apollo.QueryHookOptions<GStudentCloseRelativeQuery, GStudentCloseRelativeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GStudentCloseRelativeQuery, GStudentCloseRelativeQueryVariables>(StudentCloseRelativeDocument, options);
      }
export function useStudentCloseRelativeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GStudentCloseRelativeQuery, GStudentCloseRelativeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GStudentCloseRelativeQuery, GStudentCloseRelativeQueryVariables>(StudentCloseRelativeDocument, options);
        }
export type StudentCloseRelativeQueryHookResult = ReturnType<typeof useStudentCloseRelativeQuery>;
export type StudentCloseRelativeLazyQueryHookResult = ReturnType<typeof useStudentCloseRelativeLazyQuery>;
export type StudentCloseRelativeQueryResult = Apollo.QueryResult<GStudentCloseRelativeQuery, GStudentCloseRelativeQueryVariables>;
export function refetchStudentCloseRelativeQuery(variables: GStudentCloseRelativeQueryVariables) {
      return { query: StudentCloseRelativeDocument, variables: variables }
    }
export const StudentCloseRelativeUpsertDocument = gql`
    mutation StudentCloseRelativeUpsert($data: StudentCloseRelativeUpsertInput!) {
  isSuccess: studentCloseRelativeUpsert(data: $data)
}
    `;
export type GStudentCloseRelativeUpsertMutationFn = Apollo.MutationFunction<GStudentCloseRelativeUpsertMutation, GStudentCloseRelativeUpsertMutationVariables>;

/**
 * __useStudentCloseRelativeUpsertMutation__
 *
 * To run a mutation, you first call `useStudentCloseRelativeUpsertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentCloseRelativeUpsertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentCloseRelativeUpsertMutation, { data, loading, error }] = useStudentCloseRelativeUpsertMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useStudentCloseRelativeUpsertMutation(baseOptions?: Apollo.MutationHookOptions<GStudentCloseRelativeUpsertMutation, GStudentCloseRelativeUpsertMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GStudentCloseRelativeUpsertMutation, GStudentCloseRelativeUpsertMutationVariables>(StudentCloseRelativeUpsertDocument, options);
      }
export type StudentCloseRelativeUpsertMutationHookResult = ReturnType<typeof useStudentCloseRelativeUpsertMutation>;
export type StudentCloseRelativeUpsertMutationResult = Apollo.MutationResult<GStudentCloseRelativeUpsertMutation>;
export type StudentCloseRelativeUpsertMutationOptions = Apollo.BaseMutationOptions<GStudentCloseRelativeUpsertMutation, GStudentCloseRelativeUpsertMutationVariables>;
export const StudentCloseRelativeDeleteDocument = gql`
    mutation StudentCloseRelativeDelete($closeRelativeIds: [UUID!]!) {
  deletedCount: studentCloseRelativeDelete(closeRelativeIds: $closeRelativeIds)
}
    `;
export type GStudentCloseRelativeDeleteMutationFn = Apollo.MutationFunction<GStudentCloseRelativeDeleteMutation, GStudentCloseRelativeDeleteMutationVariables>;

/**
 * __useStudentCloseRelativeDeleteMutation__
 *
 * To run a mutation, you first call `useStudentCloseRelativeDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentCloseRelativeDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentCloseRelativeDeleteMutation, { data, loading, error }] = useStudentCloseRelativeDeleteMutation({
 *   variables: {
 *      closeRelativeIds: // value for 'closeRelativeIds'
 *   },
 * });
 */
export function useStudentCloseRelativeDeleteMutation(baseOptions?: Apollo.MutationHookOptions<GStudentCloseRelativeDeleteMutation, GStudentCloseRelativeDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GStudentCloseRelativeDeleteMutation, GStudentCloseRelativeDeleteMutationVariables>(StudentCloseRelativeDeleteDocument, options);
      }
export type StudentCloseRelativeDeleteMutationHookResult = ReturnType<typeof useStudentCloseRelativeDeleteMutation>;
export type StudentCloseRelativeDeleteMutationResult = Apollo.MutationResult<GStudentCloseRelativeDeleteMutation>;
export type StudentCloseRelativeDeleteMutationOptions = Apollo.BaseMutationOptions<GStudentCloseRelativeDeleteMutation, GStudentCloseRelativeDeleteMutationVariables>;
export const StudentMigrationCardDocument = gql`
    query StudentMigrationCard($studentId: UUID) {
  studentMigrationCard(studentId: $studentId) {
    id
    studentId
    series
    number
    issueDate
    expirationDate
  }
}
    `;

/**
 * __useStudentMigrationCardQuery__
 *
 * To run a query within a React component, call `useStudentMigrationCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentMigrationCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentMigrationCardQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentMigrationCardQuery(baseOptions?: Apollo.QueryHookOptions<GStudentMigrationCardQuery, GStudentMigrationCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GStudentMigrationCardQuery, GStudentMigrationCardQueryVariables>(StudentMigrationCardDocument, options);
      }
export function useStudentMigrationCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GStudentMigrationCardQuery, GStudentMigrationCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GStudentMigrationCardQuery, GStudentMigrationCardQueryVariables>(StudentMigrationCardDocument, options);
        }
export type StudentMigrationCardQueryHookResult = ReturnType<typeof useStudentMigrationCardQuery>;
export type StudentMigrationCardLazyQueryHookResult = ReturnType<typeof useStudentMigrationCardLazyQuery>;
export type StudentMigrationCardQueryResult = Apollo.QueryResult<GStudentMigrationCardQuery, GStudentMigrationCardQueryVariables>;
export function refetchStudentMigrationCardQuery(variables?: GStudentMigrationCardQueryVariables) {
      return { query: StudentMigrationCardDocument, variables: variables }
    }
export const StudentMigrationCardDeleteDocument = gql`
    mutation StudentMigrationCardDelete($studentId: UUID!) {
  studentMigrationCardDelete(studentId: $studentId)
}
    `;
export type GStudentMigrationCardDeleteMutationFn = Apollo.MutationFunction<GStudentMigrationCardDeleteMutation, GStudentMigrationCardDeleteMutationVariables>;

/**
 * __useStudentMigrationCardDeleteMutation__
 *
 * To run a mutation, you first call `useStudentMigrationCardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentMigrationCardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentMigrationCardDeleteMutation, { data, loading, error }] = useStudentMigrationCardDeleteMutation({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentMigrationCardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<GStudentMigrationCardDeleteMutation, GStudentMigrationCardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GStudentMigrationCardDeleteMutation, GStudentMigrationCardDeleteMutationVariables>(StudentMigrationCardDeleteDocument, options);
      }
export type StudentMigrationCardDeleteMutationHookResult = ReturnType<typeof useStudentMigrationCardDeleteMutation>;
export type StudentMigrationCardDeleteMutationResult = Apollo.MutationResult<GStudentMigrationCardDeleteMutation>;
export type StudentMigrationCardDeleteMutationOptions = Apollo.BaseMutationOptions<GStudentMigrationCardDeleteMutation, GStudentMigrationCardDeleteMutationVariables>;
export const StudentMigrationCardUpsertDocument = gql`
    mutation StudentMigrationCardUpsert($data: StudentMigrationCardUpsertInput!, $studentId: UUID) {
  studentMigrationCardUpsert(data: $data, studentId: $studentId)
}
    `;
export type GStudentMigrationCardUpsertMutationFn = Apollo.MutationFunction<GStudentMigrationCardUpsertMutation, GStudentMigrationCardUpsertMutationVariables>;

/**
 * __useStudentMigrationCardUpsertMutation__
 *
 * To run a mutation, you first call `useStudentMigrationCardUpsertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentMigrationCardUpsertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentMigrationCardUpsertMutation, { data, loading, error }] = useStudentMigrationCardUpsertMutation({
 *   variables: {
 *      data: // value for 'data'
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentMigrationCardUpsertMutation(baseOptions?: Apollo.MutationHookOptions<GStudentMigrationCardUpsertMutation, GStudentMigrationCardUpsertMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GStudentMigrationCardUpsertMutation, GStudentMigrationCardUpsertMutationVariables>(StudentMigrationCardUpsertDocument, options);
      }
export type StudentMigrationCardUpsertMutationHookResult = ReturnType<typeof useStudentMigrationCardUpsertMutation>;
export type StudentMigrationCardUpsertMutationResult = Apollo.MutationResult<GStudentMigrationCardUpsertMutation>;
export type StudentMigrationCardUpsertMutationOptions = Apollo.BaseMutationOptions<GStudentMigrationCardUpsertMutation, GStudentMigrationCardUpsertMutationVariables>;
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
export const StudentPassportUpsertDocument = gql`
    mutation StudentPassportUpsert($data: StudentPassportUpsertInput!, $studentId: UUID) {
  isSuccess: studentPassportUpsert(data: $data, studentId: $studentId)
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
export const StudentPassportDeleteDocument = gql`
    mutation StudentPassportDelete($studentId: UUID!) {
  isDeleted: studentPassportDelete(studentId: $studentId)
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
export const StudentVisaDocument = gql`
    query StudentVisa($studentId: UUID) {
  studentVisa(studentId: $studentId) {
    id
    studentId
    blankSeries
    number
    issueDate
    expirationDate
    invitationNumber
  }
}
    `;

/**
 * __useStudentVisaQuery__
 *
 * To run a query within a React component, call `useStudentVisaQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentVisaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentVisaQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentVisaQuery(baseOptions?: Apollo.QueryHookOptions<GStudentVisaQuery, GStudentVisaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GStudentVisaQuery, GStudentVisaQueryVariables>(StudentVisaDocument, options);
      }
export function useStudentVisaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GStudentVisaQuery, GStudentVisaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GStudentVisaQuery, GStudentVisaQueryVariables>(StudentVisaDocument, options);
        }
export type StudentVisaQueryHookResult = ReturnType<typeof useStudentVisaQuery>;
export type StudentVisaLazyQueryHookResult = ReturnType<typeof useStudentVisaLazyQuery>;
export type StudentVisaQueryResult = Apollo.QueryResult<GStudentVisaQuery, GStudentVisaQueryVariables>;
export function refetchStudentVisaQuery(variables?: GStudentVisaQueryVariables) {
      return { query: StudentVisaDocument, variables: variables }
    }
export const StudentVisaDeleteDocument = gql`
    mutation StudentVisaDelete($studentId: UUID!) {
  studentVisaDelete(studentId: $studentId)
}
    `;
export type GStudentVisaDeleteMutationFn = Apollo.MutationFunction<GStudentVisaDeleteMutation, GStudentVisaDeleteMutationVariables>;

/**
 * __useStudentVisaDeleteMutation__
 *
 * To run a mutation, you first call `useStudentVisaDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentVisaDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentVisaDeleteMutation, { data, loading, error }] = useStudentVisaDeleteMutation({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentVisaDeleteMutation(baseOptions?: Apollo.MutationHookOptions<GStudentVisaDeleteMutation, GStudentVisaDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GStudentVisaDeleteMutation, GStudentVisaDeleteMutationVariables>(StudentVisaDeleteDocument, options);
      }
export type StudentVisaDeleteMutationHookResult = ReturnType<typeof useStudentVisaDeleteMutation>;
export type StudentVisaDeleteMutationResult = Apollo.MutationResult<GStudentVisaDeleteMutation>;
export type StudentVisaDeleteMutationOptions = Apollo.BaseMutationOptions<GStudentVisaDeleteMutation, GStudentVisaDeleteMutationVariables>;
export const StudentVisaUpsertDocument = gql`
    mutation StudentVisaUpsert($data: StudentVisaUpsertInput!, $studentId: UUID) {
  studentVisaUpsert(data: $data, studentId: $studentId)
}
    `;
export type GStudentVisaUpsertMutationFn = Apollo.MutationFunction<GStudentVisaUpsertMutation, GStudentVisaUpsertMutationVariables>;

/**
 * __useStudentVisaUpsertMutation__
 *
 * To run a mutation, you first call `useStudentVisaUpsertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentVisaUpsertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentVisaUpsertMutation, { data, loading, error }] = useStudentVisaUpsertMutation({
 *   variables: {
 *      data: // value for 'data'
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentVisaUpsertMutation(baseOptions?: Apollo.MutationHookOptions<GStudentVisaUpsertMutation, GStudentVisaUpsertMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GStudentVisaUpsertMutation, GStudentVisaUpsertMutationVariables>(StudentVisaUpsertDocument, options);
      }
export type StudentVisaUpsertMutationHookResult = ReturnType<typeof useStudentVisaUpsertMutation>;
export type StudentVisaUpsertMutationResult = Apollo.MutationResult<GStudentVisaUpsertMutation>;
export type StudentVisaUpsertMutationOptions = Apollo.BaseMutationOptions<GStudentVisaUpsertMutation, GStudentVisaUpsertMutationVariables>;
export const StudentsDocument = gql`
    query Students {
  students {
    initials @client
    fullName @client
    id
    phone
    curator
    faculty
    course
    group
    createdAt
    updatedAt
    user {
      id
      email
      lastActivity
      createdAt
      updatedAt
    }
    arrivalNotice {
      id
      createdAt
      updatedAt
    }
    migrationCard {
      id
      createdAt
      updatedAt
    }
    visa {
      id
      createdAt
      updatedAt
    }
    passport {
      id
      lastName
      firstName
      patronymic
      birthDate
      birthPlace
      gender
      citizenship
      createdAt
      updatedAt
    }
    closeRelatives {
      id
      createdAt
      updatedAt
    }
    visaRequests {
      id
      createdAt
      updatedAt
    }
    _count {
      closeRelatives
      visaRequests
    }
  }
}
    `;

/**
 * __useStudentsQuery__
 *
 * To run a query within a React component, call `useStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useStudentsQuery(baseOptions?: Apollo.QueryHookOptions<GStudentsQuery, GStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GStudentsQuery, GStudentsQueryVariables>(StudentsDocument, options);
      }
export function useStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GStudentsQuery, GStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GStudentsQuery, GStudentsQueryVariables>(StudentsDocument, options);
        }
export type StudentsQueryHookResult = ReturnType<typeof useStudentsQuery>;
export type StudentsLazyQueryHookResult = ReturnType<typeof useStudentsLazyQuery>;
export type StudentsQueryResult = Apollo.QueryResult<GStudentsQuery, GStudentsQueryVariables>;
export function refetchStudentsQuery(variables?: GStudentsQueryVariables) {
      return { query: StudentsDocument, variables: variables }
    }
export const StudentDocument = gql`
    query Student($studentId: UUID) {
  student(studentId: $studentId) {
    id
    phone
    curator
    faculty
    course
    group
    createdAt
    updatedAt
    initials @client
    fullName @client
    user {
      id
      email
      lastActivity
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
  }
}
    `;

/**
 * __useStudentQuery__
 *
 * To run a query within a React component, call `useStudentQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentQuery(baseOptions?: Apollo.QueryHookOptions<GStudentQuery, GStudentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GStudentQuery, GStudentQueryVariables>(StudentDocument, options);
      }
export function useStudentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GStudentQuery, GStudentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GStudentQuery, GStudentQueryVariables>(StudentDocument, options);
        }
export type StudentQueryHookResult = ReturnType<typeof useStudentQuery>;
export type StudentLazyQueryHookResult = ReturnType<typeof useStudentLazyQuery>;
export type StudentQueryResult = Apollo.QueryResult<GStudentQuery, GStudentQueryVariables>;
export function refetchStudentQuery(variables?: GStudentQueryVariables) {
      return { query: StudentDocument, variables: variables }
    }
export const StudentUpsertDocument = gql`
    mutation StudentUpsert($studentId: UUID, $input: StudentUpsertInput!) {
  isUpserted: studentUpsert(studentId: $studentId, input: $input)
}
    `;
export type GStudentUpsertMutationFn = Apollo.MutationFunction<GStudentUpsertMutation, GStudentUpsertMutationVariables>;

/**
 * __useStudentUpsertMutation__
 *
 * To run a mutation, you first call `useStudentUpsertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentUpsertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentUpsertMutation, { data, loading, error }] = useStudentUpsertMutation({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStudentUpsertMutation(baseOptions?: Apollo.MutationHookOptions<GStudentUpsertMutation, GStudentUpsertMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GStudentUpsertMutation, GStudentUpsertMutationVariables>(StudentUpsertDocument, options);
      }
export type StudentUpsertMutationHookResult = ReturnType<typeof useStudentUpsertMutation>;
export type StudentUpsertMutationResult = Apollo.MutationResult<GStudentUpsertMutation>;
export type StudentUpsertMutationOptions = Apollo.BaseMutationOptions<GStudentUpsertMutation, GStudentUpsertMutationVariables>;
export const StudentsDeleteDocument = gql`
    mutation StudentsDelete($ids: [UUID!]!) {
  deletedCount: studentsDelete(ids: $ids)
}
    `;
export type GStudentsDeleteMutationFn = Apollo.MutationFunction<GStudentsDeleteMutation, GStudentsDeleteMutationVariables>;

/**
 * __useStudentsDeleteMutation__
 *
 * To run a mutation, you first call `useStudentsDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentsDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentsDeleteMutation, { data, loading, error }] = useStudentsDeleteMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useStudentsDeleteMutation(baseOptions?: Apollo.MutationHookOptions<GStudentsDeleteMutation, GStudentsDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GStudentsDeleteMutation, GStudentsDeleteMutationVariables>(StudentsDeleteDocument, options);
      }
export type StudentsDeleteMutationHookResult = ReturnType<typeof useStudentsDeleteMutation>;
export type StudentsDeleteMutationResult = Apollo.MutationResult<GStudentsDeleteMutation>;
export type StudentsDeleteMutationOptions = Apollo.BaseMutationOptions<GStudentsDeleteMutation, GStudentsDeleteMutationVariables>;
export const VisaRequestsDocument = gql`
    query VisaRequests($studentId: UUID) {
  visaRequests(studentId: $studentId) {
    ...VisaRequest
  }
}
    ${VisaRequestFragmentDoc}`;

/**
 * __useVisaRequestsQuery__
 *
 * To run a query within a React component, call `useVisaRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useVisaRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVisaRequestsQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useVisaRequestsQuery(baseOptions?: Apollo.QueryHookOptions<GVisaRequestsQuery, GVisaRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GVisaRequestsQuery, GVisaRequestsQueryVariables>(VisaRequestsDocument, options);
      }
export function useVisaRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GVisaRequestsQuery, GVisaRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GVisaRequestsQuery, GVisaRequestsQueryVariables>(VisaRequestsDocument, options);
        }
export type VisaRequestsQueryHookResult = ReturnType<typeof useVisaRequestsQuery>;
export type VisaRequestsLazyQueryHookResult = ReturnType<typeof useVisaRequestsLazyQuery>;
export type VisaRequestsQueryResult = Apollo.QueryResult<GVisaRequestsQuery, GVisaRequestsQueryVariables>;
export function refetchVisaRequestsQuery(variables?: GVisaRequestsQueryVariables) {
      return { query: VisaRequestsDocument, variables: variables }
    }
export const VisaRequestDocument = gql`
    query VisaRequest($studentId: UUID, $visaRequestId: UUID) {
  visaRequest(studentId: $studentId, visaRequestId: $visaRequestId) {
    ...VisaRequest
  }
}
    ${VisaRequestFragmentDoc}`;

/**
 * __useVisaRequestQuery__
 *
 * To run a query within a React component, call `useVisaRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useVisaRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVisaRequestQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      visaRequestId: // value for 'visaRequestId'
 *   },
 * });
 */
export function useVisaRequestQuery(baseOptions?: Apollo.QueryHookOptions<GVisaRequestQuery, GVisaRequestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GVisaRequestQuery, GVisaRequestQueryVariables>(VisaRequestDocument, options);
      }
export function useVisaRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GVisaRequestQuery, GVisaRequestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GVisaRequestQuery, GVisaRequestQueryVariables>(VisaRequestDocument, options);
        }
export type VisaRequestQueryHookResult = ReturnType<typeof useVisaRequestQuery>;
export type VisaRequestLazyQueryHookResult = ReturnType<typeof useVisaRequestLazyQuery>;
export type VisaRequestQueryResult = Apollo.QueryResult<GVisaRequestQuery, GVisaRequestQueryVariables>;
export function refetchVisaRequestQuery(variables?: GVisaRequestQueryVariables) {
      return { query: VisaRequestDocument, variables: variables }
    }
export const VisaRequestUpsertDocument = gql`
    mutation visaRequestUpsert($input: StudentVisaRequestUpsertInput!, $isForceCreate: Boolean, $studentId: UUID, $visaRequestId: UUID) {
  visaRequestUpsert(
    input: $input
    isForceCreate: $isForceCreate
    studentId: $studentId
    visaRequestId: $visaRequestId
  ) {
    ...VisaRequest
  }
}
    ${VisaRequestFragmentDoc}`;
export type GVisaRequestUpsertMutationFn = Apollo.MutationFunction<GVisaRequestUpsertMutation, GVisaRequestUpsertMutationVariables>;

/**
 * __useVisaRequestUpsertMutation__
 *
 * To run a mutation, you first call `useVisaRequestUpsertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVisaRequestUpsertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [visaRequestUpsertMutation, { data, loading, error }] = useVisaRequestUpsertMutation({
 *   variables: {
 *      input: // value for 'input'
 *      isForceCreate: // value for 'isForceCreate'
 *      studentId: // value for 'studentId'
 *      visaRequestId: // value for 'visaRequestId'
 *   },
 * });
 */
export function useVisaRequestUpsertMutation(baseOptions?: Apollo.MutationHookOptions<GVisaRequestUpsertMutation, GVisaRequestUpsertMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GVisaRequestUpsertMutation, GVisaRequestUpsertMutationVariables>(VisaRequestUpsertDocument, options);
      }
export type VisaRequestUpsertMutationHookResult = ReturnType<typeof useVisaRequestUpsertMutation>;
export type VisaRequestUpsertMutationResult = Apollo.MutationResult<GVisaRequestUpsertMutation>;
export type VisaRequestUpsertMutationOptions = Apollo.BaseMutationOptions<GVisaRequestUpsertMutation, GVisaRequestUpsertMutationVariables>;
export const VisaRequestDeleteDocument = gql`
    mutation VisaRequestDelete($visaRequestId: UUID, $studentId: UUID) {
  visaRequestDelete(visaRequestId: $visaRequestId, studentId: $studentId) {
    id
  }
}
    `;
export type GVisaRequestDeleteMutationFn = Apollo.MutationFunction<GVisaRequestDeleteMutation, GVisaRequestDeleteMutationVariables>;

/**
 * __useVisaRequestDeleteMutation__
 *
 * To run a mutation, you first call `useVisaRequestDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVisaRequestDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [visaRequestDeleteMutation, { data, loading, error }] = useVisaRequestDeleteMutation({
 *   variables: {
 *      visaRequestId: // value for 'visaRequestId'
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useVisaRequestDeleteMutation(baseOptions?: Apollo.MutationHookOptions<GVisaRequestDeleteMutation, GVisaRequestDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GVisaRequestDeleteMutation, GVisaRequestDeleteMutationVariables>(VisaRequestDeleteDocument, options);
      }
export type VisaRequestDeleteMutationHookResult = ReturnType<typeof useVisaRequestDeleteMutation>;
export type VisaRequestDeleteMutationResult = Apollo.MutationResult<GVisaRequestDeleteMutation>;
export type VisaRequestDeleteMutationOptions = Apollo.BaseMutationOptions<GVisaRequestDeleteMutation, GVisaRequestDeleteMutationVariables>;