-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "archive" BOOLEAN DEFAULT false,
ADD COLUMN     "flag" BOOLEAN DEFAULT false;
