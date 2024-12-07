import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Đinh Phúc Thịnh - AI, Web & Mobile Developer',
  description: 'Personal portfolio of Đinh Phúc Thịnh, showcasing expertise in AI, Web, and Mobile development. TOEIC 960.',
  keywords: [
    'Đinh Phúc Thịnh',
    'AI Developer',
    'Web Developer',
    'Mobile Developer',
    'Full Stack Developer',
    'Portfolio',
    'TOEIC 960'
  ],
  authors: [{ name: 'Đinh Phúc Thịnh' }],
  creator: 'Đinh Phúc Thịnh',
  publisher: 'Đinh Phúc Thịnh',
  robots: 'index, follow',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body className={`${spaceGrotesk.className} bg-black text-white antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
