import Link from 'next/link'
import { MaxWidthWrapper } from './max-width-wrapper'

export function Footer() {
  return (
    <footer className="flex h-20 items-center border-t">
      <MaxWidthWrapper>
        <div className="flex h-full items-center">
          <p className="mx-auto text-center text-sm text-muted-foreground">
            Built by{' '}
            <Link
              href="https://github.com/aridanpantoja"
              className="underline underline-offset-4"
            >
              aridan
            </Link>
            . The source code is available on{' '}
            <Link
              href="https://github.com/aridanpantoja/cntoolkit"
              className="underline underline-offset-4"
            >
              Github
            </Link>
            .
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
