/*
  Warnings:

  - You are about to drop the column `name` on the `file_store` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `file_store` table. All the data in the column will be lost.
  - Added the required column `originalName` to the `file_store` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "file_store" DROP COLUMN "name",
DROP COLUMN "url",
ADD COLUMN     "originalName" TEXT NOT NULL;
