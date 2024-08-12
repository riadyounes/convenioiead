/*
  Warnings:

  - A unique constraint covering the columns `[user]` on the table `covenants` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `covenants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `covenants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "covenants" ADD COLUMN     "password" TEXT,
ADD COLUMN     "user" TEXT;

-- Populate user and password columns
UPDATE covenants cv
SET
    user = (SELECT regexp_replace(cnpj, '\D', '', 'g') FROM covenants WHERE id = cv.id),
    password = ''
WHERE cv.id IN (SELECT id FROM covenants);

-- CreateIndex
CREATE UNIQUE INDEX "covenants_user_key" ON "covenants"("user");

-- Add constraint
ALTER TABLE covenants ALTER COLUMN user SET NOT NULL;
ALTER TABLE covenants ALTER COLUMN password SET NOT NULL;