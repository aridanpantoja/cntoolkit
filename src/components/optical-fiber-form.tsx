'use client'

import { calculateOpticalFiber } from '@/actions/calculate-optical-fiber'
import {
  opticalFiberData,
  opticalFiberSchema,
} from '@/schemas/optical-fiber-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

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
  const form = useForm<opticalFiberData>({
    resolver: zodResolver(opticalFiberSchema),
    defaultValues: {
      potency: '',
      transmission: '',
      distance: '',
      amendment: '',
    } as unknown as opticalFiberData,
  })

  async function onSubmit(values: opticalFiberData) {
    const response = await calculateOpticalFiber(values)
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
            name={formField.name as keyof opticalFiberData}
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
