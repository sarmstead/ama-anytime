-- CreateTable
CREATE TABLE "AllowedToFollow" (
    "id" SERIAL NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "privateUserId" INTEGER NOT NULL,
    "approvedFollowersId" INTEGER NOT NULL,

    CONSTRAINT "AllowedToFollow_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AllowedToFollow" ADD CONSTRAINT "AllowedToFollow_privateUserId_fkey" FOREIGN KEY ("privateUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AllowedToFollow" ADD CONSTRAINT "AllowedToFollow_approvedFollowersId_fkey" FOREIGN KEY ("approvedFollowersId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
