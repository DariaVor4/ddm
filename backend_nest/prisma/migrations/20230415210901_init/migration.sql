-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateEnum
CREATE TYPE "GenderEnum" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "VisaMultiplicityEnum" AS ENUM ('SINGLE', 'DOUBLE', 'MULTIPLE');

-- CreateEnum
CREATE TYPE "VisaCategoryEnum" AS ENUM ('REGULAR_PRIVATE', 'REGULAR_HUMANITARIAN', 'REGULAR_BUSINESS', 'REGULAR_WORKING', 'REGULAR_TOURIST', 'REGULAR_GROUP_TRAVEL', 'REGULAR_STUDY', 'REGULAR_NATIONAL_ENTRY', 'TRANSIT', 'TEMPORARY_RESIDENT');

-- CreateEnum
CREATE TYPE "VisaRequestStatusEnum" AS ENUM ('PENDING', 'PENDING_CORRECTIONS_BY_STUDENT', 'VERIFIED', 'FINISHED');

-- CreateTable
CREATE TABLE "confirmation_email" (
    "temporary_token" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "email" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "is_confirmed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "confirmation_email_pkey" PRIMARY KEY ("temporary_token")
);

-- CreateTable
CREATE TABLE "confirmation_phone" (
    "temporary_token" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "phone" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "is_confirmed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "confirmation_phone_pkey" PRIMARY KEY ("temporary_token")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token_hash" TEXT,
    "last_activity" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee" (
    "id_user" UUID NOT NULL,
    "last_name" TEXT,
    "first_name" TEXT,
    "patronymic" TEXT,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification_to_user" (
    "id_notification" UUID NOT NULL,
    "id_user" UUID NOT NULL,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "notification_to_user_pkey" PRIMARY KEY ("id_user","id_notification")
);

-- CreateTable
CREATE TABLE "student" (
    "id_user" UUID NOT NULL,
    "phone" TEXT,
    "curator" TEXT,
    "faculty" TEXT,
    "course" INTEGER,
    "group" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "student_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "student_close_relative" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "id_student" UUID NOT NULL,
    "last_name" TEXT,
    "first_name" TEXT,
    "patronymic" TEXT,
    "birth_date" TIMESTAMP(3),
    "citizenship" TEXT,
    "address_continuos_residence" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "student_close_relative_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_arrival_notice" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "id_student" UUID NOT NULL,
    "profession" TEXT,
    "registration_address" TEXT,
    "registration_date" TIMESTAMP(3),
    "registration_expires" TIMESTAMP(3),
    "inviting_side" TEXT,
    "receiving_side" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "student_arrival_notice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_migration_card" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "id_student" UUID NOT NULL,
    "series" TEXT,
    "number" TEXT,
    "issue_date" TIMESTAMP(3),
    "expiration_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "student_migration_card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_visa" (
    "id" TEXT NOT NULL,
    "id_student" UUID NOT NULL,
    "blank_series" TEXT,
    "number" TEXT,
    "issue_date" TIMESTAMP(3),
    "expiration_date" TIMESTAMP(3),
    "invitation_number" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "student_visa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_passport" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "id_student" UUID NOT NULL,
    "last_name" TEXT,
    "first_name" TEXT,
    "patronymic" TEXT,
    "birth_date" TIMESTAMP(3),
    "birth_place" TEXT,
    "gender" "GenderEnum",
    "citizenship" TEXT,
    "series" TEXT,
    "number" TEXT,
    "issue_date" TIMESTAMP(3),
    "issued_by" TEXT,
    "expiration_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "student_passport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_visa_request" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "studentId" UUID NOT NULL,
    "status" "VisaRequestStatusEnum" NOT NULL DEFAULT 'PENDING',
    "employeeComment" TEXT,
    "registration_number" TEXT,
    "category" "VisaCategoryEnum",
    "multiplicity" "VisaMultiplicityEnum",
    "reason" TEXT,
    "address_of_migration_registration" TEXT,
    "estimated_route_of_stay" TEXT,
    "address_in_country_of_continuous_residence" TEXT,
    "place_of_work_or_study_and_employment_position" TEXT,
    "russian_federation_relatives" TEXT,
    "attached_documents" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "student_visa_request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "employee_id_user_key" ON "employee"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "student_id_user_key" ON "student"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "student_arrival_notice_id_student_key" ON "student_arrival_notice"("id_student");

-- CreateIndex
CREATE UNIQUE INDEX "student_migration_card_id_student_key" ON "student_migration_card"("id_student");

-- CreateIndex
CREATE UNIQUE INDEX "student_visa_id_student_key" ON "student_visa"("id_student");

-- CreateIndex
CREATE UNIQUE INDEX "student_passport_id_student_key" ON "student_passport"("id_student");

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notification_to_user" ADD CONSTRAINT "notification_to_user_id_notification_fkey" FOREIGN KEY ("id_notification") REFERENCES "notification"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notification_to_user" ADD CONSTRAINT "notification_to_user_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "student_close_relative" ADD CONSTRAINT "student_close_relative_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "student_arrival_notice" ADD CONSTRAINT "student_arrival_notice_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_migration_card" ADD CONSTRAINT "student_migration_card_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_visa" ADD CONSTRAINT "student_visa_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_passport" ADD CONSTRAINT "student_passport_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_visa_request" ADD CONSTRAINT "student_visa_request_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
