import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paola G - Creative Technologist',
  description: 'Creative background → film AD → operations/BPO → learning Python/Web3. Problem solver, process optimizer, building at intersection of storytelling, crypto, and tech.',
  keywords: ['Paola G', 'Creative Technologist', 'Python', 'Web3', 'Film Production', 'Operations'],
  authors: [{ name: 'Paola G' }],
  openGraph: {
    title: 'Paola G - Creative Technologist',
    description: 'Creative background → film AD → operations/BPO → learning Python/Web3. Problem solver, process optimizer, building at intersection of storytelling, crypto, and tech.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paola G - Creative Technologist',
    description: 'Creative background → film AD → operations/BPO → learning Python/Web3. Problem solver, process optimizer, building at intersection of storytelling, crypto, and tech.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}