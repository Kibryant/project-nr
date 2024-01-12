'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const HeaderSwiper = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
      className="block sm:hidden w-full h-auto"
    >
      <h4 className="text-center">
        Nossos <span className="text-primary">Parceiros</span>
      </h4>
      <CarouselPrevious className="absolute left-2 top-2/4" />
      <CarouselNext className="absolute right-2 top-2/4" />
      <CarouselContent className="h-auto">
        <CarouselItem className="flex rounded-md justify-center border-2 items-center p-4">
          <Image
            src="/images/brands/ccm.png"
            alt="NR Representações"
            width={200}
            height={200}
            quality={100}
          />
        </CarouselItem>
        <CarouselItem className="flex rounded-md justify-center border-2 items-center p-4">
          <Image
            src="/images/brands/confort-pet.png"
            alt="NR Representações"
            width={200}
            height={200}
            quality={100}
          />
        </CarouselItem>
        <CarouselItem className="flex rounded-md justify-center border-2 items-center p-4">
          <Image
            src="/images/brands/doogs.png"
            alt="NR Representações"
            width={200}
            height={200}
            quality={100}
          />
        </CarouselItem>
        <CarouselItem className="flex rounded-md justify-center border-2 items-center p-4">
          <Image
            src="/images/brands/matsuda.png"
            alt="NR Representações"
            width={200}
            height={200}
            quality={100}
          />
        </CarouselItem>
        <CarouselItem className="flex rounded-md justify-center border-2 items-center p-4">
          <Image
            src="/images/brands/petyan.png"
            alt="NR Representações"
            width={200}
            height={200}
            quality={100}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

export { HeaderSwiper }
