// import Image from "next/image"
// import HeroImage from '../../public/heroSectionImage.jpg';


// export default function HeroSection() {
//   return (

//     <div className='  h-screen w-full pt-20 bg-[url('https://images.squarespace-cdn.com/content/v1/653d0cf7eb03f21c4335bede/1698502072328-MKPRRNZF1ZALOSSR5WYZ/image-asset.jpeg')] bg-cover bg-center  '
//  >

//         <div className=" z-10">
//         <h1 className=" absolute text-6xl font-bold text-yellow-200"> Premium Tobacco </h1>

//         </div>
//     </div>
  
//   )
// }

import Image from "next/image";
// import HeroImage from "../../public/heroSectionImage.jpg";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="h-screen w-full relative
    bg-[url('/heroSectionImage.jpg')] bg-cover bg-center ">
        <div className='h-screen w-screen bg-black/75 z-10 absolute backdrop-blur-sm '></div>
   

      {/* content */}
      <div className="absolute z-30 h-screen w-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="  text-7xl font-bold text-[#DF954E] ">
        Premium Tobacco
      </h1>
    <p className="text-2xl font-bold text-[#F7E2A2] max-w-3xl text-center tracking-wide">
      Experience the finest quality tobacco products . Our traditional methods and sustainable practices ensure 
      exceptional quality in every product.
    </p>

    <div className="flex items-center space-x-4 mt-7">
    <Link href="/products"
    className="bg-[#EAB308] px-5 py-2 text-xl font-bold rounded-md hover:bg-yellow-300">
      View Products</Link>
    <Link href="/about"
    className="border-white border text-white bg-black px-7 py-2 font-bold rounded-md hover:bg-neutral-700 "
    > Learn More </Link>

    </div>
      </div>
    </div>
  );
}


/*
<div className="h-screen w-screen bg-[url('https://images.squarespace-cdn.com/content/v1/653d0cf7eb03f21c4335bede/1698502072328-MKPRRNZF1ZALOSSR5WYZ/image-asset.jpeg')] bg-cover bg-center 
      flex justify-around items-center p-10  ">
        <div className='h-screen w-screen bg-black/25 absolute '></div>


       
         

        <div className='h-3/4 w-2/6  rounded-2xl p-10 bg-white/60 backdrop-blur-md shadow-sm '>
          <h1 className=' text-3xl text-center font-extrabold bg-gradient-to-r from-red-700 via-red-600 to-slate-700 bg-clip-text text-transparent '>Reset Password</h1>

          <form onSubmit={handleSubmit(onSubmit)}

          */