import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()
    const { date, amount, value, covenantId } = body

    if (!date || !amount || !value || !covenantId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      )
    }

    const newCupon = await prisma.cupon.create({
      data: {
        date: new Date(date),
        amount,
        value,
        covenantId,
      },
    })

    return NextResponse.json(newCupon, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}