import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
// import Speakers from '../components/Speakers'
// import Sponsors from '../components/Sponsors'
import CallForSpeakersAndSponsors from '../components/CallForSpeakersAndSponsors'
import Venue from '../components/Venue'
import Community from '../components/Community'
import Footer from '../components/Footer'

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