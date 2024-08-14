/*
  Warnings:

  - You are about to drop the column `password` on the `covenants` table. All the data in the column will be lost.
  - You are about to drop the column `user_name` on the `covenants` table. All the data in the column will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "covenants_user_name_key";

-- AlterTable
ALTER TABLE "covenants" DROP COLUMN "password",
DROP COLUMN "user_name";

-- DropTable
DROP TABLE "users";
