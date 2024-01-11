'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ModeToggle } from '@/components/Theme'
import { MyLink } from './MyLink'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu'
import { ChevronDownIcon } from 'lucide-react'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div className="w-full flex justify-between relative items-center border-b px-2 sm:justify-start sm:gap-x-20">
      <Image
        src="/images/logos/main-logo.png"
        width={50}
        height={50}
        alt="logo"
        className="hidden dark:block"
      />
      <Image
        src="/images/logos/main-logo-shadow.png"
        width={50}
        height={50}
        alt="logo"
        className="dark:hidden"
      />
      <div className="items-center justify-between hidden gap-8 md:flex">
        <MyLink href="/">Inicio</MyLink>
        <MyLink href="/contatos">Contatos</MyLink>
        <MyLink href="/parceiros">Parceiros</MyLink>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="border-primary flex justify-between items-center rounded-sm dark:bg-[#121212]"
              variant="outline"
            >
              <span>Galeria</span>
              <ChevronDownIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="border p-2 rounded-sm mt-3"
            align="start"
          >
            <DropdownMenuItem className="hover:border-none">
              <MyLink href="/galeria/treinamento">Treinamento</MyLink>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:border-none hover:underline">
              <MyLink href="/galeria/eventos">Eventos</MyLink>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:border-none hover:underline">
              <MyLink href="/galeria/trabalho-em-campo">
                Trabalho em Campo
              </MyLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
                border-l border-t md:hidden transition-all duration-500 bg-background dark:bg-[#121212] flex-col items-start shadow-md dark:shadow-none justify-start gap-y-28 w-80 overflow-hidden max-h-0 
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
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-transparent" asChild>
                <Button
                  className="border-secondary-foreground flex justify-between items-center rounded-sm p-2"
                  variant="outline"
                >
                  <span>Galeria</span>
                  <ChevronDownIcon className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="border p-2 rounded-sm mt-3 dark:bg-[#121212]"
                align="start"
              >
                <DropdownMenuItem>
                  <MyLink href="/galeria/treinamento">Treinamento</MyLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MyLink href="/galeria/eventos">Eventos</MyLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MyLink href="/galeria/trabalho-em-campo">
                    Trabalho em Campo
                  </MyLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
        <ModeToggle />
      </nav>
    </div>
  )
}

export { Navbar }
