'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SignIn } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [selectedConvenio, setSelectedConvenio] = useState('')

  const convênios = [
    {
      id: 1,
      name: 'VILA C COMÉRCIO DE MEDICAMENTOS',
      cnpj: '20.663.901/0001-70',
      slug: '20-663-901-0001-70-vila-c-comercio-de-medicamentos',
    },
    {
      id: 2,
      name: 'CESAR ANTONIO DE MORAES E CIA LTDA',
      cnpj: '00.354.249/0001-03',
      slug: '00-354-249-0001-03-cesar-antonio-de-moraes-e-cia-ltda',
    },
  ]

  const handleSelectChange = (value: string) => {
    setSelectedConvenio(value)
  }

  return (
    <div className="flex max-w-screen-xl flex-col gap-4">
      <h1 className="text-3xl font-bold">Convênio de Cashback</h1>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-full min-w-[250px]">
          <SelectValue placeholder="Selecione um convênio" />
        </SelectTrigger>
        <SelectContent>
          {convênios.map((convenio) => {
            return (
              <SelectItem key={convenio.id} value={convenio.slug}>
                {`${convenio.cnpj} - ${convenio.name}`}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
      {selectedConvenio ? (
        <Link href={`/${selectedConvenio}`} className="w-full">
          <Button className="flex w-full items-center gap-2">
            <SignIn className="text-white" size={24} />
            Acessar
          </Button>
        </Link>
      ) : (
        <Button disabled className="flex w-full items-center gap-2">
          <SignIn className="text-white" size={24} />
          Acessar
        </Button>
      )}
    </div>
  )
}
