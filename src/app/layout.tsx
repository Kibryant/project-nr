import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NR Representações',
  description: 'Representações comerciais',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <Providers>
        <body className={`${inter.className} min-h-screen antialiased`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
