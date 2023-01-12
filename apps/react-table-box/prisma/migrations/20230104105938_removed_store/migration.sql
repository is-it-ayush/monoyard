/*
  Warnings:

  - You are about to drop the `Store` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `storeId` on the `Instrument` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `DriverGroup` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `Person` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Store";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Instrument" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "hardware_id" TEXT NOT NULL,
    "network_type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Instrument" ("createdAt", "hardware_id", "id", "name", "network_type", "updatedAt") SELECT "createdAt", "hardware_id", "id", "name", "network_type", "updatedAt" FROM "Instrument";
DROP TABLE "Instrument";
ALTER TABLE "new_Instrument" RENAME TO "Instrument";
CREATE TABLE "new_DriverGroup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "folder_name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_DriverGroup" ("createdAt", "description", "folder_name", "id", "name", "updatedAt") SELECT "createdAt", "description", "folder_name", "id", "name", "updatedAt" FROM "DriverGroup";
DROP TABLE "DriverGroup";
ALTER TABLE "new_DriverGroup" RENAME TO "DriverGroup";
CREATE TABLE "new_Person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Person" ("age", "createdAt", "email", "first_name", "id", "last_name", "updatedAt", "username") SELECT "age", "createdAt", "email", "first_name", "id", "last_name", "updatedAt", "username" FROM "Person";
DROP TABLE "Person";
ALTER TABLE "new_Person" RENAME TO "Person";
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
