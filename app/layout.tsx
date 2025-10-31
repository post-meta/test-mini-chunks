import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Test Mini Closets | Custom Closet Solutions in Seattle, WA',
  description: 'Professional custom closet design and installation services in Seattle, Washington. Transform your space with our premium closet organization solutions.',
  keywords: 'custom closets, closet design, closet installation, Seattle closets, closet organization, storage solutions',
  authors: [{ name: 'Test Mini Closets' }],
  creator: 'Test Mini Closets',
  publisher: 'Test Mini Closets',
  openGraph: {
    title: 'Test Mini Closets | Custom Closet Solutions in Seattle, WA',
    description: 'Professional custom closet design and installation services in Seattle, Washington. Transform your space with our premium closet organization solutions.',
    url: 'https://testminiclosets.com',
    siteName: 'Test Mini Closets',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Mini Closets | Custom Closet Solutions in Seattle, WA',
    description: 'Professional custom closet design and installation services in Seattle, Washington.',
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
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://testminiclosets.com" />
      </head>
      <body>
        <header>
          <nav>
            {/* Navigation will be implemented in components */}
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          {/* Footer will be implemented in components */}
        </footer>
      </body>
    </html>
  )
}