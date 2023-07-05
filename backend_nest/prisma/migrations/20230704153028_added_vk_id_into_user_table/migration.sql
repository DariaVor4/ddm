/*
  Warnings:

  - A unique constraint covering the columns `[vkId]` on the table `UserEntity` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "UserEntity" ADD COLUMN     "vkId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "UserEntity_vkId_key" ON "UserEntity"("vkId");
