import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface MaxWidthWrapperProps {
  children: ReactNode
  className?: string
}

export function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return (
    <div
      className={cn(
        'mx-auto h-full w-full max-w-screen-xl px-2.5 md:px-20',
        className,
      )}
    >
      {children}
    </div>
  )
}
