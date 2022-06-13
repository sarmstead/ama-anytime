/*
  Warnings:

  - The primary key for the `Bookmark` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[userId,questionId]` on the table `Bookmark` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Bookmark" DROP CONSTRAINT "Bookmark_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_userId_questionId_key" ON "Bookmark"("userId", "questionId");
