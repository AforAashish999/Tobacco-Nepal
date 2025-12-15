import HeroSection from './HeroSection'

export default async function page({params}) {
  const { blogId } =  await params;
  return (
    <div>
        <HeroSection />
    </div>
  )
}
