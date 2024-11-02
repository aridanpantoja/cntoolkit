import { TransceiverForm } from '@/components/transceiver-form'

export default function TransceiverConfiguration() {
  return (
    <div>
      <h1>Transceiver Configuration</h1>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat sunt
        iure temporibus expedita sequi. Illo ab dolor impedit hic quae odio
        libero tenetur, fugit provident, recusandae quia est eos reprehenderit!
      </p>

      <div className="grid grid-cols-2">
        <TransceiverForm />
      </div>
    </div>
  )
}
