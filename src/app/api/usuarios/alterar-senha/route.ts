import { PrismaClient } from '../../../../../prisma/generated/client'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const POST = async (req: NextRequest) => {
  try {
    const { userName, newPassword } = await req.json()

    if (!userName || !newPassword) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 },
      )
    }

    const user = await prisma.user.findUnique({
      where: { userName },
      select: {
        id: true,
      },
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 },
      )
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 8)

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedNewPassword },
    })

    return NextResponse.json(
      { message: 'Senha alterada com sucesso' },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao alterar a senha' },
      { status: 500 },
    )
  }
}
