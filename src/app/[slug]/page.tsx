'use client'

import { Button } from '@/components/ui/button'
import { AddCouponModal } from './add-coupon-modal'
import { Cupom, TableCupons } from './table-cupons'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

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

  const { slug } = params

  const getData = useCallback(async () => {
    const response = await fetch(`/api/convenios/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return await response.json()
  }, [slug])

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
      } catch (error) {
        console.error(error)
      }
    }

    fetch()
  }, [getData])

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    if (username === 'admin' && password === '1234') {
      setIsAdmin(true)
      setAccessAdmin(false)
      toast.success('Login feito com sucesso')
    } else {
      toast.error('Credenciais inválidas')
    }
  }

  const handleLogout = () => {
    setIsAdmin(false)
    setAccessAdmin(false)
    toast.success('Usuário desconectado com sucesso')
  }

  return (
    <div className="flex min-h-screen w-full max-w-screen-xl flex-col gap-8 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">Nome: {convenio.name}</span>
          <span className="text-lg">CPNJ: {convenio.cnpj}</span>
          {isAdmin ? (
            <Button onClick={handleLogout}>Sair do modo administrador</Button>
          ) : (
            <Button onClick={() => setAccessAdmin(true)}>
              Acessar como admin
            </Button>
          )}
        </div>

        <AddCouponModal
          covenantId={Number(convenio.id)}
          onInsertSuccess={addNewCupom}
        />
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
      <TableCupons
        cupons={convenio.cupons}
        isAdmin={isAdmin}
        onUpdateSuccess={updateCupom}
        onDeletionSuccess={deleteCupom}
      />
    </div>
  )
}
