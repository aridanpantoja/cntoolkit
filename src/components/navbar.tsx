import { Cable } from 'lucide-react'
import Link from 'next/link'
import { MaxWidthWrapper } from './max-width-wrapper'

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
    <header className="flex h-14 items-center border-b">
      <MaxWidthWrapper>
        <nav className="py-auto flex h-full items-center justify-between">
          <Link href="/" className="text-primary">
            <Cable />
          </Link>

          <ul className="space-x-6 text-muted-foreground">
            {LINKS.map((link, index) => (
              <li key={index} className="inline-block hover:text-primary">
                <Link href={link.href} className="text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </MaxWidthWrapper>
    </header>
  )
}
