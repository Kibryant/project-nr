'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'
import { PanelCard } from '../PanelCard'

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
        <CarouselItem className="">
          <PanelCard
            title="Missão"
            subtitle="Encaminhando o Futuro com Propósito."
            alt="Missão"
            image="team-work"
            texts={[
              'Encaminhar o futuro com propósito',
              'Ser referência no mercado de representação comercial',
              'Ser reconhecida como uma empresa de excelência',
            ]}
          />
        </CarouselItem>
        <CarouselItem className="">
          <PanelCard
            title="Valores"
            subtitle="Encaminhando o Futuro com Propósito."
            alt="Missão"
            image="company-amico"
            texts={[
              'Encaminhar o futuro com propósito',
              'Ser referência no mercado de representação comercial',
              'Ser reconhecida como uma empresa de excelência',
            ]}
          />
        </CarouselItem>
        <CarouselItem className="">
          <PanelCard
            title="Valores"
            subtitle="Encaminhando o Futuro com Propósito."
            alt="Missão"
            image="website-creator"
            texts={[
              'Encaminhar o futuro com propósito',
              'Ser referência no mercado de representação comercial',
              'Ser reconhecida como uma empresa de excelência',
            ]}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

export { PanelCardSwiper }
