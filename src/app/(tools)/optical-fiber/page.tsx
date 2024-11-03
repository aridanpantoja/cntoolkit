import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { OpticalFiberForm } from '@/components/optical-fiber-form'

export default function OpticalFiber() {
  return (
    <>
      <MaxWidthWrapper>
        <h1>Optical Fiber</h1>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          sunt iure temporibus expedita sequi. Illo ab dolor impedit hic quae
          odio libero tenetur, fugit provident, recusandae quia est eos
          reprehenderit!
        </p>

        <div className="grid grid-cols-2">
          <OpticalFiberForm />
        </div>
      </MaxWidthWrapper>
    </>
  )
}
