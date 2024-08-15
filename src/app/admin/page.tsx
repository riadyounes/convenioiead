import { Button } from '@/components/ui/button'
import { TableCovenants } from './table-covenants'
import Link from 'next/link'
import { Toaster } from '@/components/ui/sonner'

export default function Admin() {
  return (
    <>
      <div className="mt-8 flex h-screen flex-grow flex-col gap-6 px-6">
        <Button asChild className="w-[220px]">
          <Link href="/admin/convenio">Cadastrar novo convênio</Link>
        </Button>
        <TableCovenants />
        <Toaster richColors />
      </div>
    </>
  )
}
