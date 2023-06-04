/*
  Warnings:

  - You are about to drop the `file_entity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "file_entity" DROP CONSTRAINT "file_entity_userId_fkey";

-- DropTable
DROP TABLE "file_entity";

-- CreateTable
CREATE TABLE "file_store" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "userId" UUID NOT NULL,
    "file_location" TEXT NOT NULL,
    "ext" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "file_store_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "file_store" ADD CONSTRAINT "file_store_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
