import { GitHubLogoIcon, StarFilledIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Logo } from './logo'
import { MaxWidthWrapper } from './max-width-wrapper'
import { badgeVariants } from './ui/badge'
import { buttonVariants } from './ui/button'
import { Separator } from './ui/separator'
import { siteConfig } from '@/config'

export function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 flex h-16 items-center bg-background/25 py-4 backdrop-blur-xl">
      <MaxWidthWrapper>
        <nav className="py-auto flex h-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Logo />
            </Link>

            <Link
              href={siteConfig.github}
              className={badgeVariants({ variant: 'custom' })}
            >
              Star on Github{' '}
              <StarFilledIcon className="ml-1 size-3 text-primary" />
            </Link>
          </div>

          <ul className="ml-auto space-x-6 text-muted-foreground">
            {siteConfig.links.map((link, index) => (
              <li key={index} className="inline-block hover:text-primary">
                <Link href={link.href} className="text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Separator orientation="vertical" className="mx-4" />

          <Link
            href={siteConfig.github}
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
