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

  const { searchParams } = new URL(req.url)
  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')

  if (!slug) {
    return NextResponse.json(
      { error: 'Filtro de busca não informado' },
      { status: 400 },
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dateFilter: any = {}
  if (startDate) {
    dateFilter.gte = new Date(startDate)
  }
  if (endDate) {
    dateFilter.lte = new Date(endDate)
  }

  const convenio = await prisma.covenant.findUnique({
    where: {
      slug,
    },
    include: {
      cupons: {
        where: dateFilter.gte || dateFilter.lte ? { date: dateFilter } : {},
        select: {
          id: true,
          date: true,
          code: true,
          value: true,
          address: true,
        },
      },
    },
  })

  return NextResponse.json({ convenio })
}
