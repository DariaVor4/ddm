/*
  Warnings:

  - The primary key for the `confirmation_email` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `temporary_token` on the `confirmation_email` table. All the data in the column will be lost.
  - The primary key for the `confirmation_phone` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `temporary_token` on the `confirmation_phone` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "confirmation_email" DROP CONSTRAINT "confirmation_email_pkey",
DROP COLUMN "temporary_token",
ADD COLUMN     "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
ADD CONSTRAINT "confirmation_email_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "confirmation_phone" DROP CONSTRAINT "confirmation_phone_pkey",
DROP COLUMN "temporary_token",
ADD COLUMN     "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
ADD CONSTRAINT "confirmation_phone_pkey" PRIMARY KEY ("id");
