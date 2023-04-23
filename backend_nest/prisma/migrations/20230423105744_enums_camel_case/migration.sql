/*
  Warnings:

  - The values [MALE,FEMALE] on the enum `GenderEnum` will be removed. If these variants are still used in the database, this will fail.
  - The values [REGULAR_PRIVATE,REGULAR_HUMANITARIAN,REGULAR_BUSINESS,REGULAR_WORKING,REGULAR_TOURIST,REGULAR_GROUP_TRAVEL,REGULAR_STUDY,REGULAR_NATIONAL_ENTRY,TRANSIT,TEMPORARY_RESIDENT] on the enum `VisaCategoryEnum` will be removed. If these variants are still used in the database, this will fail.
  - The values [SINGLE,DOUBLE,MULTIPLE] on the enum `VisaMultiplicityEnum` will be removed. If these variants are still used in the database, this will fail.
  - The values [PENDING,PENDING_CORRECTIONS_BY_STUDENT,VERIFIED,FINISHED] on the enum `VisaRequestStatusEnum` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `deleted_at` on the `confirmation_email` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `confirmation_phone` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `notification_to_user` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `student_arrival_notice` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `student_close_relative` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `student_migration_card` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `student_passport` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `student_visa` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `student_visa_request` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `user` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "GenderEnum_new" AS ENUM ('Male', 'Female');
ALTER TABLE "student_passport" ALTER COLUMN "gender" TYPE "GenderEnum_new" USING ("gender"::text::"GenderEnum_new");
ALTER TYPE "GenderEnum" RENAME TO "GenderEnum_old";
ALTER TYPE "GenderEnum_new" RENAME TO "GenderEnum";
DROP TYPE "GenderEnum_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "VisaCategoryEnum_new" AS ENUM ('RegularPrivate', 'RegularHumanitarian', 'RegularBusiness', 'RegularWorking', 'RegularTourist', 'RegularGroupTravel', 'RegularStudy', 'RegularNationalEntry', 'Transit', 'TemporaryResident');
ALTER TABLE "student_visa_request" ALTER COLUMN "category" TYPE "VisaCategoryEnum_new" USING ("category"::text::"VisaCategoryEnum_new");
ALTER TYPE "VisaCategoryEnum" RENAME TO "VisaCategoryEnum_old";
ALTER TYPE "VisaCategoryEnum_new" RENAME TO "VisaCategoryEnum";
DROP TYPE "VisaCategoryEnum_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "VisaMultiplicityEnum_new" AS ENUM ('Single', 'Double', 'Multiple');
ALTER TABLE "student_visa_request" ALTER COLUMN "multiplicity" TYPE "VisaMultiplicityEnum_new" USING ("multiplicity"::text::"VisaMultiplicityEnum_new");
ALTER TYPE "VisaMultiplicityEnum" RENAME TO "VisaMultiplicityEnum_old";
ALTER TYPE "VisaMultiplicityEnum_new" RENAME TO "VisaMultiplicityEnum";
DROP TYPE "VisaMultiplicityEnum_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "VisaRequestStatusEnum_new" AS ENUM ('Pending', 'PendingCorrectionsByStudent', 'Verified', 'Finished');
ALTER TABLE "student_visa_request" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "student_visa_request" ALTER COLUMN "status" TYPE "VisaRequestStatusEnum_new" USING ("status"::text::"VisaRequestStatusEnum_new");
ALTER TYPE "VisaRequestStatusEnum" RENAME TO "VisaRequestStatusEnum_old";
ALTER TYPE "VisaRequestStatusEnum_new" RENAME TO "VisaRequestStatusEnum";
DROP TYPE "VisaRequestStatusEnum_old";
ALTER TABLE "student_visa_request" ALTER COLUMN "status" SET DEFAULT 'Pending';
COMMIT;

-- AlterTable
ALTER TABLE "confirmation_email" DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "confirmation_phone" DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "employee" DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "notification" DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "notification_to_user" DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "student" DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "student_arrival_notice" DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "student_close_relative" DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "student_migration_card" DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "student_passport" DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "student_visa" DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "student_visa_request" DROP COLUMN "deleted_at",
ALTER COLUMN "status" SET DEFAULT 'Pending';

-- AlterTable
ALTER TABLE "user" DROP COLUMN "deleted_at";
