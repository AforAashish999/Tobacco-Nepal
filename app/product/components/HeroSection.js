import Image from "next/image"
import ProductHero from "@/public/productHero.webp"

export default function ProductHeroSection() {
  return (
    //must be relative this outer div so that second div absolute can work
    <div className="relative h-[67vh] w-full bg-amber-500 bg-[url('/ProductHero.webp')] bg-cover bg-center
      flex justify-center items-center " >

      {/* black overlay */}
      <div className='h-full w-full absolute bg-black/80 backdrop-blur-lg z-10'></div>

      <div className="z-40 relative space-y-7">
        <h1 className="text-7xl  font-bold text-[#df954e] text-center
         transition duration-300 animate-pulse  ">
          Our Premium Products
        </h1>

        {/* PREMIUM LINE */}
        <div className="h-1 w-full  bg-[linear-gradient(to_right,transparent,#eab308,transparent)]
 ">

        </div>

        {/* 1st way using br tag */}
        {/* <p className="text-[#f7e2a2] text-[20px] text-center  ">
          Discover our extensive selection of high-quality tobacco products, each expertly crafted <br/>
          with the finest ingredients from Nepals rich soil.
        </p> */}


            {/* using whitespace but not working */}
          {/* <p className="text-[#f7e2a2] text-[20px] white-space-preline leading-relaxed text-center  ">
        {` Discover our extensive selection of high-quality tobacco products, each expertly crafted 
          with the finest ingredients from Nepals rich soil.`}
        </p> */}


               <p className="text-[#f7e2a2] text-[20px] max-w-4xl text-center bg-red">
          Discover our extensive selection of high-quality tobacco products, each expertly crafted 
          with the finest ingredients from Nepals rich soil.
        </p>

      </div>

    </div>
  )
}
