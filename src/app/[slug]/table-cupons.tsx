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

const cupons = [
  {
    id: 1,
    date: new Date().toISOString(),
    amount: 10,
    value: '250.00',
  },
  {
    id: 2,
    date: new Date().toISOString(),
    amount: 10,
    value: '250.00',
  },
  {
    id: 3,
    date: new Date().toISOString(),
    amount: 10,
    value: '350.05',
  },
  {
    id: 4,
    date: new Date().toISOString(),
    amount: 10,
    value: '450.50',
  },
  {
    id: 5,
    date: new Date().toISOString(),
    amount: 10,
    value: '550.00',
  },
  {
    id: 6,
    date: new Date().toISOString(),
    amount: 10,
    value: '200.00',
  },
  {
    id: 7,
    date: new Date().toISOString(),
    amount: 20,
    value: '300.00',
  },
]

export function TableCupons() {
  const totalValue = cupons.map((cupom) => Number(cupom.value))

  const sumTotalValue = totalValue.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0,
  )

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
              <TableCell className="text-right">{cupom.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">${sumTotalValue}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
