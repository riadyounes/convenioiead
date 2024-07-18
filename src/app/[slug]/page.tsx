import { AddCouponModal } from './add-coupon-modal'
import { TableCupons } from './table-cupons'

export default function Convenio({ params }: { params: { slug: string } }) {
  return (
    <div className="flex min-h-screen w-full max-w-screen-xl flex-col gap-8 p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">{params.slug}</h1>
        <AddCouponModal />
      </div>
      <TableCupons />
    </div>
  )
}
