import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Paola Gisler | Clean Developer Portfolio',
  description: 'Creative technologist bridging film production and software development. Building elegant solutions with Python, Web3, and automation.',
  keywords: 'developer, python, web3, blockchain, automation, full-stack, creative technologist, film production',
  authors: [{ name: 'Paola Gisler' }],
  openGraph: {
    title: 'Paola Gisler | Clean Developer Portfolio',
    description: 'Creative technologist bridging film production and software development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paola Gisler | Clean Developer Portfolio',
    description: 'Creative technologist bridging film production and software development.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}