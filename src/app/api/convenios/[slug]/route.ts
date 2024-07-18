import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: "Filtro de busca não informado" }, { status: 400 });
  }

  const cupons = await prisma.covenant.findUnique({
    where: {
      slug: slug
    },
    select: {
      cnpj: true,
    },
    include: {
      cupons: {
        select: {
          date: true,
          amount: true,
          value: true,
        }
      }
    }
  });

  return NextResponse.json({ cupons });
}
