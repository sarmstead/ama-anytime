/*
  Warnings:

  - A unique constraint covering the columns `[privateUserId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "privateAccount" BOOLEAN DEFAULT false,
ADD COLUMN     "privateUserId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "User_privateUserId_key" ON "User"("privateUserId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_privateUserId_fkey" FOREIGN KEY ("privateUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
