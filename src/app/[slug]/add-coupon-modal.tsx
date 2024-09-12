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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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

  const addressOptions = [
    {
      value: 'MEGA VILLA - ADEMIR JACINTO FERREIRA',
      label: 'MEGA VILLA - ADEMIR JACINTO FERREIRA',
    },
    {
      value: 'VILA YOLANDA - ADERSON DOS SANTOS MACHADO',
      label: 'VILA YOLANDA - ADERSON DOS SANTOS MACHADO',
    },
    {
      value: 'VILA SOLIDARIA - ADILSON PEREIRA DA SILVA',
      label: 'VILA SOLIDARIA - ADILSON PEREIRA DA SILVA',
    },
    {
      value: 'PROFILURB I - ANTÔNIO OSÓRIO',
      label: 'PROFILURB I - ANTÔNIO OSÓRIO',
    },
    {
      value: 'JD SÃO PAULO - ARGEMIRO RIBEIRO',
      label: 'JD SÃO PAULO - ARGEMIRO RIBEIRO',
    },
    {
      value: 'TRÊS LAGOAS - ARGEU DOURADO',
      label: 'TRÊS LAGOAS - ARGEU DOURADO',
    },
    {
      value: 'JD. CEDRO - ARI JOSÉ GARCIA DE OLIVEIRA',
      label: 'JD. CEDRO - ARI JOSÉ GARCIA DE OLIVEIRA',
    },
    {
      value: 'ARROIO DURADO - AUGUSTO BRANDÃO',
      label: 'ARROIO DURADO - AUGUSTO BRANDÃO',
    },
    {
      value: 'JD. CALIFORMIA - AURÉLIO EVARISTO',
      label: 'JD. CALIFORMIA - AURÉLIO EVARISTO',
    },
    {
      value: 'VILA A - CHRISTIAN RIBEIRO MARINS',
      label: 'VILA A - CHRISTIAN RIBEIRO MARINS',
    },
    {
      value: 'MORUNBI 4 - CLAUDIO A. DA SILVA',
      label: 'MORUNBI 4 - CLAUDIO A. DA SILVA',
    },
    {
      value: 'ALTO DA BOA VISTA - CUSTÓDIO ADEMAR DA SILVA',
      label: 'ALTO DA BOA VISTA - CUSTÓDIO ADEMAR DA SILVA',
    },
    {
      value: 'JD. BELA VISTA - DANIEL TONET',
      label: 'JD. BELA VISTA - DANIEL TONET',
    },
    {
      value: 'JD SOLEDADE - EDUARDO JOSÉ DA SILVA',
      label: 'JD SOLEDADE - EDUARDO JOSÉ DA SILVA',
    },
    {
      value: 'JD ALVORADA - ELIAS CEZAR DE ANDRADE',
      label: 'JD ALVORADA - ELIAS CEZAR DE ANDRADE',
    },
    { value: 'VILA C - ELISEU FERREIRA', label: 'VILA C - ELISEU FERREIRA' },
    {
      value: 'CAMPOS DO IGUAÇU - FABIO TAVORA',
      label: 'CAMPOS DO IGUAÇU - FABIO TAVORA',
    },
    { value: 'VILA MIRANDA - GEL MARCOS', label: 'VILA MIRANDA - GEL MARCOS' },
    {
      value: 'JD. CURITIBANO - GILBERTO VIEIRA LOPES',
      label: 'JD. CURITIBANO - GILBERTO VIEIRA LOPES',
    },
    {
      value: 'SEDE - ISAIAS CARDOSO DOS SANTOS',
      label: 'SEDE - ISAIAS CARDOSO DOS SANTOS',
    },
    {
      value: 'JD. AMÉRICA - ISAIAS CARDOSO DOS SANTOS JUNIOR',
      label: 'JD. AMÉRICA - ISAIAS CARDOSO DOS SANTOS JUNIOR',
    },
    {
      value: 'JD COLOMBELLI - IVANIR JOSÉ GUERRA',
      label: 'JD COLOMBELLI - IVANIR JOSÉ GUERRA',
    },
    {
      value: 'JD ESMERALDA - IVO MACHADO',
      label: 'JD ESMERALDA - IVO MACHADO',
    },
    {
      value: 'JD SÃO LUIZ - IZAIAS NEVES DA SILVA',
      label: 'JD SÃO LUIZ - IZAIAS NEVES DA SILVA',
    },
    {
      value: 'JD DUARTE - JACÓ DE FIGUEIREDO CESÁRIO',
      label: 'JD DUARTE - JACÓ DE FIGUEIREDO CESÁRIO',
    },
    {
      value: 'OURO VERDE - JAVAN FERREIRA DA SILVA',
      label: 'OURO VERDE - JAVAN FERREIRA DA SILVA',
    },
    {
      value: 'JARDIM JUPIRA - JESIEL ALVES',
      label: 'JARDIM JUPIRA - JESIEL ALVES',
    },
    {
      value: 'MORUMBI 3 - JOÃO ALBERTO FRANCHIN',
      label: 'MORUMBI 3 - JOÃO ALBERTO FRANCHIN',
    },
    {
      value: 'ROSE MAGALHÃES - JOÃO CARLOS DE MATOS',
      label: 'ROSE MAGALHÃES - JOÃO CARLOS DE MATOS',
    },
    {
      value: 'PQ PRESIDENTE 1 - JOÃO GONÇALVES MOREIRA',
      label: 'PQ PRESIDENTE 1 - JOÃO GONÇALVES MOREIRA',
    },
    {
      value: 'VILA CARIMÃ - JOÃO GUIMARAES FACUNDES',
      label: 'VILA CARIMÃ - JOÃO GUIMARAES FACUNDES',
    },
    {
      value: 'JD EUROPA - JOEL BARROS DE OLIVEIRA',
      label: 'JD EUROPA - JOEL BARROS DE OLIVEIRA',
    },
    {
      value: 'JD VERANEIO - JOEL FERREIRA',
      label: 'JD VERANEIO - JOEL FERREIRA',
    },
    {
      value: 'PORTAL DA FOZ - JOSÉ ANTONIO DE AMORIM',
      label: 'PORTAL DA FOZ - JOSÉ ANTONIO DE AMORIM',
    },
    {
      value: 'PQ PRESIDENTE 2 - JOSÉ EDMUNDO RODRIGUES DA COSTA',
      label: 'PQ PRESIDENTE 2 - JOSÉ EDMUNDO RODRIGUES DA COSTA',
    },
    {
      value: 'CIDADE NOVA - JOSÉ RENACIR DE SOUZA',
      label: 'CIDADE NOVA - JOSÉ RENACIR DE SOUZA',
    },
    {
      value: 'JD IPANEMA - JOSÉ VICENTE DE ALMEIDA',
      label: 'JD IPANEMA - JOSÉ VICENTE DE ALMEIDA',
    },
    {
      value: 'PQ PATRIARCA - LOURIVAL GERALDO FERREIRA',
      label: 'PQ PATRIARCA - LOURIVAL GERALDO FERREIRA',
    },
    {
      value: 'JD PARANÁ - LUIS DOS SANTOS LEAL',
      label: 'JD PARANÁ - LUIS DOS SANTOS LEAL',
    },
    {
      value: 'PROFILURB 2 - MÁRIO BARBOSA',
      label: 'PROFILURB 2 - MÁRIO BARBOSA',
    },
    {
      value: 'CIUDAD DEL ESTE - MIKAIAS FREITAS DE MELO',
      label: 'CIUDAD DEL ESTE - MIKAIAS FREITAS DE MELO',
    },
    {
      value: 'JD DAS PALMEIRAS - NILSON DOS SANTOS',
      label: 'JD DAS PALMEIRAS - NILSON DOS SANTOS',
    },
    {
      value: 'JD CLAUDIA - NORADI EVANGELISTA',
      label: 'JD CLAUDIA - NORADI EVANGELISTA',
    },
    {
      value: 'PORTO BELO - OSMAR MARCOS BARBOSA',
      label: 'PORTO BELO - OSMAR MARCOS BARBOSA',
    },
    {
      value: 'JD ITAIPU - PAULO SUDRÉ DE SOUZA',
      label: 'JD ITAIPU - PAULO SUDRÉ DE SOUZA',
    },
    {
      value: 'MORUMBI 2 - PEDRO DOS SANTOS',
      label: 'MORUMBI 2 - PEDRO DOS SANTOS',
    },
    {
      value: 'JD. DAS FLORES - RENATO MENDES BASTOS',
      label: 'JD. DAS FLORES - RENATO MENDES BASTOS',
    },
    {
      value: 'MORUMBI 1 - RUBENS ANTÔNIO DE SOUZA',
      label: 'MORUMBI 1 - RUBENS ANTÔNIO DE SOUZA',
    },
    {
      value: 'SOL DE MAIO - SILVIO CESAR CORREIA',
      label: 'SOL DE MAIO - SILVIO CESAR CORREIA',
    },
    {
      value: 'JD SÃO ROQUE - VANDERLEI TOMAZ',
      label: 'JD SÃO ROQUE - VANDERLEI TOMAZ',
    },
    {
      value: 'JD TRES BANDEIRAS - WANCLER HOTZ',
      label: 'JD TRES BANDEIRAS - WANCLER HOTZ',
    },
    {
      value: 'JD SANTA RITA - WERLEN GUIMARÃES BARROS',
      label: 'JD SANTA RITA - WERLEN GUIMARÃES BARROS',
    },
    {
      value: 'JD GUAÍRA - WEVERTON PEREIRA',
      label: 'JD GUAÍRA - WEVERTON PEREIRA',
    },
    {
      value: 'VILA BANCARIA - JOSUÉ DE OLIVEIRA',
      label: 'VILA BANCARIA - JOSUÉ DE OLIVEIRA',
    },
  ]

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
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {addressOptions.map((option, index) => (
                            <SelectItem key={index} value={option.value} className="text-lg">
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
