'use client'

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
import { Toaster } from '@/components/ui/sonner'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

const loginFormSchema = z.object({
  userName: z.string(),
  password: z.string(),
  covenantId: z.string(),
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const { register, reset, handleSubmit } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      covenantId: '-1',
    },
  })

  const handleLogin = async (data: LoginFormSchema) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        covenantId: data.covenantId,
        userName: data.userName,
        password: data.password,
      }),
    })
    const payload = await response.json()

    if (response.ok) {
      setIsAuthenticated(true)
      toast.success('Login feito com sucesso')
      reset()
    } else {
      toast.error(payload.error || 'Credenciais inválidas')
    }
  }

  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-100 antialiased">
        <header className="flex h-20 w-full items-center justify-between bg-zinc-800 p-4">
          <Button asChild variant="link" className="w-[220px] text-zinc-200">
            <Link href="/admin">Home</Link>
          </Button>
          {!isAuthenticated ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Acessar admin</Button>
              </DialogTrigger>
              <DialogContent>
                <form
                  onSubmit={handleSubmit(handleLogin)}
                  className="flex flex-col gap-4"
                >
                  <DialogHeader>
                    <DialogTitle>Acesse o painel administrativo</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col gap-2">
                    <Label>Usuário</Label>
                    <Input
                      placeholder="Digite seu usuário"
                      {...register('userName')}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Senha</Label>
                    <Input
                      placeholder="Digite sua senha"
                      type="password"
                      {...register('password')}
                    />
                  </div>
                  <Button type="submit">Entrar</Button>
                </form>
              </DialogContent>
            </Dialog>
          ) : (
            <Button onClick={() => setIsAuthenticated(false)}>Sair</Button>
          )}
        </header>
        <main className="min-h-screen w-full">
          {isAuthenticated ? (
            children
          ) : (
            <div className="flex h-screen items-center justify-center">
              Faça o login para prosseguir
            </div>
          )}
        </main>
        <Toaster richColors />
      </body>
    </html>
  )
}
