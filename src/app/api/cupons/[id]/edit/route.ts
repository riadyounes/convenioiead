import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  const cupomId = params.id
  const { date, amount, value } = await req.json()

  if (!cupomId) {
    return NextResponse.json({ error: 'Cupom ID is required' }, { status: 400 })
  }

  try {
    const updatedCupom = await prisma.cupon.update({
      where: { id: cupomId },
      data: {
        date: new Date(date),
        amount,
        value: parseFloat(value),
      },
    })

    return NextResponse.json(updatedCupom)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Erro ao atualizar cupom' },
      { status: 500 },
    )
  }
}
