import Image from 'next/image'
import { ModeToggle } from '@/components/Theme'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between relative sm:z-[999] sm:fixed items-center px-2 sm:justify-start sm:gap-x-20 bg-[#012E71] h-20">
      <Image
        src="/images/logos/main-logo.png"
        width={80}
        height={80}
        alt="logo"
        className="hidden dark:block"
        quality={100}
      />
      <Image
        src="/images/logos/main-logo-shadow.png"
        width={80}
        height={80}
        alt="logo"
        className="dark:hidden"
        quality={100}
      />
      <div className="items-center justify-between hidden gap-8 md:flex">
        <a href="/#inicio">
          <span
            className={`origin-left duration-300 hover:underline text-white`}
          >
            Inicio
          </span>
        </a>
        <a href="/#quem-somos-nos">
          <span
            className={`origin-left duration-300 hover:underline text-white`}
          >
            Quem somos nós
          </span>
        </a>
        <a href="/#missao-visao-valores">
          <span
            className={`origin-left duration-300 hover:underline text-white`}
          >
            Missão, visão e valores
          </span>
        </a>
        <a href="/#nosso-mundo-em-imagens">
          <span
            className={`origin-left duration-300 hover:underline text-white`}
          >
            Nosso mundo em imagens
          </span>
        </a>
        <a href="/#encontre-nos-aqui">
          <span
            className={`origin-left duration-300 hover:underline text-white`}
          >
            Encontre nos aqui
          </span>
        </a>
      </div>
      <div className="items-center hidden sm:flex sm:absolute right-2">
        <ModeToggle />
      </div>
      <div className="block sm:hidden">
        <ModeToggle />
      </div>
    </div>
  )
}

export { Navbar }
