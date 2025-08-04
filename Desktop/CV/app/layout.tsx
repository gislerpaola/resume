import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Paola Gisler | Developer & Automation Specialist',
  description: 'Full-stack developer specializing in Python, Web3, and process automation. Building the future of decentralized applications.',
  keywords: 'developer, python, web3, blockchain, automation, full-stack, cryptocurrency, defi',
  authors: [{ name: 'Paola Gisler' }],
  openGraph: {
    title: 'Paola Gisler | Developer & Automation Specialist',
    description: 'Full-stack developer specializing in Python, Web3, and process automation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paola Gisler | Developer & Automation Specialist',
    description: 'Full-stack developer specializing in Python, Web3, and process automation.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-950">
          {children}
        </div>
      </body>
    </html>
  )
}