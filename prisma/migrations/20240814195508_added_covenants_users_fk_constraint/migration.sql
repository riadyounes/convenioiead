/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `covenants` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "covenants_user_id_key" ON "covenants"("user_id");

-- AddForeignKey
ALTER TABLE "covenants" ADD CONSTRAINT "covenants_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
