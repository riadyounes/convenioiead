-- AlterTable
ALTER TABLE "covenants" ADD COLUMN     "user_id" INTEGER;

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
