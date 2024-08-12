/*
  Warnings:

  - A unique constraint covering the columns `[user]` on the table `covenants` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `covenants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `covenants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "covenants" ADD COLUMN     "password" TEXT,
ADD COLUMN     "user_name" TEXT;

-- Populate user and password columns
UPDATE covenants cv
SET
    user_name = (SELECT regexp_replace(cnpj, '\D', '', 'g') FROM covenants WHERE id = cv.id),
    password = ''
WHERE cv.id IN (SELECT id FROM covenants);

-- CreateIndex
CREATE UNIQUE INDEX "covenants_user_key" ON "covenants"("user_name");

-- Add not null constraints
ALTER TABLE "covenants" ALTER COLUMN "user_name" SET NOT NULL;
ALTER TABLE "covenants" ALTER COLUMN "password" SET NOT NULL;