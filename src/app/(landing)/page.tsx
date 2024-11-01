import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { badgeVariants } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grow">
      <section className="flex h-full items-center justify-center py-24 sm:py-32">
        <MaxWidthWrapper>
          <div className="mx-auto text-center">
            <Link
              href="https://github.com/aridanpantoja/cntoolkit"
              className={badgeVariants({
                className: 'mb-4',
                variant: 'secondary',
              })}
            >
              Star on Github 🌟
            </Link>
            <h1 className="font-heading mx-auto mb-8 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Your <span className="text-primary">Toolkit</span> for <br />
              Computer Networks
            </h1>
            <p className="mx-auto mb-8 max-w-prose text-muted-foreground">
              Our app is designed specifically for IT professionals, bringing
              together essential tools for calculations, simulations and network
              projects.
            </p>
            <Link href="/" className={buttonVariants({ className: 'group' })}>
              Explore Our Tools <ArrowRight className="size-4" />
            </Link>
          </div>
          <div></div>
        </MaxWidthWrapper>
      </section>
      <section></section>
    </main>
  )
}
