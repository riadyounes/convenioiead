import { PrismaClient } from '../../../../../prisma/generated/client'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()
    const { cnpj, name } = body

    if (!cnpj || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      )
    }

    const sanitizedCnpj = cnpj.replace(/\D/g, '')
    const hashedPassword = await bcrypt.hash(sanitizedCnpj, 8)
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
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
