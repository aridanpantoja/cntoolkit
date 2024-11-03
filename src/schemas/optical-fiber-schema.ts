import { z } from 'zod'

export const opticalFiberSchema = z.object({
  potency: z.coerce.number().min(1, {
    message: 'A potência de entrada deve ser no mínino igual a 1 dBm',
  }),
  transmission: z.coerce.number().refine((val) => 0 < val && val <= 400, {
    message: 'A taxa de transmissão deve ser maior que 0 até 400 Gbps',
  }),
  distance: z.coerce.number().refine((val) => 0 < val, {
    message: 'A distância deve ser maior que 0 Km',
  }),
  amendment: z.coerce
    .number()
    .min(0, { message: 'O número de emendas não pode ser menor que 0' }),
})

export type opticalFiberData = z.infer<typeof opticalFiberSchema>
