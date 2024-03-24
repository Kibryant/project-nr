import Image from 'next/image'
import { MyCheckIcon } from '../MyCheckIcon'

interface PanelCardProps {
  title: string
  subtitle: string
  texts: string[]
  image: string
  alt: string
  makedBy: string
}

const PanelCard = ({ title, subtitle, texts, image, alt, makedBy }: PanelCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <a href={makedBy}>
        <Image src={`/svgs/${image}.svg`} width={250} height={250} alt={alt} quality={100} />
      </a>

      <h3 className="text-2xl font-semibold text-center text-primary mt-4">{title}</h3>
      <p className="text-center">{subtitle}</p>
      <ul className="mt-6 flex flex-col justify-start items-start gap-y-3">
        {texts.map((text, index) => (
          <li key={index} className="flex gap-x-1 justify-center items-center">
            <MyCheckIcon />
            <p className="text-sm">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { PanelCard }
