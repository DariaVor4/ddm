-- DropForeignKey
ALTER TABLE "file_store" DROP CONSTRAINT "file_store_userId_fkey";

-- AlterTable
ALTER TABLE "file_store" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "file_store" ADD CONSTRAINT "file_store_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
