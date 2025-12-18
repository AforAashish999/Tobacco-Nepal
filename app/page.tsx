
import HeroSection from "./components/HeroSection.js"
import FeatureProducts from "./components/FeatureProducts.js"
import Story from "./components/Story.js"
import FeaturedGallery from "./components/FeaturedGallery.js"
import ContactComponent from "./components/ContactComponent.js"

export default function Home() {
  return (
    <div >
      <HeroSection />
      <FeatureProducts />
      <Story />
      <FeaturedGallery />
      <ContactComponent />
    </div>
  )
}