import Link from "next/link"

export default function ContactComponent() {
  return (
    <div>
            {/* FIRST FOOTER */}
            <div className='bg-[#1f1f1f] py-25 space-y-10'>

                <div className="flex flex-col items-center  space-y-7">
               <h1 className="text-5xl font-bold text-[#fbbf8a]"> Get In Touch</h1>
               <p className="text-xl max-w-3xl text-center text-[#f98c2c]  font-medium">
                Discover the best assortment of high-quality tobacco products, carefully chosen for enthusiasts
                 who appreciate authenticity, heritage, and workmanship.
               </p>
                </div>

               <div className="flex items-center justify-center space-x-4"> 
               <Link href="/contact"
               className="bg-[#EAB308] px-5.5 py-2 text-lg font-bold rounded-md hover:bg-yellow-300">
               Contact Us
               </Link>
               <Link href="/about"
               className="border-[#EAB308] text-sm border-2 text-[#EAB308] bg-black px-5 py-2.5 font-semibold rounded-md hover:bg-neutral-700 "
               > Learn More </Link>
               </div>
            </div>
    </div>
  )
}
