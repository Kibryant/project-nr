'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
      <CarouselPrevious className="left-2 top-2/4" />
      <CarouselNext className="right-2 top-2/4" />
      <CarouselContent className="h-auto">
        <CarouselItem className="">
          <PanelCard
            title="Missão"
            makedBy="https://storyset.com/people"
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
            makedBy="https://storyset.com/people"
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
            makedBy="https://storyset.com/people"
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
