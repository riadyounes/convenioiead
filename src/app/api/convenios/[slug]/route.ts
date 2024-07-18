import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export interface Params {
  slug: string;
}

export const GET = async (req: NextRequest, { params }: { params: Params }) => {
  const slug = params.slug;

  if (!slug) {
    return NextResponse.json(
      { error: 'Filtro de busca não informado' },
      { status: 400 },
    );
  }

  const convenio = await prisma.covenant.findUnique({
    where: {
      slug: slug,
    },
    include: {
      cupons: {
        select: {
          id: true,
          amount: true,
          value: true,
        },
      },
    },
  });

  return NextResponse.json({ convenio });
};
