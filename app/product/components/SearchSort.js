import { IoIosSearch } from "react-icons/io";
import { CgSortAz } from "react-icons/cg";

export default function SearchSort() {
  return (
    <div className=' w-full flex gap-x-4 '>
        


            {/* SEARCH BOX */}
        <div className='flex-1 bg-[#2d2d2d] rounded-xl border-yellow-300/40 border flex px-2 py-3 items-center '>
            <IoIosSearch className="text-[#c99c15] text-2xl font-bold " />
            <input placeholder='search products...' className='placeholder-gray-400 text-white 
              w-full focus:outline-0 pl-2  caret-red-500' />
            <button
            className="font-bold bg-[#EAB308] py-2 px-5 rounded-lg hover:bg-yellow-400 cursor-pointer "
            >
                Search
            </button>
        </div>


        {/* SORT BOX */}
        <div className='w-36 bg-[#181818] rounded-xl border-yellow-300/40 border flex items-center py-2 px-1 '>
        <CgSortAz className="text-[#c99c15] text-3xl" />
            <select className="  bg-[#2d2d2d]  rounded-xl text-white text-sm p-2 ">
                <option value="default"> Latest </option>
                <option value="latest" > Latest </option>
                <option value="Oldest" > Oldest </option>
            </select>
        </div>

    </div>
    
  )
}


/*
slect border border-[#695723] border-2



/*

<div className='display grid grid-cols-8 justify-around ' >

    
        <div className='bg-[#2d2d2d] col-span-6 '>
            search 
        </div>

 
        <div className='bg-red-500 col-span-1 '>
            Sort
        </div>

    </div>

    */