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
