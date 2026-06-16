import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Problems from './components/Problems'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import Benefits from './components/Benefits'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
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
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <Analytics />
    </>
  )
}
