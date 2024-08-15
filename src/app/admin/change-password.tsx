'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserGear } from '@phosphor-icons/react/dist/ssr'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const changePasswordSchema = z.object({
  userName: z.string(),
  newPassword: z.string(),
})

type ChangePasswordSchema = z.infer<typeof changePasswordSchema>

export function ChangePassword() {
  const { register, handleSubmit, reset } = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
  })

  async function editPassword(data: ChangePasswordSchema) {
    console.log(data)
    try {
      const response = await fetch('/api/usuarios/alterar-senha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: data.userName,
          newPassword: data.newPassword,
        }),
      })

      if (!response.ok) {
        toast.error('Erro ao alterar senha.')
        return
      }

      toast.success('Senha alterada com sucesso.')
      reset()
    } catch (error) {
      toast.error('Erro ao adicionar convênio.')
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <UserGear size={20} />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Alterar senha do usuário</DialogTitle>
          <DialogDescription>Altere a senha do usuário</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(editPassword)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="userName" className="text-right">
              Usuário
            </Label>
            <Input {...register('userName')} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="newPassword" className="text-right">
              Nova senha
            </Label>
            <Input {...register('newPassword')} className="col-span-3" />
          </div>
          <DialogFooter>
            <Button type="submit">Salvar alteração</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
