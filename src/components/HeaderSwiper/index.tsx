'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

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
      className="block sm:hidden"
    >
      <h4 className="text-center mb-2">
        Nossos <span className="text-primary">Parceiros</span>
      </h4>
      <CarouselPrevious className="left-2 top-2/4" />
      <CarouselNext className="right-2 top-2/4" />
      <CarouselContent className="">
        <CarouselItem className="flex rounded-md justify-center items-center max-h-96">
          <Image
            src="/images/banner/ccm.png"
            alt="NR Representações"
            width={350}
            height={112.61}
            quality={100}
            className="rounded-md p-8 border"
          />
        </CarouselItem>
        <CarouselItem className="flex rounded-md justify-center items-center max-h-96">
          <Image
            src="/images/banner/confort-pet.png"
            alt="NR Representações"
            width={350}
            height={112.61}
            quality={100}
            className="rounded-md p-8 border"
          />
        </CarouselItem>
        <CarouselItem className="flex rounded-md justify-center items-center max-h-96">
          <Image
            src="/images/banner/doogs.png"
            alt="NR Representações"
            width={350}
            height={112.61}
            quality={100}
            className="rounded-md p-8 border"
          />
        </CarouselItem>
        <CarouselItem className="flex rounded-md justify-center items-center max-h-96">
          <Image
            src="/images/banner/matsuda.png"
            alt="NR Representações"
            width={350}
            height={112.61}
            quality={100}
            className="rounded-md p-8 border"
          />
        </CarouselItem>
        <CarouselItem className="flex rounded-md justify-center items-center max-h-96">
          <Image
            src="/images/banner/petyan.png"
            alt="NR Representações"
            width={350}
            height={112.61}
            quality={100}
            className="rounded-md p-8 border"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

export { HeaderSwiper }
