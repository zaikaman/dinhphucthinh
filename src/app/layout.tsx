import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import CustomCursor from '@/components/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dinh Phuc Thinh - Portfolio',
  description: 'AI, Web & Mobile Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
