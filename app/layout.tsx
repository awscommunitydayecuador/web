import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: 'AWS Community Day Ecuador 2025',
  description: 'Participa en AWS Community Day Ecuador 2025: charlas, talleres y labs sobre la nube AWS. Aprende con expertos y conecta con la comunidad tech.',
  keywords: 'AWS, Community Day, Ecuador, Cloud, Tecnología, Conferencia',
  authors: [{ name: 'AWS Community Day Ecuador' }],
  openGraph: {
    title: 'AWS Community Day Ecuador 2025',
    description: 'Participa en AWS Community Day Ecuador 2025: charlas, talleres y labs sobre la nube AWS.',
    type: 'website',
    locale: 'es_EC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Community Day Ecuador 2025',
    description: 'Participa en AWS Community Day Ecuador 2025: charlas, talleres y labs sobre la nube AWS.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FF9900" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/logo-community-day.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/background.jpg" as="image" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//awscommunitydayec.eventbrite.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://awscommunitydayec.eventbrite.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
} 