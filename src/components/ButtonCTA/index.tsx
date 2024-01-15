'use client'

import Link from 'next/link'
import { Button } from '../ui/button'

const ButtonCTA = () => {
  return (
    <div className="flex items-center gap-x-2 w-full max-w-lg px-2">
      <Button className="mt-4 w-full">
        <Link href="/a">Entre em contato</Link>
      </Button>
    </div>
  )
}

export { ButtonCTA }
