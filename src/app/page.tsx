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
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [selectedConvenio, setSelectedConvenio] = useState('')
  const [convenios, setConvenios] = useState<
    { cnpj: string; name: string; slug: string }[]
  >([])

  const getData = async () => {
    const response = await fetch('/api/convenios', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return await response.json()
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getData()
        setConvenios(data.convenios)
      } catch (error) {
        console.error(error)
      }
    }

    fetch()
  }, [])

  const handleSelectChange = (value: string) => {
    setSelectedConvenio(value)
  }

  return (
    <>
      <div className="flex max-w-screen-xl flex-col items-center gap-4">
        <div className="mb-6 flex flex-col items-center gap-4">
          <Image src="/banner.webp" alt="Banner" width={1920} height={400} />
          <Image src="/logo.jpg" alt="Logo" width={180} height={180} />
        </div>
      </div>
      <div className="flex max-w-screen-xl flex-col items-center gap-4">
        <h1 className="text-center text-3xl font-bold lg:text-5xl">
          Convênio de Cashback
        </h1>
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="w-full min-w-[250px]">
            <SelectValue placeholder="Selecione um convênio" />
          </SelectTrigger>
          <SelectContent>
            {convenios.map((convenio, i) => {
              return (
                <SelectItem key={i} value={convenio.slug} className="text-lg">
                  {`${convenio.cnpj} - ${convenio.name}`}
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
        <div className="mt-4 flex w-full gap-2">
          <Button
            className={`flex w-1/2 items-center gap-2 ${selectedConvenio ? '' : 'cursor-not-allowed opacity-50'}`}
            size="lg"
            asChild
            disabled={!selectedConvenio}
          >
            <Link href={`/${selectedConvenio}`} className="w-full">
              <SignIn className="text-white" size={24} />
              Acessar
            </Link>
          </Button>
          <Button
            className="flex w-1/2 items-center gap-2"
            size="lg"
            asChild
            variant="outline"
          >
            <Link href="/relatorio" className="w-full">
              Relatório
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
