import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
// import Speakers from '../components/Speakers'
// import Sponsors from '../components/Sponsors'
import CallForSpeakersAndSponsors from '../components/CallForSpeakersAndSponsors'
import Venue from '../components/Venue'
import Community from '../components/Community'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'AWS Community Day Ecuador',
  description: 'Participa en AWS Community Day Ecuador: charlas técnicas, hands-on labs, networking y más sobre AWS Cloud. El evento más importante de la comunidad tech en Ecuador.',
  keywords: [
    'AWS Community Day',
    'AWS Ecuador',
    'Cloud Computing',
    'Amazon Web Services',
    'Tecnología Ecuador',
    'Conferencia AWS',
    'Hands-on Labs',
    'Networking Tech',
    'Desarrollo Cloud',
    'Comunidad AWS',
    'Evento Tecnológico',
    'Quito Tech',
    'AWS User Group',
    'Cloud Architecture',
    'DevOps Ecuador',
    'AWS Ecuador',
    'AWS en Ecuador',
    'AWS User Group Ecuador',
    'AWS Guayaquil',
    'AWS Quito',
    'AWS Cuenca',
    'comunidad de AWS en Ecuador',
  ].join(', '),
  openGraph: {
    title: 'AWS Community Day Ecuador',
    description: 'Participa en AWS Community Day Ecuador: charlas técnicas, hands-on labs, networking y más sobre AWS Cloud.',
    type: 'website',
    locale: 'es_EC',
    siteName: 'AWS Community Day Ecuador',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Community Day Ecuador',
    description: 'Participa en AWS Community Day Ecuador charlas técnicas, hands-on labs, networking y más sobre AWS Cloud.',
  },
  alternates: {
    canonical: 'https://day.awscommunity.ec/',
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Venue />
      {/* <Speakers /> */}
      {/* <Sponsors /> */}
      <CallForSpeakersAndSponsors />
      <Community />
      <Footer />
    </main>
  )
} 