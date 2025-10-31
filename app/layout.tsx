import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Test Mini Closets | Custom Closet Solutions in Seattle, WA',
  description: 'Transform your space with custom closet designs and organization solutions in Seattle, Washington. Professional installation, quality materials, and personalized storage systems.',
  keywords: 'custom closets, closet organization, Seattle closets, storage solutions, closet design, walk-in closets, reach-in closets, closet systems',
  authors: [{ name: 'Test Mini Closets' }],
  creator: 'Test Mini Closets',
  publisher: 'Test Mini Closets',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://testminiclosets.com'),
  openGraph: {
    title: 'Test Mini Closets | Custom Closet Solutions in Seattle, WA',
    description: 'Transform your space with custom closet designs and organization solutions in Seattle, Washington.',
    url: 'https://testminiclosets.com',
    siteName: 'Test Mini Closets',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Mini Closets | Custom Closet Solutions in Seattle, WA',
    description: 'Transform your space with custom closet designs and organization solutions in Seattle, Washington.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header>
          <nav role="navigation" aria-label="Main navigation">
          </nav>
        </header>
        <main role="main">
          {children}
        </main>
        <footer role="contentinfo">
        </footer>
      </body>
    </html>
  )
}