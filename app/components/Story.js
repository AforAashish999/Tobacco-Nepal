import Link from "next/link"
import Image from "next/image"
import StoryImage from "../../public/ourstory.webp";

export default function Story() {
  return (
    <div className='min-h-screen grid grid-cols-2 bg-black px-10 py-25 gap-x-6'>

        <div className='bg-amber col-span-1 p-10 flex flex-col justify-between '>
            <h1 className='text-5xl font-bold text-[#F8985F] '>Our Story</h1>
            <p className="tracking-wide text-xl font-semibold text-[#61511C] ">Founded in 1985, Tobacco has been cultivating and processing premium tobacco in the 
            pristine foothills of the Himalayas for over three decades. Our journey began with a simple
             mission: to produce the finest quality tobacco products while preserving traditional farming
              methods.</p>
              <Link href="/about"
              className="bg-[#EAB308] px-6 py-2.5 w-fit font-bold rounded-md hover:bg-yellow-600 "
              >Learn Our Story</Link>
        </div>

        <div className='bg-green col-span-1 rounded-xl '>
            <Image src={StoryImage} alt="image" className="h-full w-full object-cover rounded-xl" />
        </div>

    </div>
  )
}
