import Navbar from '@/components/ui/Navbar'
import CosmosBackground from '@/components/ui/CosmosBackground'
import HeroSection from '@/components/sections/HeroSection'
import QueHacemosSection from '@/components/sections/QueHacemosSection'
import EstudioSection from '@/components/sections/EstudioSection'
import ImplementacionesIASection from '@/components/sections/ImplementacionesIASection'
import NosotrosSection from '@/components/sections/NosotrosSection'
import ContactoSection from '@/components/sections/ContactoSection'
import FooterSection from '@/components/sections/FooterSection'

export default function HomePage() {
  return (
    <>
      <CosmosBackground />
      <Navbar />
      <main>
        <HeroSection />
        <QueHacemosSection />
        <EstudioSection />
        <ImplementacionesIASection />
        <NosotrosSection />
        <ContactoSection />
      </main>
      <FooterSection />
    </>
  )
}
