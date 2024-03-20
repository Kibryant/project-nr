import { Badge } from '../ui/badge'
import { ChevronDown, Heart } from 'lucide-react'
import Image from 'next/image'
import { HeaderSwiper } from '../HeaderSwiper'
import { ButtonCTA } from '../ButtonCTA'

interface HeaderProps {
  title: string
  titleGreenPart: string
  subTitle: string
  subtitleGreenPart: string
  showChevronDown?: boolean
  showSwiper?: boolean
  hrefToChevronDown?: string
  eventPicture: string
}

const Header = ({
  title,
  subTitle,
  titleGreenPart,
  subtitleGreenPart,
  showChevronDown = false,
  showSwiper = false,
  hrefToChevronDown = 'quem-somos-nos',
  eventPicture = "event-5.png"
}: HeaderProps) => {
  return (
    <header
      className="flex flex-col items-center justify-start space-y-8 w-full mt-10 sm:mt-0 sm:h-screen sm:justify-center sm:relative"
      id="inicio"
    >
      <div className="max-w-6xl px-2 flex justify-between items-center sm:gap-x-4">
        <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start sm:gap-y-4 gap-y-6"> 
          <Badge variant="outline">
            <span>Paixão e Qualidade que Combinam.</span>
            <Heart className="ml-2 text-primary" size={16} />
          </Badge>
          <h1 className="font-bold text-center text-4xl sm:text-5xl sm:text-left">
            {title}{' '}
            <span className="text-primary font-extrabold text-nowrap">
              {titleGreenPart}
            </span>
          </h1>
          <p className="mt-4 text-center sm:text-lg sm:text-left">
            {subTitle}{' '}<br className="hidden sm:block" />
            <span className="text-primary font-semibold">
              {subtitleGreenPart}
            </span>
          </p>
          <ButtonCTA />
        </div>
        <Image
          src={`/images/gallery/events/${eventPicture}`}
          alt="foto no evento"
          width={400}
          height={400}
          quality={100}
          className="hidden sm:block z-50 rounded-md"
        />
      </div>
      <Image
        src="/svgs/line.svg"
        alt="NR Representações"
        fill
        className="hidden sm:block"
      />
      {showSwiper && <HeaderSwiper />}
      {showChevronDown && (
        <a
          href={`#${hrefToChevronDown}`}
          className="hidden sm:block sm:absolute sm:bottom-10"
        >
          <ChevronDown className="h-20 w-20 text-primary/80" />
        </a>
      )}
    </header>
  )
}

export { Header }
