-- AlterTable
ALTER TABLE "ConfirmationEmailEntity" RENAME CONSTRAINT "confirmation_email_pkey" TO "ConfirmationEmailEntity_pkey";

-- AlterTable
ALTER TABLE "ConfirmationPhoneEntity" RENAME CONSTRAINT "confirmation_phone_pkey" TO "ConfirmationPhoneEntity_pkey";

-- AlterTable
ALTER TABLE "EmployeeEntity" RENAME CONSTRAINT "employee_pkey" TO "EmployeeEntity_pkey";

-- AlterTable
ALTER TABLE "FileEntity" RENAME CONSTRAINT "file_store_pkey" TO "FileEntity_pkey";

-- AlterTable
ALTER TABLE "NotificationEntity" RENAME CONSTRAINT "notification_pkey" TO "NotificationEntity_pkey";

-- AlterTable
ALTER TABLE "NotificationToUserEntity" RENAME CONSTRAINT "notification_to_user_pkey" TO "NotificationToUserEntity_pkey";

-- AlterTable
ALTER TABLE "StudentArrivalNoticeEntity" RENAME CONSTRAINT "student_arrival_notice_pkey" TO "StudentArrivalNoticeEntity_pkey";

-- AlterTable
ALTER TABLE "StudentCloseRelativeEntity" RENAME CONSTRAINT "student_close_relative_pkey" TO "StudentCloseRelativeEntity_pkey";

-- AlterTable
ALTER TABLE "StudentEntity" RENAME CONSTRAINT "student_pkey" TO "StudentEntity_pkey";

-- AlterTable
ALTER TABLE "StudentMigrationCardEntity" RENAME CONSTRAINT "student_migration_card_pkey" TO "StudentMigrationCardEntity_pkey";

-- AlterTable
ALTER TABLE "StudentPassportEntity" RENAME CONSTRAINT "student_passport_pkey" TO "StudentPassportEntity_pkey";

-- AlterTable
ALTER TABLE "StudentVisaEntity" RENAME CONSTRAINT "student_visa_pkey" TO "StudentVisaEntity_pkey";

-- AlterTable
ALTER TABLE "StudentVisaRequestEntity" RENAME CONSTRAINT "student_visa_request_pkey" TO "StudentVisaRequestEntity_pkey";

-- AlterTable
ALTER TABLE "UserEntity" RENAME CONSTRAINT "user_pkey" TO "UserEntity_pkey";

-- RenameForeignKey
ALTER TABLE "EmployeeEntity" RENAME CONSTRAINT "employee_id_user_fkey" TO "EmployeeEntity_id_fkey";

-- RenameForeignKey
ALTER TABLE "FileEntity" RENAME CONSTRAINT "file_store_userId_fkey" TO "FileEntity_userId_fkey";

-- RenameForeignKey
ALTER TABLE "NotificationToUserEntity" RENAME CONSTRAINT "notification_to_user_id_notification_fkey" TO "NotificationToUserEntity_notificationId_fkey";

-- RenameForeignKey
ALTER TABLE "NotificationToUserEntity" RENAME CONSTRAINT "notification_to_user_id_user_fkey" TO "NotificationToUserEntity_userId_fkey";

-- RenameForeignKey
ALTER TABLE "StudentArrivalNoticeEntity" RENAME CONSTRAINT "student_arrival_notice_id_student_fkey" TO "StudentArrivalNoticeEntity_studentId_fkey";

-- RenameForeignKey
ALTER TABLE "StudentCloseRelativeEntity" RENAME CONSTRAINT "student_close_relative_id_student_fkey" TO "StudentCloseRelativeEntity_studentId_fkey";

-- RenameForeignKey
ALTER TABLE "StudentEntity" RENAME CONSTRAINT "student_id_user_fkey" TO "StudentEntity_id_fkey";

-- RenameForeignKey
ALTER TABLE "StudentMigrationCardEntity" RENAME CONSTRAINT "student_migration_card_id_student_fkey" TO "StudentMigrationCardEntity_studentId_fkey";

-- RenameForeignKey
ALTER TABLE "StudentPassportEntity" RENAME CONSTRAINT "student_passport_id_student_fkey" TO "StudentPassportEntity_studentId_fkey";

-- RenameForeignKey
ALTER TABLE "StudentVisaEntity" RENAME CONSTRAINT "student_visa_id_student_fkey" TO "StudentVisaEntity_studentId_fkey";

-- RenameForeignKey
ALTER TABLE "StudentVisaRequestEntity" RENAME CONSTRAINT "student_visa_request_studentId_fkey" TO "StudentVisaRequestEntity_studentId_fkey";

-- RenameIndex
ALTER INDEX "employee_id_user_key" RENAME TO "EmployeeEntity_id_key";

-- RenameIndex
ALTER INDEX "student_arrival_notice_id_student_key" RENAME TO "StudentArrivalNoticeEntity_studentId_key";

-- RenameIndex
ALTER INDEX "student_id_user_key" RENAME TO "StudentEntity_id_key";

-- RenameIndex
ALTER INDEX "student_migration_card_id_student_key" RENAME TO "StudentMigrationCardEntity_studentId_key";

-- RenameIndex
ALTER INDEX "student_passport_id_student_key" RENAME TO "StudentPassportEntity_studentId_key";

-- RenameIndex
ALTER INDEX "student_visa_id_student_key" RENAME TO "StudentVisaEntity_studentId_key";

-- RenameIndex
ALTER INDEX "user_email_key" RENAME TO "UserEntity_email_key";
