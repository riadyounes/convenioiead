'use client'

import { FormEvent, useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { AddCouponModal } from './add-coupon-modal'
import { Cupom, TableCupons } from './table-cupons'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { Broom } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

interface Convenio {
  id: string
  name: string
  cnpj: string
  slug: string
  cupons: Cupom[]
}
const convenioInicial: Convenio = {
  id: '',
  name: '',
  cnpj: '',
  slug: '',
  cupons: [],
}

export default function Convenio({ params }: { params: { slug: string } }) {
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [accessAdmin, setAccessAdmin] = useState<boolean>(false)
  const [convenio, setConvenio] = useState<Convenio>(convenioInicial)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')

  const { slug } = params

  const getData = useCallback(async () => {
    const url = new URL(`/api/convenios/${slug}`, window.location.href)

    if (startDate) {
      url.searchParams.append('startDate', startDate)
    }
    if (endDate) {
      url.searchParams.append('endDate', endDate)
    }

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return await response.json()
  }, [slug, startDate, endDate])

  function addNewCupom(cupom: Cupom): void {
    setConvenio((prev) => ({
      ...prev,
      cupons: [...prev.cupons, cupom],
    }))
  }

  function updateCupom(cupom: Cupom): void {
    setConvenio((prev) => ({
      ...prev,
      cupons: prev.cupons.map((c) => (c.id === cupom.id ? cupom : c)),
    }))
  }

  function deleteCupom(cupomId: number): void {
    setConvenio((prev) => ({
      ...prev,
      cupons: prev.cupons.filter((c) => Number(c.id) !== Number(cupomId)),
    }))
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getData()
        setConvenio(data.convenio)
        console.log(data.convenio)
      } catch (error) {
        console.error(error)
      }
    }

    fetch()
  }, [getData])

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          covenantId: convenio.id,
          userName: username,
          password,
        }),
      })
      const data = await response.json()

      if (response.ok) {
        setIsAdmin(true)
        setAccessAdmin(false)
        setPassword('')
        setUsername('')
        toast.success('Login feito com sucesso')
      } else {
        toast.error(data.error || 'Credenciais inválidas')
      }
    } catch (error) {
      console.error(error)
      toast.error('Erro ao tentar fazer login')
    }
  }

  const handleLogout = () => {
    setIsAdmin(false)
    setAccessAdmin(false)
    toast.success('Usuário desconectado com sucesso')
  }

  function handleClearFilterCupons() {
    setStartDate('')
    setEndDate('')
  }

  return (
    <div className="flex min-h-screen w-full max-w-screen-xl flex-col gap-8 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">Nome: {convenio.name}</span>
          <span className="text-lg">CPNJ: {convenio.cnpj}</span>
          <div className="flex items-center gap-4">
            {isAdmin ? (
              <Button onClick={handleLogout}>Sair do modo administrador</Button>
            ) : (
              <Button onClick={() => setAccessAdmin(true)}>
                Acessar como admin
              </Button>
            )}
            <Button asChild variant="outline">
              <Link href="/relatorio">Relatório</Link>
            </Button>
          </div>
        </div>
        {isAdmin && (
          <AddCouponModal
            covenantId={Number(convenio.id)}
            onInsertSuccess={addNewCupom}
          />
        )}
      </div>
      {accessAdmin && (
        <div className="flex flex-col gap-2">
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center gap-4 md:flex-row"
          >
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite o usuário"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite a senha"
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      )}
      {isAdmin && (
        <div className="flex flex-col gap-4 md:flex-row">
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Data inicial"
          />
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="Data final"
          />
          <Button
            onClick={handleClearFilterCupons}
            className="flex w-full items-center gap-1 md:w-[220px]"
          >
            <Broom className="size-4" />
            Limpar filtro
          </Button>
        </div>
      )}
      <TableCupons
        cupons={convenio.cupons}
        isAdmin={isAdmin}
        onUpdateSuccess={updateCupom}
        onDeletionSuccess={deleteCupom}
      />
    </div>
  )
}
