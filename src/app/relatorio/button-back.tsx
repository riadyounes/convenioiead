'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'

export function ButtonBack() {
  const router = useRouter()
  return (
    <Button onClick={router.back} className="flex gap-2" variant="ghost">
      <ArrowLeft />
      Voltar
    </Button>
  )
}
