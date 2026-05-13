import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Marquee from '@/components/sections/Marquee'
import Speakers from '@/components/sections/Speakers'
import Sponsors from '@/components/sections/Sponsors'
import Venue from '@/components/sections/Venue'
import Community from '@/components/sections/Community'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export const revalidate = 60

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Speakers />
      <Sponsors />
      <Venue />
      <Community />
      <CTA />
      <Footer />
    </main>
  )
}
