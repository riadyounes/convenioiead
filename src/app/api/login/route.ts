import { PrismaClient } from '../../../../prisma/generated/client'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const POST = async (req: NextRequest) => {
  try {
    const { covenantId, userName, password } = await req.json()

    if (!covenantId || !userName || !password) {
      return NextResponse.json(
        { error: 'Preencha os campos obrigatórios' },
        { status: 400 },
      )
    }

    const user = await prisma.user.findUnique({
      where: { userName },
      select: {
        id: true,
        password: true,
        role: true,
        Covenant: {
          select: {
            id: true,
          },
        },
      },
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 },
      )
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    const isCorrectUser = user.Covenant?.id === covenantId
    const isAdminUser = user.role === 'ADMIN'

    if (!isPasswordValid || (!isAdminUser && !isCorrectUser)) {
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 },
      )
    }

    // If all checks pass, user is authenticated
    return NextResponse.json(
      { message: 'Authenticated successfully' },
      { status: 200 },
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
