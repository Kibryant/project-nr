'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
      <Image
        src="/images/logos/main-logo-shadow.png"
        alt="NR Representações"
        width={40}
        height={40}
        quality={100}
      />
      <CarouselContent className="h-auto">
        <CarouselItem className="flex rounded-md justify-center items-center shadow-md dark:shadow-none p-4">
          <Image
            src="/images/brands/ccm.png"
            alt="NR Representações"
            width={200}
            height={200}
            quality={100}
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center shadow-md dark:shadow-none p-4">
          <Image
            src="/images/brands/confort-pet.png"
            alt="NR Representações"
            width={200}
            height={200}
            quality={100}
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center shadow-md dark:shadow-none p-4">
          <Image
            src="/images/brands/doogs.png"
            alt="NR Representações"
            width={200}
            height={200}
            quality={100}
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center shadow-md dark:shadow-none p-4">
          <Image
            src="/images/brands/matsuda.png"
            alt="NR Representações"
            width={200}
            height={200}
            quality={100}
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center shadow-md dark:shadow-none p-4">
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
