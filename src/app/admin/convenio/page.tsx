'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const createCovenantsSchema = z.object({
  cnpj: z.string(),
  name: z.string(),
  password: z.string(),
})

type CreateCovenantsSchema = z.infer<typeof createCovenantsSchema>

export default function Convenio() {
  const { register, handleSubmit, reset } = useForm<CreateCovenantsSchema>({
    resolver: zodResolver(createCovenantsSchema),
  })

  async function createCovenants(data: CreateCovenantsSchema) {
    console.log(data)
    try {
      const response = await fetch('/api/convenios/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cnpj: data.cnpj,
          name: data.name,
          password: data.password,
        }),
      })

      if (!response.ok) {
        toast.error('Erro ao adicionar convênio.')
        return
      }

      toast.success('Convênio adicionado com sucesso.')
      reset()
    } catch (error) {
      toast.error('Erro ao adicionar convênio.')
    }
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Criar novo convênio</h1>
      <form
        onSubmit={handleSubmit(createCovenants)}
        className="flex flex-col gap-3 rounded-lg border p-4"
      >
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">CNPJ</Label>
          <Input
            type="text"
            placeholder="Digite o CNPJ"
            {...register('cnpj')}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Nome</Label>
          <Input
            type="text"
            placeholder="Digite o nome"
            {...register('name')}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Senha</Label>
          <Input
            type="text"
            placeholder="Digite o senha"
            {...register('password')}
            required
          />
        </div>
        <Button type="submit">Salvar</Button>
      </form>
    </div>
  )
}
