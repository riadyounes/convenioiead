/*
  Warnings:

  - The primary key for the `covenants` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `covenants` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `cupons` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `cupons` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `covenant_id` on the `cupons` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "cupons" DROP CONSTRAINT "cupons_covenant_id_fkey";

-- AlterTable
ALTER TABLE "covenants" DROP CONSTRAINT "covenants_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "covenants_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "cupons" DROP CONSTRAINT "cupons_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "covenant_id",
ADD COLUMN     "covenant_id" INTEGER NOT NULL,
ADD CONSTRAINT "cupons_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "cupons" ADD CONSTRAINT "cupons_covenant_id_fkey" FOREIGN KEY ("covenant_id") REFERENCES "covenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
