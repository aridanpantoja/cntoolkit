import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { ReactNode } from 'react'

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
