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
        <MyLink href="/">Inicio</MyLink>
        <MyLink href="/contatos">Contatos</MyLink>
        <MyLink href="/clientes">Clientes</MyLink>
      </div>
      <div className="items-center hidden sm:flex sm:absolute right-2">
        <ModeToggle />
      </div>

      <button
        className="w-6 h-4 z-10 cursor-pointer relative flex flex-col justify-between md:hidden items-center"
        onClick={toggleNavbar}
      >
        <div
          // eslint-disable-next-line prettier/prettier
          className={`w-full h-[2px] bg-primary rounded duration-300  ${showNavbar && 'absolute -rotate-45 top-2/4 translate-y-[-50%]'
            // eslint-disable-next-line prettier/prettier
            }`}
        ></div>
        <div
          // eslint-disable-next-line prettier/prettier
          className={`w-full h-[2px] bg-primary rounded duration-300  ${showNavbar && 'rotate-0 opacity-0'
            // eslint-disable-next-line prettier/prettier
            }`}
        ></div>
        <div
          // eslint-disable-next-line prettier/prettier
          className={`w-full h-[2px] bg-primary rounded duration-300  ${showNavbar && 'absolute rotate-45 bottom-2/4 translate-y-[50%]'
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
            <MyLink href="/parceiros">Parceiros</MyLink>
          </li>
        </ul>
        <ModeToggle />
      </nav>
    </div>
  )
}

export { Navbar }
