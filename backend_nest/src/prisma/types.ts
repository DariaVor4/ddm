import {
  ConfirmationEmail,
  ConfirmationPhone,
  Employee,
  Notification,
  NotificationToUser,
  Student,
  StudentArrivalNotice,
  StudentCloseRelative,
  StudentMigrationCard,
  StudentPassport,
  StudentVisa,
  StudentVisaRequest,
  User,
} from '@prisma-client';

export type TUser = User;
export type TConfirmationEmail = ConfirmationEmail;
export type TConfirmationPhone = ConfirmationPhone;
export type TEmployee = Employee;
export type TNotification = Notification;
export type TNotificationToUser = NotificationToUser;
export type TStudent = Student;
export type TStudentCloseRelative = StudentCloseRelative;
export type TStudentArrivalNotice = StudentArrivalNotice;
export type TStudentMigrationCard = StudentMigrationCard;
export type TStudentVisa = StudentVisa;
export type TStudentPassport = StudentPassport;
export type TStudentVisaRequest = StudentVisaRequest;
