import Link from 'next/link'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { ChevronDown, Heart } from 'lucide-react'
import Image from 'next/image'

interface HeaderProps {
  title: string
  titleGreenPart: string
  subTitle: string
  subtitleGreenPart: string
  showButtons?: boolean
  showChevronDown?: boolean
}

const Header = ({
  title,
  subTitle,
  titleGreenPart,
  subtitleGreenPart,
  showButtons = false,
  showChevronDown = false,
}: HeaderProps) => {
  return (
    <header className="flex flex-col items-center justify-start w-full mt-10 sm:mt-0 sm:h-screen sm:justify-center sm:relative">
      <div className="max-w-6xl px-2 flex flex-col justify-center items-center gap-y-8">
        <Badge variant="outline">
          <span>Paixão e Qualidade que Combinam.</span>
          <Heart className="ml-2 text-primary" size={16} />
        </Badge>
        <h1 className="font-bold text-center text-5xl">
          {title} <span className="text-primary">{titleGreenPart}</span>
        </h1>
        <p className="mt-4 text-center sm:text-lg">
          {subTitle}{' '}
          <span className="text-primary font-semibold">
            {subtitleGreenPart}
          </span>
        </p>
        {showButtons && (
          <div className="flex items-center gap-x-2">
            <Button className="mt-4">
              <Link href="/produtos">Conheça nossos parceiros</Link>
            </Button>
            <Button className="mt-4" variant="secondary">
              <Link href="/contatos">Entre em contato</Link>
            </Button>
          </div>
        )}
      </div>
      <Image
        src="/svgs/line.svg"
        alt="NR Representações"
        fill
        className="hidden sm:block"
      />
      {showChevronDown && (
        <a
          href="#quem-somos-nos"
          className="hidden sm:block sm:absolute sm:bottom-10"
        >
          <ChevronDown className="h-20 w-20 text-primary/80" />
        </a>
      )}
    </header>
  )
}

export { Header }
