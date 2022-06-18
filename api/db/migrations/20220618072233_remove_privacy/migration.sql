/*
  Warnings:

  - You are about to drop the column `privateAccount` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `privateUserId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_privateUserId_fkey";

-- DropIndex
DROP INDEX "User_privateUserId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "privateAccount",
DROP COLUMN "privateUserId";
