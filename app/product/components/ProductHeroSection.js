import Image from "next/image"
import ProductHero from "@/public/productHero.webp"

export default function ProductHeroSection() {
  return (
    //must be relative this outer div so that second div absolute can work
    <div className="relative h-[70vh] w-full bg-amber-500 bg-[url('/ProductHero.webp')] bg-cover bg-center  " >
        <div className='h-full w-full absolute bg-black/75 backdrop-blur-lg z-10'>
            
        </div>

    </div>
  )
}
