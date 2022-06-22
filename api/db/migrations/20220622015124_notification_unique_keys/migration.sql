/*
  Warnings:

  - A unique constraint covering the columns `[userId,notificationsForId]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Notification_userId_notificationsForId_key" ON "Notification"("userId", "notificationsForId");
