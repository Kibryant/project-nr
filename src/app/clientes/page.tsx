import { BrandBubbles } from '@/components/BrandBubbles'
import { Header } from '@/components/Header'
import { Section } from '@/components/Section'
import { Title } from '@/components/Title'
import { Badge } from '@/components/ui/badge'
import { Users2Icon } from 'lucide-react'

const Page = () => {
  return (
    <>
      <Header.Root showChevronDown hrefToChevronDown="nossos-clientes">
        <Header.Content>
          <Header.Description>
            <Badge variant="outline">
              <span className="text-[8px]">Qualidade garantida!</span>
              <Users2Icon className="ml-2 text-primary" size={12} />
            </Badge>
            <Header.Title title="Clientes" titleGreenPart="de Sucesso" />
            <Header.Subtitle
              subtitle="Conheça e Celebre os Clientes que Confiam em Nossas Escolhas -"
              subtitleGreenPart="Uma Jornada de Qualidade nas Suas Mãos"
            />
          </Header.Description>
          <Header.Image eventPicture="event-2.jpg" />
        </Header.Content>
      </Header.Root>

      <main>
        <Section className="space-y-10 relative mb-96 h-96" id="nossos-clientes">
          <div className="flex flex-col justify-center w-full items-center">
            <Title title="Nossos" titleGreenPart="Clientes" />
          </div>
          <BrandBubbles image="/images/clients/art-medic.png" />
          <BrandBubbles image="/images/clients/bahia-fort.png" className="right-0" />
          <BrandBubbles image="/images/clients/bella-vista.jpeg" className="bottom-0" />
          <BrandBubbles image="/images/clients/cabral-sousa.png" className="left-52 top-20" />
          <BrandBubbles image="/images/clients/cambul.png" className="sm:left-80 right-0 bottom-10" />
          <BrandBubbles
            image="/images/clients/confinar.png"
            className="sm:right-96 sm:-bottom-10 right-24 -bottom-20"
          />
          <BrandBubbles image="/images/clients/disbeme.png" className="sm:right-80 sm:top-10 -bottom-80" />
          <BrandBubbles image="/images/clients/elo.png" className="sm:left-96 sm:top-10 -bottom-96 right-0" />
          <BrandBubbles image="/images/clients/itao.png" className="sm:left-[500px] sm:bottom-10 -bottom-56 right-48" />
          <BrandBubbles image="/images/clients/licemaster.png" className="left-24 top-36" />
          <BrandBubbles image="/images/clients/lider.png" className="top-96 dark:bg-white" />
          <BrandBubbles image="/images/clients/meira.png" className="right-0 top-96" />
          <BrandBubbles image="/images/clients/mineirao.png" className="top-[650px] left-32" />
          <BrandBubbles image="/images/clients/mix-matheus.png" className="top-[500px] right-12" />
          <BrandBubbles image="/images/clients/pacaluz.png" className="left-28 top-80 sm:left-48 sm:top-[440px]" />
          <BrandBubbles image="/images/clients/plus-pharma.png" className="top-[700px] right-24 dark:bg-white" />
          <BrandBubbles
            image="/images/clients/portal-distribuidora.png"
            className="hidden sm:flex top-[700px] left-96 bg-black dark:bg-transparent"
          />
          <BrandBubbles
            image="/images/clients/pro-vendas.png"
            className="hidden sm:flex bg-black top-96 left-96 dark:bg-transparent"
          />
          <BrandBubbles
            image="/images/clients/provita.png"
            className="hidden sm:flex top-[500px] right-96 dark:bg-white"
          />
          <BrandBubbles image="/images/clients/rd-comercial.png" className="hidden sm:flex top-[550px] left-[500px]" />
          <BrandBubbles image="/images/clients/rondelli.png" className="hidden sm:flex right-2/4" />
          <BrandBubbles image="/images/clients/sas.png" className="hidden sm:flex left-2/4 top-44" />
          <BrandBubbles image="/images/clients/vipao.png" className="hidden sm:flex right-20 top-48" />
          <BrandBubbles image="/images/clients/vital-procifer.png" className="hidden sm:flex top-[600px] right-64" />
        </Section>
      </main>
    </>
  )
}

export default Page
