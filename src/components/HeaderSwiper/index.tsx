'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

const PanelCardSwiper = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent className="h-auto">
        <CarouselItem className=""></CarouselItem>
        <CarouselItem className=""></CarouselItem>
        <CarouselItem className=""></CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

export { PanelCardSwiper }
