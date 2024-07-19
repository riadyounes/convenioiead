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

export interface Cupom {
  id: string
  date: string
  amount: number
  value: string
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
            <TableHead className="text-right">Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cupons.map((cupom, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">
                {format(new Date(cupom.date), 'dd/MM/yyyy')}
              </TableCell>
              <TableCell>{cupom.amount}</TableCell>
              <TableCell className="text-right">
                {String(Number(cupom.value).toFixed(2)).replace('.', ',')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              ${String(sumTotalValue).replace('.', ',')}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
