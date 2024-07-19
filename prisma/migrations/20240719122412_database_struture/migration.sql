-- CreateTable
CREATE TABLE "covenants" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" VARCHAR(18) NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "covenants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cupons" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,
    "value" DECIMAL(14,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "covenant_id" TEXT NOT NULL,

    CONSTRAINT "cupons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "covenants_cnpj_key" ON "covenants"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "covenants_slug_key" ON "covenants"("slug");

-- AddForeignKey
ALTER TABLE "cupons" ADD CONSTRAINT "cupons_covenant_id_fkey" FOREIGN KEY ("covenant_id") REFERENCES "covenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
