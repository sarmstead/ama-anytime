-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "notGoingToAnswer" BOOLEAN DEFAULT false,
ALTER COLUMN "pinned" DROP NOT NULL;
