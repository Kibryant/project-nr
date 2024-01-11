import Card from '@/components/Card'
import { Header } from '@/components/Header'
import { Section } from '@/components/Section'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { Compass } from 'lucide-react'
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
      />

      <main className="space-y-14 sm:space-y-80">
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
          <div className="flex flex-col gap-y-8 sm:flex">
            <Card
              Icon={Compass}
              title="Sua necessidade é nossa bússola!"
              description="Sua necessidade é nossa bússola! temos uma missão clara: superar todas as expectativas ao oferecer os melhores produtos. Dedicamos a elevar padrões, combinando qualidade, inovação e sua satisfação como nosso guia."
            />
            <Card
              Icon={Compass}
              title="Qualidade e dedicação ao cliente!"
              description="Sua necessidade é nossa bússola! temos uma missão clara: superar todas as expectativas ao oferecer os melhores produtos. Dedicamos a elevar padrões, combinando qualidade, inovação e sua satisfação como nosso guia."
              className="sm:mt-96"
            />
            <Card
              Icon={Compass}
              title="Sua necessidade é nossa bússola!"
              description="Sua necessidade é nossa bússola! temos uma missão clara: superar todas as expectativas ao oferecer os melhores produtos. Dedicamos a elevar padrões, combinando qualidade, inovação e sua satisfação como nosso guia."
            />
          </div>
        </Section>
        <Section className="" id="nossos-produtos">
          <div className="flex flex-col justify-center w-full items-center">
            <Title
              title="Missão, visão e valores"
              titleGreenPart="da nossa empresa"
            />
            <Subtitle subtitle="Essência Empresarial: Missão, Visão e Valores" />
          </div>
        </Section>
      </main>
    </>
  )
}

export default Page
