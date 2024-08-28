import { useState } from 'react'
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

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { ptBR } from 'date-fns/locale'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import MoneyInput from '@/components/currencyInput'
import { Cupom } from '@/app/[slug]/table-cupons'

const addCouponFormSchema = z.object({
  date: z.date(),
  code: z.string({ message: 'Campo obrigatório' }),
  value: z
    .number({ message: 'O valor esperado é do tipo numérico' })
    .positive('O número deve ser positivo.'),
  address: z.string({ message: 'Campo obrigatório' }),
})

type AddCouponFormSchema = z.infer<typeof addCouponFormSchema>

interface AddCouponModalProps {
  covenantId: number
  onInsertSuccess: (cupom: Cupom) => void
}

export function AddCouponModal({
  covenantId,
  onInsertSuccess,
}: AddCouponModalProps) {
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)
  const [couponData, setCouponData] = useState<AddCouponFormSchema | null>(null)

  const form = useForm<AddCouponFormSchema>({
    resolver: zodResolver(addCouponFormSchema),
    defaultValues: {
      code: '',
      value: 0,
      address: '',
    },
  })

  async function handleAddCoupon(data: AddCouponFormSchema) {
    try {
      const response = await fetch('/api/cupons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: data.date,
          code: data.code,
          value: data.value,
          address: data.address,
          covenantId,
        }),
      })

      if (!response.ok) {
        toast.error('Erro ao adicionar cupom.')
        return
      }

      const result = await response.json()
      const newCupomData: Cupom = {
        id: result.id,
        date: data.date.toISOString(),
        code: data.code,
        address: data.address,
        value: String(data.value),
      }
      onInsertSuccess(newCupomData)
      toast.success('Cupom adicionado com sucesso.')
      form.reset({
        value: 0,
        code: '',
        date: undefined,
        address: '',
      })
    } catch (error) {
      toast.error('Erro ao adicionar cupom.')
    }
  }

  function handleSaveClick(data: AddCouponFormSchema) {
    setCouponData(data)
    setIsConfirmDialogOpen(true)
  }

  function handleConfirm() {
    if (couponData) {
      handleAddCoupon(couponData)
      setIsConfirmDialogOpen(false)
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Adicione um cupom</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicionar um cupom</DialogTitle>
            <DialogDescription>
              Adicione um cupom. Clique em salvar para concluir.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSaveClick)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Data Cupom</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'dd/MM/yyyy')
                            ) : (
                              <span>Selecione a data</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          locale={ptBR}
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date('1900-01-01')}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Código do Cupom</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Digite o código do Cupom"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <MoneyInput
                form={form}
                label="Valor"
                name="value"
                placeholder="Valor"
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Endereço</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Digite o endereço"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Fechar</Button>
                </DialogClose>
                <Button disabled={form.formState.isSubmitting} type="submit">
                  Salvar
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar Cupom</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Você realmente deseja adicionar este cupom?
          </DialogDescription>
          <span className="text-lg text-foreground">
            Data: {couponData?.date && format(couponData.date, 'dd/MM/yyyy')}
          </span>
          <span className="text-lg text-foreground">
            Código: {couponData?.code}
          </span>
          <span className="text-lg text-foreground">
            Valor:{' '}
            {Number(couponData?.value).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          <span className="text-lg text-foreground">
            Endereço: {couponData?.address}
          </span>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsConfirmDialogOpen(false)}
            >
              Cancelar
            </Button>
            <Button onClick={handleConfirm}>Confirmar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
