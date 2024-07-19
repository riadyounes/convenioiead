import { PrismaClient } from '../../../../../prisma/generated/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export interface CupomParams {
  slug: string
}

export const GET = async (
  req: NextRequest,
  { params }: { params: CupomParams },
) => {
  const slug = params.slug

  if (!slug) {
    return NextResponse.json(
      { error: 'Filtro de busca não informado' },
      { status: 400 },
    )
  }

  const convenio = await prisma.covenant.findUnique({
    where: {
      slug,
    },
    include: {
      cupons: {
        select: {
          id: true,
          date: true,
          code: true,
          value: true,
        },
      },
    },
  })

  return NextResponse.json({ convenio })
}
