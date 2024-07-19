import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { format } from 'date-fns'
import { Pencil, Trash } from 'lucide-react'

interface Cupom {
  date: string
  amount: number
  value: number
}

interface TableCuponsProps {
  cupons: Cupom[]
}

export function TableCupons({ cupons }: TableCuponsProps) {
  const totalValue = cupons.map((cupom) => Number(cupom.value))

  const sumTotalValue = totalValue
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .toFixed(2)

  return (
    <div className="rounded-lg border">
      <Table>
        <TableCaption>Lista de cupons</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[140px]">Data do cupom</TableHead>
            <TableHead>Número do cupom</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cupons.map((cupom, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">
                {format(new Date(cupom.date), 'dd/MM/yyyy')}
              </TableCell>
              <TableCell>{cupom.amount}</TableCell>
              <TableCell>
                {Number(cupom.value).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
              <TableCell className="flex items-center justify-end gap-2">
                <Button
                  variant="outline"
                  className="text-amber-500 hover:text-amber-700"
                  size="icon"
                >
                  <Pencil className="size-4" />
                </Button>
                <Button variant="destructive" size="icon">
                  <Trash className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              {Number(sumTotalValue).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
