'use client'

import { AddCouponModal } from './add-coupon-modal'
import { Cupom, TableCupons } from './table-cupons'
import { useCallback, useEffect, useState } from 'react'

interface Convenio {
  id: string
  name: string
  cnpj: string
  slug: string
  cupons: Cupom[]
}

export default function Convenio({ params }: { params: { slug: string } }) {
  const { slug } = params
  const convenioInicial: Convenio = {
    id: '',
    name: '',
    cnpj: '',
    slug: '',
    cupons: [],
  }
  const [convenio, setConvenio] = useState<Convenio>(convenioInicial)

  const getData = useCallback(async () => {
    const response = await fetch(`/api/convenios/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return await response.json()
  }, [slug])

  function addNewCupom(cupom: Cupom) {
    setConvenio((prev) => ({
      ...prev,
      cupons: [...prev.cupons, cupom],
    }))
  }

  function updateCupom(cupom: Cupom) {
    setConvenio((prev) => ({
      ...prev,
      cupons: prev.cupons.map((c) => (c.id === cupom.id ? cupom : c)),
    }))
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getData()
        setConvenio(data.convenio)
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
        <AddCouponModal
          covenantId={convenio.id}
          onInsertSuccess={addNewCupom}
        />
      </div>
      <TableCupons cupons={convenio.cupons} onUpdateSuccess={updateCupom} />
    </div>
  )
}
