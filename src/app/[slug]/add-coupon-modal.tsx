'use client'

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

const addCouponFormSchema = z.object({
  date: z.date(),
  amount: z.preprocess(
    (value) => parseFloat(z.string().parse(value)),
    z
      .number({ message: 'O valor esperado é do tipo numérico' })
      .positive('O número deve ser positivo.'),
  ),
  value: z
    .number({ message: 'O valor esperado é do tipo numérico' })
    .positive('O número deve ser positivo.'),
})

type AddCouponFormSchema = z.infer<typeof addCouponFormSchema>

export function AddCouponModal() {
  const form = useForm<AddCouponFormSchema>({
    resolver: zodResolver(addCouponFormSchema),
    defaultValues: {
      amount: 0,
      value: 0,
    },
  })
  function handleAddCoupon(data: AddCouponFormSchema) {
    console.log(data)
    toast.success('Cupom adicionado com sucesso.')
    form.reset()
  }

  return (
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
            onSubmit={form.handleSubmit(handleAddCoupon)}
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
              name="amount"
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
