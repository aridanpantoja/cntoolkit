import { Cable } from 'lucide-react'
import Link from 'next/link'
import { MaxWidthWrapper } from './max-width-wrapper'
import { Separator } from './ui/separator'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { buttonVariants } from './ui/button'

const LINKS = [
  {
    name: 'Docs',
    href: '/docs',
  },
  {
    name: 'Tools',
    href: '/tools',
  },
]

export function Navbar() {
  return (
    <header className="flex h-14 items-center border-b py-4">
      <MaxWidthWrapper>
        <nav className="py-auto flex h-full items-center justify-between">
          <Link href="/" className="text-primary">
            <Cable />
          </Link>

          <ul className="ml-auto space-x-6 text-muted-foreground">
            {LINKS.map((link, index) => (
              <li key={index} className="inline-block hover:text-primary">
                <Link href={link.href} className="text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Separator orientation="vertical" className="mx-4" />

          <Link
            href="https://github.com/aridanpantoja/cntoolkit"
            className={buttonVariants({
              size: 'icon',
              variant: 'ghost',
              className: 'text-muted-foreground',
            })}
          >
            <GitHubLogoIcon />
          </Link>
        </nav>
      </MaxWidthWrapper>
    </header>
  )
}
