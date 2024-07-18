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

interface Cupom {
  date: string
  quantity: number
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

  console.log(sumTotalValue)

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
          {cupons.map((cupom) => (
            <TableRow key={cupom.id}>
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
