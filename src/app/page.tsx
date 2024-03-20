import Card from '@/components/Card'
import { Header } from '@/components/Header'
import { PanelCard } from '@/components/PanelCard'
import { PanelCardSwiper } from '@/components/PanelCardSwiper'
import { Section } from '@/components/Section'
import { Title } from '@/components/Title'
import { CloudLightningIcon, CompassIcon, TargetIcon } from 'lucide-react'
import Image from 'next/image'

const Page = () => {
  return (
    <>
      <Header
        title=""
        titleGreenPart="NR Representações!"
        subTitle="Nossa história é de paixão por qualidade e dedicação ao cliente."
        subtitleGreenPart="Desde de 2018, fornecemos os melhores produtos para todo o Nordeste!"
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
            <Title
              title="Missão, visão e valores"
              titleGreenPart="da nossa empresa"
            />
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
        {/* <Section className="space-y-10" id="nosso-mundo-em-imagens">
          <div className="flex flex-col justify-center w-full items-center">
            <Title title="Nosso mundo" titleGreenPart="em imagens" />
          </div>
          <ImageSwiper />
        </Section>
        <Section className="space-y-10" id="encontre-nos-aqui">
          <div className="flex flex-col justify-center w-full items-center">
            <Title title="Encontre-nos" titleGreenPart="aqui" />
          </div>
          <div className="flex flex-col justify-center items-center space-y-5 sm:flex-row sm:justify-around sm:space-y-0">
            <div className="flex flex-col justify-center items-center sm:gap-y-2">
              <MapComponent />
              <Image
                src="/images/company/multiplace-company.jpg"
                alt="NR Representações"
                width={400}
                height={400}
                quality={100}
                className="hidden sm:block rounded-md"
              />
            </div>
            <div className="space-y-5 sm:space-y-5">
              <SocialCard
                icon={InstagramLogoIcon}
                link="https://www.instagram.com/neto.representacoes/"
                title="NR Representações Instagram"
              />
              <SocialCard
                icon={LinkedinIcon}
                link="https://www.linkedin.com/company/nrrepresentante"
                title="NR Representações Linkendin"
              />
              <SocialCard
                icon={Facebook}
                link="https://www.facebook.com/profile.php?id=61553876169811"
                title="NR Representações Facebook"
              />
              <div className="flex flex-col w-full items-start shadow-md p-4 max-h-64 rounded-md dark:shadow-none dark:border sm:items-center">
                <div className="w-full flex sm:flex-col sm:justify-center items-center gap-1 sm:gap-0">
                  <Image
                    src="/svgs/whatsapp-green.svg"
                    alt="WhatsApp"
                    width={28}
                    height={28}
                    quality={100}
                  />
                  <h3 className="text-xl sm:text-[22px] font-semibold">
                    NR Representações WhatsApp
                  </h3>
                </div>
                <a
                  href="https://wa.me/5573999625449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-10 text-sm sm:text-base sm:ms-0 sm:text-center hover:underline"
                >
                  (73) 99962-5449
                </a>
              </div>
            </div>
          </div>
        </Section> */}
      </main>
      {/* <a target="_blank" href="https://icons8.com/icon/16712/whatsapp">WhatsApp</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
    </>
  )
}

export default Page
