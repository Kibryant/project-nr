'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/utils/cn'

interface MyLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

const MyLink: React.FC<MyLinkProps> = ({ children, href, className }) => {
  const pathname = usePathname()

  return (
    <Link href={href} className="flex items-end gap-x-2">
      <span
        // eslint-disable-next-line prettier/prettier
        className={cn(`origin-left duration-300 ${pathname === href && 'text-primary font-bold'
          }`,
          className,
        )}
      >
        {children}
      </span>
    </Link>
  )
}

export { MyLink }
