-- CreateEnum
CREATE TYPE "ColorPalette" AS ENUM ('PUNCH', 'ULCAGOLD', 'BLANC', 'ONYX', 'PESTO', 'FIORD', 'GREENSHEEN', 'VERIDIANGREEN', 'HEATWAVE', 'GRAY');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatarColor" "ColorPalette";
