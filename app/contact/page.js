'use client'
import HeroSection from './HeroSection.js'
import ContactPage from './ContactPage.js';
import Map from './Map.js';

export default function Page() {
  return (
    <div className=' relative min-h-screen' >
      <HeroSection />
      <ContactPage />
      <Map />
    </div>
  )
}
