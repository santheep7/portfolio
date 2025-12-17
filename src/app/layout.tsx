import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import CustomThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Santheep Krishna V G - Full Stack Developer',
  description: 'Portfolio of Santheep Krishna V G, a passionate MERN Stack Developer specializing in modern web applications.',
  keywords: 'Full Stack Developer, MERN Stack, React, Node.js, MongoDB, Express, JavaScript, TypeScript, Next.js',
  authors: [{ name: 'Santheep Krishna V G' }],
  icons: {
    icon: '/developer.gif',
    shortcut: '/developer.gif',
    apple: '/developer.gif',
  },
  openGraph: {
    title: 'Santheep Krishna V G - Full Stack Developer',
    description: 'Portfolio of Santheep Krishna V G, a passionate MERN Stack Developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/developer.gif" type="image/gif" />
        <link rel="shortcut icon" href="/developer.gif" type="image/gif" />
      </head>
      <body className={inter.className}>
        <CustomThemeProvider>
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  )
}