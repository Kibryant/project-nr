'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'
import { PanelCard } from '../PanelCard'
import { ButtonCTA } from '../ButtonCTA'

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
              'Prestar serviços de representação comercial com excelência.',
              'Efetuar vendas com qualidade e eficiência.',
              'Ser referência no mercado de representação comercial.',
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
              'Lealdade, fidelidade e colaboração na nossa jornada.',
              'Comprometimento, dedicação e responsabilidade.',
              'Inovação, criatividade e progresso constante.',
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
              'Excelência no atendimento, superando expectativas.',
              'Ambiente acolhedor e valorização do potencial individual.',
              'Parcerias sólidas e colaboração para benefícios mútuos.',
              'Alianças estratégicas e relacionamentos duradouros.',
            ]}
          />
        </CarouselItem>
      </CarouselContent>
      <ButtonCTA />
    </Carousel>
  )
}

export { PanelCardSwiper }
