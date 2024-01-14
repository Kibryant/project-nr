import Card from '@/components/Card'
import { Header } from '@/components/Header'
import { ImageSwiper } from '@/components/ImageSwiper'
import { PanelCard } from '@/components/PanelCard'
import { PanelCardSwiper } from '@/components/PanelCardSwiper'
import { Section } from '@/components/Section'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { CloudLightningIcon, CompassIcon, TargetIcon } from 'lucide-react'
import Image from 'next/image'

const Page = () => {
  return (
    <>
      <Header
        title="Seja bem vindo(a) á"
        titleGreenPart="NR Representações!"
        subTitle="Nossa história é de paixão por qualidade e dedicação ao cliente."
        subtitleGreenPart="Desde de 2018, fornecemos os melhores produtos para todo o Nordeste!"
        showButtons
        showChevronDown
        showSwiper
      />

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
            <Subtitle subtitle="Pensada e criada para você nosso cliente!" />
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
              title="Inovação e Excelência"
              description="novação e Excelência moldam nossa jornada. Na vanguarda da criatividade, estamos comprometidos em oferecer experiências excepcionais. Descubra um caminho repleto de qualidade e descobertas transformadoras conosco."
            />
          </div>
        </Section>
        <Section className="space-y-10" id="nossos-produtos">
          <div className="flex flex-col justify-center w-full items-center">
            <Title
              title="Missão, visão e valores"
              titleGreenPart="da nossa empresa"
            />
            <Subtitle subtitle="Essência Empresarial: Missão, Visão e Valores" />
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
        <Section className="space-y-10">
          <div className="flex flex-col justify-center w-full items-center">
            <Title title="Nosso mundo" titleGreenPart="em imagens" />
            <Subtitle subtitle="Um Registro Visual de Treinamentos, Eventos e Ações no Campo" />
          </div>
          <ImageSwiper />
        </Section>
      </main>
    </>
  )
}

export default Page
