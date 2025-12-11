import Link from "next/link"

export default function ContactComponent() {
  return (
    <div>
            {/* FIRST FOOTER */}
            <div className='bg-[#211F1B] py-25 space-y-10'>

                <div className="flex flex-col items-center  space-y-7">
               <h1 className="text-5xl font-bold text-[#d4a56b]"> Get In Touch</h1>
               <p className="text-xl max-w-2xl text-center text-orange-400 tracking-wide font-medium">
                Discover the best assortment of high-quality tobacco products, carefully chosen for enthusiasts
                 who appreciate authenticity, heritage, and workmanship.
               </p>
                </div>

               <div className="flex items-center justify-center space-x-4"> 
               <Link href="/contact"
               className="bg-yellow-400 px-5 py-3 text-xl font-bold rounded-md hover:bg-yellow-300">
               Contact Us
               </Link>
               <Link href="/about"
               className="border-yellow-400 border-2 text-yellow-500 bg-black px-4 py-3 font-semibold rounded-md hover:bg-neutral-700 "
               > Learn More </Link>
               </div>
            </div>
    </div>
  )
}
