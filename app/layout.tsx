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
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FFR7SSMGP5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FFR7SSMGP5', {
                send_page_view: true,
                anonymize_ip: false,
                allow_google_signals: true,
                allow_ad_personalization_signals: true
              });
              
              // Track all clicks
              document.addEventListener('click', function(e) {
                gtag('event', 'click', {
                  event_category: 'engagement',
                  event_label: e.target.tagName + (e.target.className ? '.' + e.target.className : ''),
                  value: 1
                });
              });
              
              // Track scroll depth
              let maxScroll = 0;
              window.addEventListener('scroll', function() {
                const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
                if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
                  maxScroll = scrollPercent;
                  gtag('event', 'scroll', {
                    event_category: 'engagement',
                    event_label: scrollPercent + '%',
                    value: scrollPercent
                  });
                }
              });
              
              // Track time on page
              let startTime = Date.now();
              window.addEventListener('beforeunload', function() {
                const timeOnPage = Math.round((Date.now() - startTime) / 1000);
                gtag('event', 'timing_complete', {
                  name: 'time_on_page',
                  value: timeOnPage
                });
              });
              
              // Track form interactions
              document.addEventListener('submit', function(e) {
                gtag('event', 'form_submit', {
                  event_category: 'engagement',
                  event_label: e.target.id || e.target.className || 'form'
                });
              });
              
              // Track external link clicks
              document.addEventListener('click', function(e) {
                if (e.target.tagName === 'A' && e.target.hostname !== window.location.hostname) {
                  gtag('event', 'click', {
                    event_category: 'outbound',
                    event_label: e.target.href,
                    transport_type: 'beacon'
                  });
                }
              });
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
} 