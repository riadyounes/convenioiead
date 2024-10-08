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
import { CalendarIcon, Pencil } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { ptBR } from 'date-fns/locale'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import MoneyInput from '@/components/currencyInput'
import { Cupom } from '@/app/[slug]/table-cupons'

const editCouponFormSchema = z.object({
  date: z.date(),
  code: z.string({ message: 'Campo obrigatório' }),
  value: z
    .number({ message: 'O valor esperado é do tipo numérico' })
    .positive('O número deve ser positivo.'),
  address: z.string({ message: 'Campo obrigatório' }),
})

type EditCouponFormSchema = z.infer<typeof editCouponFormSchema>

interface CupomDataProps {
  cupomData: Cupom
  onUpdateSuccess: (cupom: Cupom) => void
}

export function EditCouponModal({
  cupomData,
  onUpdateSuccess,
}: CupomDataProps) {
  const form = useForm<EditCouponFormSchema>({
    resolver: zodResolver(editCouponFormSchema),
    defaultValues: {
      date: new Date(cupomData.date),
      code: cupomData.code,
      address: cupomData.address,
      value: Number(cupomData.value),
    },
  })

  console.log(form.getValues('address'))

  async function handleEditCoupon(data: EditCouponFormSchema) {
    try {
      const response = await fetch(`/api/cupons/${cupomData.id}/edit`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: data.date,
          code: data.code,
          value: data.value,
          address: data.address,
        }),
      })

      if (!response.ok) {
        toast.error('Falha ao atualizar cupom.')
      }

      const result = await response.json()

      const updatedCoupon: Cupom = {
        id: result.id,
        date: result.date,
        code: result.code,
        address: result.address,
        value: String(result.value),
      }
      onUpdateSuccess(updatedCoupon)

      toast.success('Cupom editado com sucesso.')
      form.reset()
    } catch (e) {
      toast.error('Erro ao editar cupom.')
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-amber-500 hover:text-amber-700"
          size="icon"
        >
          <Pencil className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edite o cupom</DialogTitle>
          <DialogDescription>
            Edite o cupom. Clique em salvar para concluir.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleEditCoupon)}
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
                        initialFocus
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
                  <FormLabel>Número Cupom</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Digite o número Cupom"
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
  )
}
