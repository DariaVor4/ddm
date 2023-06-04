/*
  Warnings:

  - You are about to drop the column `originalName` on the `file_store` table. All the data in the column will be lost.
  - Added the required column `name` to the `file_store` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "file_store" DROP COLUMN "originalName",
ADD COLUMN     "name" TEXT NOT NULL;
