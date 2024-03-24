import { cn } from '@/utils/cn'
import Image from 'next/image'

interface BrandBubblesProps {
  className?: string
  image: string
}

const BrandBubbles = ({ className, image }: BrandBubblesProps) => {
  return (
    <div
      className={cn(
        'absolute flex justify-center items-center w-20 h-20 rounded-full shadow-lg dark:shadow-none transform hover:scale-110 transition-transform dark:border',
        className,
      )}
    >
      <Image src={image} alt="Logo do nosso cliente" width={60} height={60} quality={100} />
    </div>
  )
}

export { BrandBubbles }
