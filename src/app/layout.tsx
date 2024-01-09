import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

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
        <body className={`${inter.className} min-h-screen antialiased overflow-x-hidden`}>
                <Providers>{children}</Providers>
        </body>
    </html>
  )
}
