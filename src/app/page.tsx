import Card from '@/components/Card'
import { Header } from '@/components/Header'
import { Section } from '@/components/Section'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { Compass } from 'lucide-react'

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

      <main>
        <Section className="space-y-10" id="quem-somos-nos">
          <div className="flex flex-col justify-center w-full items-center">
            <Title title="Quem somos" titleGreenPart="nós?" />
            <Subtitle subtitle="Pensada e criada para você nosso cliente!" />
          </div>
          <div className="flex">
            <Card
              Icon={Compass}
              title="Sua necessidade é nossa bússola!"
              description="Sua necessidade é nossa bússola! temos uma missão clara: superar todas as expectativas ao oferecer os melhores produtos. Dedicamos a elevar padrões, combinando qualidade, inovação e sua satisfação como nosso guia."
            />
            <Card
              Icon={Compass}
              title="Sua necessidade é nossa bússola!"
              description="Sua necessidade é nossa bússola! temos uma missão clara: superar todas as expectativas ao oferecer os melhores produtos. Dedicamos a elevar padrões, combinando qualidade, inovação e sua satisfação como nosso guia."
            />
            <Card
              Icon={Compass}
              title="Sua necessidade é nossa bússola!"
              description="Sua necessidade é nossa bússola! temos uma missão clara: superar todas as expectativas ao oferecer os melhores produtos. Dedicamos a elevar padrões, combinando qualidade, inovação e sua satisfação como nosso guia."
            />
          </div>
        </Section>
      </main>
    </>
  )
}

export default Page
