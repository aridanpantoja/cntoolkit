'use client'

import { calculateTransceiver } from '@/actions/calculate-transceiver'
import {
  transceiverData,
  transceiverSchema,
} from '@/schemas/transceiver-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'

type formFieldsProps = {
  name: string
  label: string
  placeholder: string
}

const formFields = [
  {
    name: 'potency',
    label: 'Potência (dBm)',
    placeholder: 'Potência em dBm',
  },
  {
    name: 'transmission',
    label: 'Taxa de transmissão',
    placeholder: 'Taxa de transmissão em Gpbs',
  },
  {
    name: 'distance',
    label: 'Distância',
    placeholder: 'Distância em km',
  },
  {
    name: 'amendment',
    label: 'Emendas',
    placeholder: 'Número de emendas na fibra',
  },
]

export function OpticalFiberForm() {
  const form = useForm<transceiverData>({
    resolver: zodResolver(transceiverSchema),
    defaultValues: {
      potency: '',
      transmission: '',
      distance: '',
      amendment: '',
    } as unknown as transceiverData,
  })

  async function onSubmit(values: transceiverData) {
    const response = await calculateTransceiver(values)
    console.log({ response })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-sm space-y-4"
      >
        {formFields.map((formField: formFieldsProps) => (
          <FormField
            key={formField.name}
            control={form.control}
            name={formField.name as keyof transceiverData}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formField.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={formField.placeholder}
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit" className="w-full">
          Calcular
        </Button>
      </form>
    </Form>
  )
}
