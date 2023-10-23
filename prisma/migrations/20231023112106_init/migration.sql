-- CreateTable
CREATE TABLE "Usr" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "postNum" INTEGER NOT NULL,
    "mail" TEXT NOT NULL,
    "prefecture" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
