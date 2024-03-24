'use client'

import Image from 'next/image'
import { ModeToggle } from '@/components/Theme'
import { MyLink } from './MyLink'
import { useState } from 'react'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div className="w-full flex justify-between relative h-28 sm:z-[999] sm:fixed items-center px-2 sm:justify-center sm:gap-x-20 bg-[#012E71] sm:h-32">
      <Image src="/images/logos/logo-bottomless.png" width={120} height={120} alt="logo" quality={100} />
      <div className="hidden sm:flex sm:flex-col sm:gap-y-4">
        <div className="flex justify-center items-center">
          <div className="flex gap-x-2 items-center">
            <Image src="/svgs/whatsapp.svg" alt="Whatsapp icon" width={28} height={28} quality={100} />
            <span className="text-white">(73) 99962-5499</span>
          </div>
        </div>
        <div className="w-full border"></div>
        <div className="items-center justify-between flex gap-8">
          <MyLink href="/">Inicio</MyLink>
          <MyLink href="/contatos">Contatos</MyLink>
          <MyLink href="/clientes">Clientes</MyLink>
        </div>
      </div>
      <div className="items-center hidden sm:flex sm:absolute right-2">
        <ModeToggle />
      </div>

      <button
        className="w-8 h-6 z-10 cursor-pointer relative flex flex-col justify-between md:hidden items-center"
        onClick={toggleNavbar}
      >
        <div
          // eslint-disable-next-line prettier/prettier
          className={`w-full h-[3px] bg-primary rounded duration-300  ${showNavbar && 'absolute -rotate-45 top-2/4 translate-y-[-50%]'
            // eslint-disable-next-line prettier/prettier
            }`}
        ></div>
        <div
          // eslint-disable-next-line prettier/prettier
          className={`w-full h-[3px] bg-primary rounded duration-300  ${showNavbar && 'rotate-0 opacity-0'
            // eslint-disable-next-line prettier/prettier
            }`}
        ></div>
        <div
          // eslint-disable-next-line prettier/prettier
          className={`w-full h-[3px] bg-primary rounded duration-300  ${showNavbar && 'absolute rotate-45 bottom-2/4 translate-y-[50%]'
            // eslint-disable-next-line prettier/prettier
            }`}
        ></div>
      </button>

      <nav
        className={`${showNavbar ? 'absolute flex' : 'hidden'} 
                z-50 border-l border-t md:hidden transition-all duration-500 bg-background dark:bg-[#121212] flex-col items-start shadow-md dark:shadow-none justify-start gap-y-28 w-80 overflow-hidden max-h-0 
                ${showNavbar && 'py-4'}  
                px-4 rounded-md 
                ${showNavbar && 'max-h-[500px]'} top-full right-0`}
      >
        <ul className="flex flex-col gap-y-3">
          <li>
            <MyLink href="/">Inicio</MyLink>
          </li>
          <li>
            <MyLink href="/contatos">Contatos</MyLink>
          </li>
          <li>
            <MyLink href="/clientes">Clientes</MyLink>
          </li>
        </ul>
        <ModeToggle />
      </nav>
    </div>
  )
}

export { Navbar }
