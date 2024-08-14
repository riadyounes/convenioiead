import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TableCovenants } from './table-covenants'

export default function Admin() {
  return (
    <>
      <header className="flex h-20 w-full items-center justify-end bg-zinc-800 p-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Acessar admin</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Acesse o painel administrativo</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-2">
              <Label>Usuário</Label>
              <Input placeholder="Digite seu usuário" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Senha</Label>
              <Input placeholder="Digite sua senha" />
            </div>
            <Button type="submit">Entrar</Button>
          </DialogContent>
        </Dialog>
      </header>
      <main className="mt-8 flex h-screen flex-grow px-6">
        <TableCovenants />
        {/* Adicione os componentes necessários para o painel administrativo */}
      </main>
    </>
  )
}
