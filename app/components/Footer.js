import Link from "next/link"
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";

export default function Footer() {
  return (
    <div className='min-h-90'>
            <div className="px- space-y-6 bg-neutral-900  "> 

            <div className='grid grid-cols-4 py-7 '>

                <div className=" col-span-1 p-3 space-y-5 ">
                  <h2 className="text-2xl font-bold text-orange-500">Tobacco<span className="text-yellow-300">Nepal</span>  </h2>
                  <p className="text-yellow-200 text-xl">Discover genuine Nepalese 
                    tobacco items that arent found anywhere else. Experience
                     unique flavors that capture the spirit of Nepals cultural legacy.</p>
                     <div className="flex space-x-6">
                        <FaFacebook className="text-4xl text-orange-800"/>
                        <BsWhatsapp className="text-4xl text-orange-800" />
                     </div>
                </div>

                <div className=" col-span-1 p-3 space-y-5">
                   <h2 className="text-orange-500 text-2xl font-bold">  Quick Links</h2>
                   <ul>
                    <li className="flex flex-col  text-orange-300">
                        <Link href="/"> Home</Link>
                        <Link href="product"> Products </Link>
                        <Link href="/about"> About Us </Link>
                        <Link href="/gallery"> Gallery </Link>
                        <Link href="/contact"> Contact Us </Link>
                    </li>
                   </ul>
                </div>

                <div className=" col-span-2 py-3 px-10 space-y-5">
                    <h2 className="text-orange-500 text-2xl font-bold"> Legal</h2>
                    <Link href="/legal"
                    className="text-orange-300"
                    > legal notice, privacy & compliance policy </Link>
                    </div>
                    
            </div>
            {/* notice */}
            <div className="px-6" > 
            <div className="flex items-center justify-center bg-orange-900 p-4 rounded-lg space-x-3">
                <MdError className="text-4xl text-orange-700 " />
                <p className="text-white text-lg  tracking-wide"> Warning: These products contain Nicotine. Nicotine is an addictive chemical.</p>
            </div>
            </div>

            {/* copyright */}
            <div className="p-8 flex justify-center border-gray-700 border-t">
                <p className="text-white text-xs"> All Right Reserved @<span className="font-bold">Uchha Himal Product Pvt. Ltd.</span></p>
            </div>
            </div>
    </div>
  )
}
