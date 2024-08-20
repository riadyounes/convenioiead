import { PrismaClient } from '../../../../../prisma/generated/client'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()
    const { cnpj, name, password } = body

    if (!cnpj || !name || !password) {
      return NextResponse.json(
        { error: 'Por favor preencha os campos' },
        { status: 400 },
      )
    }

    const sanitizedCnpj = cnpj.replace(/\D/g, '')
    const hashedPassword = await bcrypt.hash(password, 8)
    const slug = `${cnpj.replace(/\D/g, '-').replace(/^-|-$/g, '')}-${name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')}`

    const newUser = await prisma.user.create({
      data: {
        userName: sanitizedCnpj,
        password: hashedPassword,
        role: 'USER',
      },
    })

    const newCovenant = await prisma.covenant.create({
      data: {
        name,
        cnpj,
        slug,
        userId: newUser.id,
      },
    })

    return NextResponse.json(newCovenant, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Erro ao realizar novo cadastro' },
      { status: 500 },
    )
  }
}
