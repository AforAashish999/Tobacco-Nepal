import Link from "next/link"
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";

export default function Footer() {
  return (
    <div className='min-h-90 '>
            <div className="px- space-y-6 bg-[#150D06]  "> 

            <div className='grid grid-cols-4 py-7 '>

                <div className=" col-span-1 p-3 space-y-5 ">
                  <h2 className="text-2xl font-bold text-[#FF7700] ">Tobacco<span className="text-[#FFC100] ">Nepal</span>  </h2>
                  <p className="text-[#FFECB3]  max-w-56 text-justify ">Discover genuine Nepalese 
                    tobacco items that arent found anywhere else. Experience
                     unique flavors that capture the spirit of Nepals cultural legacy.</p>
                     <div className="flex space-x-6">
                        <FaFacebook className="text-4xl text-amber-700/90"/>
                        <BsWhatsapp className="text-4xl text-amber-700/90 " />
                     </div>
                </div>

                <div className=" col-span-1 p-3 space-y-5">
                   <h2 className="text-[#FF7700] text-lg font-bold">  Quick Links</h2>
                   <ul>
                    <li className="flex flex-col  text-[#c28957] text-sm space-y-3 ">
                        <Link href="/"> Home</Link>
                        <Link href="product"> Products </Link>
                        <Link href="/about"> About Us </Link>
                        <Link href="/gallery"> Gallery </Link>
                        <Link href="/contact"> Contact Us </Link>
                    </li>
                   </ul>
                </div>

                <div className=" col-span-1 py-3  space-y-5">
                    <h2 className="text-[#FF7700] text-lg font-bold"> Legal</h2>
                    <Link href="/legal"
                    className="text-[#c28957] text-sm "
                    > legal notice, privacy & compliance policy </Link>
                    </div>

                    <div className="col-span-1">

                    </div>
                    
            </div>
            {/* notice */}
            <div className="px-4" > 
            <div className="flex items-center justify-center bg-[#522D0C] p-4 rounded-lg space-x-3">
                <MdError className="text-[32px] text-amber-700 " />
                <p className="text-white font-medium  "> Warning: These products contain Nicotine. Nicotine is an addictive chemical.</p>
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
