import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Convênio de Cashback',
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isAuthenticated = true

  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-100 antialiased">
        <header className="flex h-20 w-full items-center justify-between bg-zinc-800 p-4">
          <Button asChild variant="ghost" className="w-[220px] text-zinc-200">
            <Link href="/admin">Home</Link>
          </Button>
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
        <main className="min-h-screen w-full">
          {isAuthenticated ? children : 'Não autenticado'}
        </main>
      </body>
    </html>
  )
}
