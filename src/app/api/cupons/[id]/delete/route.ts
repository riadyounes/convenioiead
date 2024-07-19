import { PrismaClient } from '../../../../../../prisma/generated/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  const cupomId = params.id

  if (!cupomId) {
    return NextResponse.json(
      { error: 'É obrigatório informar o id do cupom' },
      { status: 400 },
    )
  }

  try {
    await prisma.cupon.delete({
      where: { id: cupomId },
    })

    return NextResponse.json({ message: 'Cupom excluído com sucesso.' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao excluir cupom.' },
      { status: 500 },
    )
  }
}
