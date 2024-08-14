'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const createCovenantsSchema = z.object({
  cnpj: z.string(),
  name: z.string(),
  slug: z.string(),
  user: z.string(),
  password: z.string(),
})

type CreateCovenantsSchema = z.infer<typeof createCovenantsSchema>

export default function Convenio() {
  const { register, handleSubmit } = useForm<CreateCovenantsSchema>({
    resolver: zodResolver(createCovenantsSchema),
  })

  function createCovenants(data: CreateCovenantsSchema) {
    console.log(data)
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
          <Label className="text-sm font-medium">Slug</Label>
          <Input
            type="text"
            placeholder="Digite o slug"
            {...register('slug')}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Usuário</Label>
          <Input
            type="text"
            placeholder="Digite o usuário"
            {...register('user')}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Senha</Label>
          <Input
            type="password"
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
