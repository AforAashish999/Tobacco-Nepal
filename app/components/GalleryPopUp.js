// import React from 'react'

// export default function GalleryPopUp({closePop}) {
//   return (
//     <div className='min-h-screen relative bg-white/0 -z-5 '>
//         <div className='border-red-600 border-2 text-yellow-600 absolute top-20 right-120'> 
//         <p>
//             Photo Gallery
//         </p>
//         <p>
//             Video Gallery
//         </p>
//         <button className='bg-red-600 p-5' onClick={closePop}>
//             close
//         </button>
//         </div>
//     </div>
//   )
// }


import Link from "next/link"

export default function GalleryPopUp() {
  return (
  
         <div className=' w-45 space-y p-3 rounded-lg border-orange-300/35 border text-white bg-stone-900
         flex flex-col justify-center  '> 
        
        <Link href="/photogallery"
        className="hover:bg-[#EAB308] px-3 py-1 rounded-md hover:text-black" >
            Photo Gallery
        </Link>
        <Link href="/videogallery"
         className="hover:bg-[#EAB308] px-3 py-1 rounded-md hover:text-black" >
            Video Gallery
        </Link>
        {/* <button className='bg-red-600 p' onClick={closePop}>
            close
        </button>
       */}
    </div>
   
  )
}
