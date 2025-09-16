/*
  Warnings:

  - Added the required column `placa` to the `Veiculo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Veiculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "modelo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "placa" TEXT NOT NULL
);
INSERT INTO "new_Veiculo" ("ano", "id", "marca", "modelo") SELECT "ano", "id", "marca", "modelo" FROM "Veiculo";
DROP TABLE "Veiculo";
ALTER TABLE "new_Veiculo" RENAME TO "Veiculo";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
