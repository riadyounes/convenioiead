import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const convenios = await prisma.covenant.findMany({
    select: {
      cnpj: true,
      name: true,
      slug: true
    }
  });

  return NextResponse.json({ convenios });
}
