import Card from '@/components/Card'
import { Header } from '@/components/Header'
import { PanelCard } from '@/components/PanelCard'
import { PanelCardSwiper } from '@/components/PanelCardSwiper'
import { Section } from '@/components/Section'
import { Title } from '@/components/Title'
import { Badge } from '@/components/ui/badge'
import { CloudLightningIcon, CompassIcon, Heart, TargetIcon } from 'lucide-react'
import Image from 'next/image'

const Page = () => {
  return (
    <>
      <Header.Root showSwiper showChevronDown hrefToChevronDown="quem-somos-nos">
        <Header.Content>
          <Header.Description>
            <Badge variant="outline">
              <span className="text-[8px]">Paixão e Qualidade que Combinam.</span>
              <Heart className="ml-2 text-primary" size={12} />
            </Badge>
            <Header.Title title="" titleGreenPart="NR Representações" />
            <Header.Subtitle
              subtitle="Nossa história é de paixão por qualidade e dedicação ao cliente."
              subtitleGreenPart="Desde de 2018, fornecemos os melhores produtos para todo o Nordeste!"
            />
          </Header.Description>
          <Header.Image eventPicture="event-5.png" />
        </Header.Content>
      </Header.Root>

      <main className="space-y-14 sm:space-y-80 sm:mt-16">
        <Section className="space-y-10 relative" id="quem-somos-nos">
          <Image
            src="/images/logos/background-logo.png"
            width={1920}
            height={1038}
            alt="Background logo"
            className="-z-10 absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
            quality={100}
          />
          <div className="flex flex-col justify-center w-full items-center">
            <Title title="Quem somos" titleGreenPart="nós?" />
          </div>
          <div className="flex flex-col gap-y-8 sm:flex-row">
            <Card
              Icon={CompassIcon}
              title="Sua necessidade é nossa bússola!"
              description="Sua necessidade é nossa bússola! temos uma missão clara: superar todas as expectativas ao oferecer os melhores produtos. Dedicamos a elevar padrões, combinando qualidade, inovação e sua satisfação como nosso guia."
            />
            <Card
              Icon={TargetIcon}
              title="Qualidade e dedicação ao cliente!"
              description="Compromisso inabalável com qualidade e dedicação ao cliente. Vamos além para superar expectativas, garantindo experiências excepcionais e relações duradouras. Sua satisfação é nossa prioridade."
              className="sm:mt-96"
            />
            <Card
              Icon={CloudLightningIcon}
              title="Inovação e excelência"
              description="Inovação e Excelência moldam nossa jornada. Na vanguarda da criatividade, estamos comprometidos em oferecer experiências excepcionais. Descubra um caminho repleto de qualidade e descobertas transformadoras conosco."
            />
          </div>
        </Section>
        <Section className="space-y-10" id="missao-visao-valores">
          <div className="flex flex-col justify-center w-full items-center">
            <Title title="Missão, visão e valores" titleGreenPart="da nossa empresa" />
          </div>
          <div className="block sm:hidden">
            <PanelCardSwiper />
          </div>
          <div className="hidden sm:flex sm:items-center sm:justify-between">
            <PanelCard
              title="Missão"
              subtitle="Encaminhando o Futuro com Propósito."
              alt="Missão"
              image="team-work"
              makedBy="https://storyset.com/people"
              texts={[
                'Prestar serviços de representação comercial com excelência.',
                'Efetuar vendas com qualidade e eficiência.',
                'Ser referência no mercado de representação comercial.',
              ]}
            />
            <PanelCard
              title="Valores"
              subtitle="Encaminhando o Futuro com Propósito."
              alt="Missão"
              image="company-amico"
              makedBy="https://storyset.com/people"
              texts={[
                'Lealdade, fidelidade e colaboração na nossa jornada.',
                'Comprometimento, dedicação e responsabilidade.',
                'Inovação, criatividade e progresso constante.',
              ]}
            />
            <PanelCard
              makedBy="https://storyset.com/people"
              title="Visão"
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
          </div>
        </Section>
      </main>
      {/* <a target="_blank" href="https://icons8.com/icon/16712/whatsapp">WhatsApp</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
    </>
  )
}

export default Page
