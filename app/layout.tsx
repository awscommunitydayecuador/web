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
  themeColor: '#020824',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NH5L2Z5D');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NH5L2Z5D"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
