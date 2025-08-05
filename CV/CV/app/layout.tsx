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
  title: 'Paola Gisler | AI-Powered Builder & Creative Technologist',
  description: 'From film sets to operations to building with AI. Creating solutions that bridge creativity, technology, and business impact.',
  keywords: 'AI builder, creative technologist, process automation, problem solver, film production, operations, business solutions',
  authors: [{ name: 'Paola Gisler' }],
  openGraph: {
    title: 'Paola Gisler | AI-Powered Builder & Creative Technologist',
    description: 'From film sets to operations to building with AI. Creating solutions that bridge creativity, technology, and business impact.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paola Gisler | AI-Powered Builder & Creative Technologist',
    description: 'From film sets to operations to building with AI. Creating solutions that bridge creativity, technology, and business impact.',
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