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
    <div className="flex max-w-screen-xl flex-col gap-4">
      <div className="flex flex-col items-center md:flex-row md:gap-5">
        <Image src="/1.png" alt="" width={180} height={180} />
        <Image src="/2.png" alt="" width={180} height={180} />
        <Image src="/3.png" alt="" width={180} height={180} />
      </div>
      <h1 className="text-3xl font-bold lg:text-5xl">Convênio de Cashback</h1>
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
      {selectedConvenio ? (
        <Button className="flex w-full items-center gap-2" size="lg" asChild>
          <Link href={`/${selectedConvenio}`} className="w-full">
            <SignIn className="text-white" size={24} />
            Acessar
          </Link>
        </Button>
      ) : (
        <Button disabled className="flex w-full items-center gap-2" size="lg">
          <SignIn className="text-white" size={24} />
          Acessar
        </Button>
      )}
    </div>
  )
}
