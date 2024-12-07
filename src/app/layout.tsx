import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import CustomCursor from '@/components/CustomCursor'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Đinh Phúc Thịnh - Lập Trình Viên AI, Web & Mobile',
  description: 'Portfolio của Đinh Phúc Thịnh, chuyên gia về AI, Phát triển Web và Ứng dụng Di động. TOEIC 960.',
  keywords: [
    'Đinh Phúc Thịnh',
    'Lập Trình Viên AI',
    'Lập Trình Web',
    'Lập Trình Mobile',
    'Lập Trình Full Stack',
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
    <html lang="vi" suppressHydrationWarning className="!scroll-smooth">
      <body className={`${spaceGrotesk.className} cursor-none bg-black text-white antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
