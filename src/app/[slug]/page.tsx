'use client'

import { AddCouponModal } from './add-coupon-modal'
import { TableCupons } from './table-cupons'
import { useCallback, useEffect, useState } from 'react'

export default function Convenio({ params }: { params: { slug: string } }) {
  const { slug } = params
  const [cupons, setCupons] = useState([])

  const getData = useCallback(async () => {
    const response = await fetch(`/api/convenios/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return await response.json()
  }, [slug])

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getData()
        setCupons(data.convenio.cupons)
      } catch (error) {
        console.error(error)
      }
    }

    fetch()
  }, [getData])

  return (
    <div className="flex min-h-screen w-full max-w-screen-xl flex-col gap-8 p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">{params.slug}</h1>
        <AddCouponModal />
      </div>
      <TableCupons cupons={cupons} />
    </div>
  )
}
