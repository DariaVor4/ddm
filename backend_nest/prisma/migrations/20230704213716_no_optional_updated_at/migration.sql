/*
  Warnings:

  - Made the column `updatedAt` on table `ConfirmationEmailEntity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `ConfirmationPhoneEntity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `EmployeeEntity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `FileEntity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `NotificationEntity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `NotificationToUserEntity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `StudentArrivalNoticeEntity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `StudentCloseRelativeEntity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `StudentEntity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `StudentMigrationCardEntity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `StudentPassportEntity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `StudentVisaEntity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `StudentVisaRequestEntity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `UserEntity` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ConfirmationEmailEntity" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "ConfirmationPhoneEntity" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "EmployeeEntity" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "FileEntity" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "NotificationEntity" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "NotificationToUserEntity" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "StudentArrivalNoticeEntity" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "StudentCloseRelativeEntity" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "StudentEntity" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "StudentMigrationCardEntity" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "StudentPassportEntity" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "StudentVisaEntity" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "StudentVisaRequestEntity" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "UserEntity" ALTER COLUMN "updatedAt" SET NOT NULL;
