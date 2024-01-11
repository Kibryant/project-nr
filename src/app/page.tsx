import { Header } from '@/components/Header'
import { Section } from '@/components/Section'
import { Title } from '@/components/Title'

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
        <Section className="section">
          <Title title="Quem somos" titleGreenPart="nós?" />
        </Section>
      </main>
    </>
  )
}

export default Page
