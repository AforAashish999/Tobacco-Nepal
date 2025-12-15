import Gallery from './Gallery';
import HeroSection from './HeroSection'
import SecondSection from './SecondSection';

export default async function page({params}) {
  const { blogId } =  await params;
  return (
    <div>
        <HeroSection />
        <SecondSection />
        <Gallery />
    </div>
  )
}
