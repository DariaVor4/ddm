import {
  ConfirmationEmailEntity,
  ConfirmationPhoneEntity,
  EmployeeEntity,
  NotificationEntity,
  NotificationToUserEntity,
  StudentArrivalNoticeEntity,
  StudentCloseRelativeEntity,
  StudentEntity,
  StudentMigrationCardEntity,
  StudentPassportEntity,
  StudentVisaEntity,
  StudentVisaRequestEntity,
  UserEntity,
} from '@prisma-client';

export type TUser = UserEntity;
export type TConfirmationEmail = ConfirmationEmailEntity;
export type TConfirmationPhone = ConfirmationPhoneEntity;
export type TEmployee = EmployeeEntity;
export type TNotification = NotificationEntity;
export type TNotificationToUser = NotificationToUserEntity;
export type TStudent = StudentEntity;
export type TStudentCloseRelative = StudentCloseRelativeEntity;
export type TStudentArrivalNotice = StudentArrivalNoticeEntity;
export type TStudentMigrationCard = StudentMigrationCardEntity;
export type TStudentVisa = StudentVisaEntity;
export type TStudentPassport = StudentPassportEntity;
export type TStudentVisaRequest = StudentVisaRequestEntity;
