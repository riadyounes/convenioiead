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
import { EditCouponModal } from './edit-coupon-modal'
import { RemoveCouponModal } from './remove-coupon-modal'

export interface Cupom {
  id: number
  date: string
  code: string
  value: string
  address: string
}

interface TableCuponsProps {
  cupons: Cupom[]
  isAdmin: boolean
  onUpdateSuccess: (cupom: Cupom) => void
  onDeletionSuccess: (cupomId: number) => void
}

export function TableCupons({
  cupons,
  isAdmin,
  onUpdateSuccess,
  onDeletionSuccess,
}: TableCuponsProps) {
  const totalValue = cupons.map((cupom) => Number(cupom.value))

  const sumTotalValue = totalValue
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .toFixed(2)

  return (
    <div className="rounded-lg border">
      <Table>
        <TableCaption>
          Valor que será repassado (3%):{' '}
          {((Number(sumTotalValue) * 3) / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Data do cupom</TableHead>
            <TableHead>Número do cupom</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Endereço</TableHead>
            {isAdmin && <TableHead className="text-right"></TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {cupons.map((cupom, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">
                {format(new Date(cupom.date), 'dd/MM/yyyy')}
              </TableCell>
              <TableCell>{cupom.code}</TableCell>

              <TableCell>
                {Number(cupom.value).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
              <TableCell>{cupom.address}</TableCell>
              {isAdmin && (
                <TableCell className="flex items-center justify-end gap-2">
                  <EditCouponModal
                    key={i}
                    cupomData={cupom}
                    onUpdateSuccess={onUpdateSuccess}
                  />
                  <RemoveCouponModal
                    cupomId={Number(cupom.id)}
                    onDeletionSuccess={onDeletionSuccess}
                  />
                </TableCell>
              )}
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
