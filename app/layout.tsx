import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const display = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://day.awscommunity.ec'),
  title: 'AWS Community Day Ecuador 2026 · Cuenca',
  description:
    'AWS Community Day Ecuador 2026 — 5 de septiembre en Cuenca. Charlas técnicas, talleres prácticos y networking con la comunidad AWS más grande del país.',
  keywords: [
    'AWS Community Day 2026',
    'AWS Ecuador',
    'Cuenca',
    'Cloud Computing',
    'Conferencia AWS',
    'UPS Cuenca',
    'AWS User Group Ecuador',
  ].join(', '),
  authors: [{ name: 'AWS User Group Ecuador' }],
  openGraph: {
    title: 'AWS Community Day Ecuador 2026',
    description:
      '5 de septiembre 2026 · Cuenca · Universidad Politécnica Salesiana. La comunidad AWS más grande de Ecuador.',
    type: 'website',
    locale: 'es_EC',
    siteName: 'AWS Community Day Ecuador',
    url: 'https://day.awscommunity.ec',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Community Day Ecuador 2026',
    description: '5 de septiembre 2026 · Cuenca · Universidad Politécnica Salesiana.',
  },
  alternates: {
    canonical: 'https://day.awscommunity.ec/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#07070a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FFR7SSMGP5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FFR7SSMGP5');
            `,
          }}
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
