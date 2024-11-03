'use server'

import { transceivers } from '@/data/transceivers'
import {
  opticalFiberData,
  opticalFiberSchema,
} from '@/schemas/optical-fiber-schema'

export async function calculateOpticalFiber(values: opticalFiberData) {
  try {
    const parsedValues = opticalFiberSchema.safeParse(values)

    if (!parsedValues.success) {
      throw new Error('validação dos valores falhou')
    }

    const { distance, potency, transmission, amendment } = parsedValues.data

    const fiber =
      distance <= 2
        ? { type: 'Multi Mode Fiber (MMF)', attenuation: 3.0 }
        : { type: 'Single Mode Fiber (SMF)', attenuation: 0.4 }

    const amendmentAttenuation = 0.3

    const potencyOutput =
      potency - fiber.attenuation * distance - amendmentAttenuation * amendment

    const compatibleTransceivers = transceivers.filter(
      (t) =>
        t.power.min <= potencyOutput &&
        potencyOutput <= t.power.max &&
        transmission <= t.transmissionRate,
    )

    const result = {
      potencyResult: potencyOutput,
      transceivers: compatibleTransceivers,
      fiber: fiber.type,
    }

    return result
  } catch (error) {
    console.error('Erro de validação:', error)
  }
}
