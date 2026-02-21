import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { GastronomySection } from "@/components/gastronomy-section"
import { AccommodationSection } from "@/components/accommodation-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-[65px]">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GastronomySection />
        <AccommodationSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
