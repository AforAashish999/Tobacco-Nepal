import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Gallery1 from "../../public/featureGallery1.webp";
import Gallery2 from "../../public/featureGallery2.webp";
import Gallery3 from "../../public/featureGallery3.webp";

export default async function FeaturedGallery() {

    return (

        <div className='bg-black min-h-screen py-20 px-10 space-y-12'>
            {/* headings */}
            <div className='flex flex-col items-center space-y-6'>
                <h1 className='text-5xl font-bold text-[#BE6B22] '> Gallery </h1>
                <p className=' font- text-xl max-w-3xl text-center text-[#EAB308] font-medium '>
                    Discover how we grow, process, and share our tobacco through short videos that
                    highlight our story, people, and passion.</p>
            </div>
{/* outer div of phot and video */}
<div className="space-y-25"> 
            {/* Photo gallery */}
            <div className="space-y-3 md:space-y-10">

                {/* name and arrow */}
                <div className="flex justify-between text-[#EBCB66] px-4 font-medium text-lg md:text-xl md:font-bold  ">
                    <h2 className=""> Photo Gallery </h2>
                    <Link href="/photogallery"
                        className="  font-medium  flex items-center hover:text-yellow-300  ">
                        <h2 className="">View All</h2>
                        <MdOutlineArrowRightAlt className="text-xl" />
                    </Link>
                </div>

                {/* PICTURES */}
                <div className="grid grid-cols-1 space-y-10 md:space-y-none lg:grid-cols-3 md:grid-cols-2 min-h-60 gap-x-5 rounded-xl items-center ">

                    <div className="rounded-xl h-full w-full  ">
                    <Image src={Gallery1} alt="gallery pic" className=" h-full w-full rounded-xl " />
                    </div>

                    <div className="rounded-xl h-full w-full  ">
                        <Image src={Gallery2} alt="gallery pic" className=" h-full w-full rounded-xl " />
                    </div>

                    <div className="rounded-xl h-full w-full ">
                        <Image src={Gallery3} alt="gallery pic" className=" h-full w-full rounded-xl " />
                    </div>

                </div>
            </div>

                {/* VIDEO GALLERY */}
                <div className=" space-y-3 md:space-y-10">
                    {/* name and arrow */}
                <div className="flex justify-between text-[#EBCB66] px-4 font-medium text-lg md:text-xl md:font-bold">
                    <h2 className=""> Video Gallery </h2>
                    <Link href="/videogallery"
                        className="  font-medium tracking-wide flex items-center hover:text-yellow-300  ">
                        <h2 className="">View All</h2>
                        <MdOutlineArrowRightAlt className="text-xl" />
                    </Link>
                </div>
                
                {/* video */}
                <div className="h-65 md:w-90 ">
                    <video src="https://res.cloudinary.com/dcds6y8vf/video/upload/v1753163547/VideoGallery/u22lb56hmgfi5ezq1pl3.mp4"
                    controls 
                    className="h-full w-full object-cover rounded-xl"/>

                  
                </div>
                </div>

                </div>
        </div>

    )
}
