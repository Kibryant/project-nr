import Image from 'next/image'
import { MyLink } from '../Navbar/MyLink'
import { EnvelopeClosedIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import { Facebook, LinkedinIcon, MapPin, PhoneIcon } from 'lucide-react'
import { MyDialog } from '../MyDialog'

const Footer = () => {
  return (
    <footer className="w-full p-1 mt-20 flex justify-center bg-[#012E71] h-screen sm:h-[50vh]">
      <div className="w-full max-w-7xl grid grid-cols-2 relative place-items-start place-content-between">
        <div className="flex flex-col gap-y-8">
          <Image
            src="/images/logos/main-logo.png"
            alt="NR Representações"
            width={100}
            height={89}
            quality={100}
          />
          <div className="flex flex-col gap-y-4 ms-5">
            <h4 className="font-extrabold text-white text-lg">Links</h4>
            <ul>
              <li>
                <MyLink className="text-zinc-300" href="/">
                  Incio
                </MyLink>
              </li>
              <li>
                <MyLink className="text-zinc-300" href="/contatos">
                  Contatos
                </MyLink>
              </li>
              <li>
                <MyLink className="text-zinc-300" href="/parceiros">
                  Parceiros
                </MyLink>
              </li>
              <li>
                <MyLink className="text-zinc-300" href="/contact">
                  Contato
                </MyLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4 ms-5">
            <h4 className="font-extrabold text-white text-lg">
              Algum dúvida?
              <br />A gente ajuda você!
            </h4>
            <ul className="space-y-2">
              <li className="max-w-fit flex flex-col sm:flex-row sm:gap-x-1 sm:justify-center sm:items-center">
                <EnvelopeClosedIcon className="text-zinc-300 w-4 h-4" />
                <span className="text-zinc-300">arthurgustavon@gmail.com</span>
              </li>
              <li className="max-w-fit flex flex-col sm:flex-row sm:gap-x-1 sm:justify-center sm:items-center">
                <PhoneIcon className="text-zinc-300 w-4 h-4" />
                <span className="text-zinc-300">(73) 99962-5449</span>
              </li>
            </ul>
          </div>
          <div className="absolute bottom-0 left-0">
            <span className="text-zinc-400">
              &copy;NR Representações 2023 | <br />
              Todos os Direitos Reservados.
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-y-8 m-6">
          <div>
            <h4 className="text-white font-extrabold text-lg">Redes Socias</h4>
            <ul className="flex items-center gap-x-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/nrrepresentante"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon className="text-zinc-300 w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/neto.representacoes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogoIcon className="text-zinc-300 w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100083159710993"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook className="text-zinc-300 w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nrrepresentacoes/"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
              <li>
                <MyDialog />
              </li>
            </ul>
          </div>
          <div className="mt-[24px]">
            <h4 className="text-white font-extrabold text-lg flex gap-x-1">
              <MapPin className="text-white w-6 h-6" />
              Endereço
            </h4>
            <p className="text-zinc-300 flex">
              Edíficio MultiPlace sala 605, Av. Juracy Magalhães 3340, Boa
              Vista, Vitória da Conquista - BA.
            </p>
          </div>
          <div className="ms-5 absolute bottom-0 right-0">
            <Image
              src="/images/logos/main-logo.png"
              alt="NR Representações"
              width={40}
              height={40}
              quality={100}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
