-- CreateEnum
CREATE TYPE "NotificationServiceEnum" AS ENUM ('Web', 'Email', 'Sms', 'Vk', 'Telegram');

-- DropForeignKey
ALTER TABLE "EmployeeEntity" DROP CONSTRAINT "EmployeeEntity_id_fkey";

-- DropForeignKey
ALTER TABLE "NotificationToUserEntity" DROP CONSTRAINT "NotificationToUserEntity_notificationId_fkey";

-- DropForeignKey
ALTER TABLE "NotificationToUserEntity" DROP CONSTRAINT "NotificationToUserEntity_userId_fkey";

-- DropForeignKey
ALTER TABLE "StudentCloseRelativeEntity" DROP CONSTRAINT "StudentCloseRelativeEntity_studentId_fkey";

-- DropForeignKey
ALTER TABLE "StudentEntity" DROP CONSTRAINT "StudentEntity_id_fkey";

-- AlterTable
ALTER TABLE "NotificationEntity" ADD COLUMN     "services" "NotificationServiceEnum"[];

-- AddForeignKey
ALTER TABLE "EmployeeEntity" ADD CONSTRAINT "EmployeeEntity_id_fkey" FOREIGN KEY ("id") REFERENCES "UserEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationToUserEntity" ADD CONSTRAINT "NotificationToUserEntity_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "NotificationEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationToUserEntity" ADD CONSTRAINT "NotificationToUserEntity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentEntity" ADD CONSTRAINT "StudentEntity_id_fkey" FOREIGN KEY ("id") REFERENCES "UserEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentCloseRelativeEntity" ADD CONSTRAINT "StudentCloseRelativeEntity_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
