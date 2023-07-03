-- DropForeignKey
ALTER TABLE "EmployeeEntity" DROP CONSTRAINT "EmployeeEntity_id_fkey";

-- DropForeignKey
ALTER TABLE "NotificationToUserEntity" DROP CONSTRAINT "NotificationToUserEntity_notificationId_fkey";

-- DropForeignKey
ALTER TABLE "NotificationToUserEntity" DROP CONSTRAINT "NotificationToUserEntity_userId_fkey";

-- DropForeignKey
ALTER TABLE "StudentArrivalNoticeEntity" DROP CONSTRAINT "StudentArrivalNoticeEntity_studentId_fkey";

-- DropForeignKey
ALTER TABLE "StudentCloseRelativeEntity" DROP CONSTRAINT "StudentCloseRelativeEntity_studentId_fkey";

-- DropForeignKey
ALTER TABLE "StudentEntity" DROP CONSTRAINT "StudentEntity_id_fkey";

-- DropForeignKey
ALTER TABLE "StudentMigrationCardEntity" DROP CONSTRAINT "StudentMigrationCardEntity_studentId_fkey";

-- DropForeignKey
ALTER TABLE "StudentPassportEntity" DROP CONSTRAINT "StudentPassportEntity_studentId_fkey";

-- DropForeignKey
ALTER TABLE "StudentVisaEntity" DROP CONSTRAINT "StudentVisaEntity_studentId_fkey";

-- DropForeignKey
ALTER TABLE "StudentVisaRequestEntity" DROP CONSTRAINT "StudentVisaRequestEntity_studentId_fkey";

-- AddForeignKey
ALTER TABLE "EmployeeEntity" ADD CONSTRAINT "EmployeeEntity_id_fkey" FOREIGN KEY ("id") REFERENCES "UserEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationToUserEntity" ADD CONSTRAINT "NotificationToUserEntity_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "NotificationEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationToUserEntity" ADD CONSTRAINT "NotificationToUserEntity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentEntity" ADD CONSTRAINT "StudentEntity_id_fkey" FOREIGN KEY ("id") REFERENCES "UserEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentCloseRelativeEntity" ADD CONSTRAINT "StudentCloseRelativeEntity_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentArrivalNoticeEntity" ADD CONSTRAINT "StudentArrivalNoticeEntity_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentMigrationCardEntity" ADD CONSTRAINT "StudentMigrationCardEntity_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentVisaEntity" ADD CONSTRAINT "StudentVisaEntity_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentPassportEntity" ADD CONSTRAINT "StudentPassportEntity_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentVisaRequestEntity" ADD CONSTRAINT "StudentVisaRequestEntity_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
