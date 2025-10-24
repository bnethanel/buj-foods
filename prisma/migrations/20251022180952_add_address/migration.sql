/*
  Warnings:

  - Added the required column `address` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Restaurant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "lat" REAL NOT NULL,
    "lng" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Restaurant" ("city", "createdAt", "id", "lat", "lng", "name") SELECT "city", "createdAt", "id", "lat", "lng", "name" FROM "Restaurant";
DROP TABLE "Restaurant";
ALTER TABLE "new_Restaurant" RENAME TO "Restaurant";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
