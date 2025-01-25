import Header from "./components/Header"
import Hero from "./components/Hero"
import ServiceCards from "./components/ServiceCards"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"
import Solutions from "./components/Solutions"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServiceCards />
      <Stats />
      <Testimonials />
      <Solutions />
      <Footer />
    </main>
  )
}

