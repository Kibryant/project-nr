import { Header } from '@/components/Header'
import { MapComponent } from '@/components/Map'
import { Section } from '@/components/Section'
import { SocialCard } from '@/components/SocialCard'
import { Title } from '@/components/Title'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { LinkedinIcon, Facebook } from 'lucide-react'
import Image from 'next/image'

const Page = () => {
  return (
    <>
      <Header
        title="Entre em contato com a"
        titleGreenPart="NR Representações"
        subTitle="Conecte-se para Parcerias de Sucesso:"
        subtitleGreenPart="Entre em Contato com a NR Representações"
        showChevronDown
        eventPicture="event-3.jpg"
        hrefToChevronDown="encontre-nos-aqui"
      />
      <main>
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
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/16712/whatsapp"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/svgs/whatsapp-green.svg"
                      alt="WhatsApp"
                      width={28}
                      height={28}
                      quality={100}
                    />
                  </a>

                  <h3 className="text-xl sm:text-[22px] font-bold">
                    NR Representações WhatsApp
                  </h3>
                </div>
                <a
                  href="https://wa.me/5573999625449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-10 text-sm font-semibold text-[#012E71] dark:text-primary sm:text-base sm:ms-0 sm:text-center hover:underline"
                >
                  (73) 99962-5449
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  )
}

export default Page
