import Image from 'next/image'
import { HeaderSwiper } from '../HeaderSwiper'
import { ChevronDown } from 'lucide-react'

interface RootProps {
  children?: React.ReactNode
  showSwiper?: boolean
  showChevronDown?: boolean
  hrefToChevronDown?: string
}

const Root = ({ children, showChevronDown, showSwiper, hrefToChevronDown }: RootProps) => {
  return (
    <header
      className="flex flex-col items-center justify-start space-y-8 w-full mt-10 sm:mt-0 sm:h-screen sm:justify-center sm:relative"
      id="inicio"
    >
      <div className="max-w-6xl px-2 flex justify-between items-center sm:gap-x-4">{children}</div>
      <Image src="/svgs/line.svg" alt="NR Representações" fill className="hidden sm:block" />
      {showSwiper && <HeaderSwiper />}
      {showChevronDown && (
        <a href={`#${hrefToChevronDown}`} className="hidden sm:block sm:absolute sm:bottom-10">
          <ChevronDown className="h-20 w-20 text-primary/80" />
        </a>
      )}
    </header>
  )
}

export { Root }
