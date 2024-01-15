'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'
import { ImageComponent } from '../ImageComponent'

const ImageSwiper = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-y-8 sm:flex-row sm:gap-y-0 sm:gap-x-4">
      <div className="flex flex-col justify-center items-center w-full">
        <h3 className="text-primary text-2xl font-semibold mb-1 sm:text-3xl">
          Eventos
        </h3>
        <div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselPrevious className="left-10 top-2/4 z-50" />
            <CarouselNext className="right-2 top-2/4 z-50" />
            <CarouselContent className="">
              <CarouselItem>
                <ImageComponent
                  src="/images/gallery/events/event-1.jpg"
                  width={1920}
                  height={1038}
                  alt="Background logo"
                />
              </CarouselItem>
              <CarouselItem>
                <ImageComponent
                  src="/images/gallery/events/event-2.jpg"
                  width={1920}
                  height={1038}
                  alt="Background logo"
                />
              </CarouselItem>
              <CarouselItem>
                <ImageComponent
                  src="/images/gallery/events/event-3.jpg"
                  width={1920}
                  height={1038}
                  alt="Background logo"
                />
              </CarouselItem>
              <CarouselItem>
                <ImageComponent
                  src="/images/gallery/events/event-4.jpg"
                  width={1920}
                  height={1038}
                  alt="Background logo"
                />
              </CarouselItem>
              <CarouselItem>
                <ImageComponent
                  src="/images/gallery/events/event-5.png"
                  width={1920}
                  height={1038}
                  alt="Background logo"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <h3 className="text-primary text-2xl font-semibold mb-1 sm:text-3xl">
          Treinamento
        </h3>
        <div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 6000,
              }),
            ]}
          >
            <CarouselPrevious className="left-10 top-2/4 z-50" />
            <CarouselNext className="right-2 top-2/4 z-50" />
            <CarouselContent className="">
              <CarouselItem>
                <ImageComponent
                  src="/images/gallery/training/training-1.jpg"
                  width={1600}
                  height={900}
                  alt="Background logo"
                />
              </CarouselItem>
              <CarouselItem>
                <ImageComponent
                  src="/images/gallery/training/training-2.jpg"
                  width={1600}
                  height={900}
                  alt="Background logo"
                />
              </CarouselItem>
              <CarouselItem>
                <ImageComponent
                  src="/images/gallery/training/training-3.jpg"
                  width={1600}
                  height={900}
                  alt="Background logo"
                />
              </CarouselItem>
              <CarouselItem>
                <ImageComponent
                  src="/images/gallery/training/training-4.jpg"
                  width={1600}
                  height={900}
                  alt="Background logo"
                />
              </CarouselItem>
              <CarouselItem>
                <ImageComponent
                  src="/images/gallery/training/training-5.jpg"
                  width={1600}
                  height={900}
                  alt="Background logo"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <h3 className="text-primary text-2xl font-semibold mb-1 sm:text-3xl">
          Trabalho em campo
        </h3>
        <div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 6000,
              }),
            ]}
          >
            <CarouselPrevious className="left-10 top-2/4 z-50" />
            <CarouselNext className="right-2 top-2/4 z-50" />
            <CarouselContent className="">
              <CarouselItem>
                <ImageComponent
                  src="/images/gallery/field-work/field-work-1.jpg"
                  width={1600}
                  height={900}
                  alt="Background logo"
                />
              </CarouselItem>
              <CarouselItem>
                <ImageComponent
                  src="/images/gallery/field-work/field-work-2.jpg"
                  width={1600}
                  height={900}
                  alt="Background logo"
                />
              </CarouselItem>
              <CarouselItem>
                <ImageComponent
                  src="/images/gallery/field-work/field-work-3.jpg"
                  width={1600}
                  height={900}
                  alt="Background logo"
                />
              </CarouselItem>
              <CarouselItem>
                <ImageComponent
                  src="/images/gallery/field-work/field-work-4.jpg"
                  width={1600}
                  height={900}
                  alt="Background logo"
                />
              </CarouselItem>
              <CarouselItem>
                <ImageComponent
                  src="/images/gallery/field-work/field-work-5.jpg"
                  width={1600}
                  height={900}
                  alt="Background logo"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export { ImageSwiper }
