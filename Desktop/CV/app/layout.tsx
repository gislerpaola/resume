import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Paola Gisler - Creative Storyteller & Tech Builder',
  description: 'From film sets to code: Building the future at the intersection of storytelling, crypto, and tech.',
  keywords: 'Paola Gisler, Film Director, Web3 Developer, Blockchain, Python, Operations, Creative Technologist',
  authors: [{ name: 'Paola Gisler' }],
  openGraph: {
    title: 'Paola Gisler - Creative Storyteller & Tech Builder',
    description: 'From film sets to code: Building the future at the intersection of storytelling, crypto, and tech.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}