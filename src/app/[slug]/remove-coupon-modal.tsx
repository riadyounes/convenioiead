import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Trash } from 'lucide-react'
import { toast } from 'sonner'

interface RemoveCouponModalProps {
  cupomId: string
  onDeletionSuccess: (cupomId: string) => void
}
export function RemoveCouponModal({
  cupomId,
  onDeletionSuccess,
}: RemoveCouponModalProps) {
  async function handleRemoveCoupon() {
    try {
      const response = await fetch(`/api/cupons/${cupomId}/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        // Handle non-200 responses
        const errorData = await response.json()
        console.log(errorData.error || 'Failed to remove coupon')
      }

      // If successful
      onDeletionSuccess(cupomId)
      toast.success('Cupom removido com sucesso.')
    } catch (error) {
      // Handle errors
      console.error('Error removing coupon:', error)
      toast.error('Erro ao remover cupom.')
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <Trash className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Remover cupom</DialogTitle>
          <DialogDescription>
            Tem certeza que deseja remover o cupom? Ao clicar em remover, a ação
            é irreversível.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive" onClick={handleRemoveCoupon}>
              Remover
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
