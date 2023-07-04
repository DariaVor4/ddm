/*
  Warnings:

  - A unique constraint covering the columns `[telegramId]` on the table `UserEntity` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "UserEntity" ADD COLUMN     "telegramId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "UserEntity_telegramId_key" ON "UserEntity"("telegramId");
