import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Problems from './components/Problems'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import WhatsAppFloat from './components/WhatsAppFloat'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Problems />
        <HowItWorks />
        <Services />
        <Benefits />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Analytics />
    </>
  )
}
