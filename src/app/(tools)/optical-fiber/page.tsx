import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { OpticalFiberForm } from '@/components/optical-fiber-form'

export default function OpticalFiber() {
  return (
    <>
      <MaxWidthWrapper>
        <h1 className="text-3xl font-bold md:text-5xl">Optical Fiber</h1>

        <p className="max-w-prose">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          sunt iure temporibus expedita sequi.
        </p>

        <div className="grid grid-cols-2">
          <OpticalFiberForm />
        </div>
      </MaxWidthWrapper>
    </>
  )
}
