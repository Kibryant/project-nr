'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface MyLinkProps {
  href: string
  children: React.ReactNode
}

const MyLink: React.FC<MyLinkProps> = ({ children, href }) => {
  const pathname = usePathname()

  return (
    <Link href={href} className="flex items-end gap-x-2">
      <span
        // eslint-disable-next-line prettier/prettier
        className={`origin-left duration-300 ${pathname === href && 'text-primary font-bold'
          // eslint-disable-next-line prettier/prettier
          }`}
      >
        {children}
      </span>
    </Link>
  )
}

export { MyLink }
