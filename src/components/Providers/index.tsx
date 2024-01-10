'use client'

import { ThemeProvider } from 'next-themes'
import { Alert, AlertTitle, AlertDescription } from '../ui/alert'
import { useState, useEffect } from 'react'
import { RocketIcon } from 'lucide-react'
import Link from 'next/link'

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 100) {
        setShowAlert(true)
      } else {
        setShowAlert(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>

      {showAlert && (
        <Alert className="fixed bottom-2 right-2 max-w-[200px] alert main-gradient border-none">
          <RocketIcon className="h-4 w-4 text-secondary" />
          <AlertTitle>Venha nos conhecer!</AlertTitle>
          <AlertDescription>
            <Link href="/contatos" className="text-bold">
              Fale Conosco
            </Link>
          </AlertDescription>
        </Alert>
      )}
    </>
  )
}

export { Providers }
