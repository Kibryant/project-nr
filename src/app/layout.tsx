import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NR Representações',
  description: 'Representações comerciais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-BR'>
        <body className={`${inter.className} min-h-screen antialiased scroll-smooth`}>
                <Providers>
                    <Header />
                    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                        {children}
                    </main>
                    {/* <Footer /> */}
                </Providers>
        </body>
    </html>
  )
}
