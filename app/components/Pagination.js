import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function Pagination ({
  currentPage,
  setCurrentPage,
  totalPages
}) {
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }
  return (
    <div className='flex justify-center items-center gap-4 mt-5 mb-20 '>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(prev => prev - 1)}
        className={` h-14 w-14 flex justify-center items-center rounded-xl disabled:opacity-50 cursor-pointer
                            transform transition-all ease-in duration-200 hover:scale-110 
                             ${
                               currentPage === 1
                                 ? 'text-gray-300 bg-[#282828] '
                                 : 'bg-linear-to-l from-[#1a1a1a] to-[#2d2d2d] text-white'
                             } `}
      >
        <MdKeyboardArrowLeft className={`text-3xl  `} />
      </button>

      {pageNumbers.map(num => (
        <button
          key={num}
          onClick={() => setCurrentPage(num)}
          className={`hover:scale-110 transition-all ease-in duration-200 cursor-pointer h-12 w-12 text-lg font-bold rounded-xl 
                             ${
                               currentPage === num
                                 ? 'bg-[#EAB308] shadow-[#EAB308] shadow-lg/60  text-black'
                                 : 'bg-[#2D2D2D] text-white'
                             }`}
        >
          {num}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(prev => prev + 1)}
        className={` h-14 w-14 flex justify-center items-center rounded-xl disabled:opacity-50 cursor-pointer
                         transform transition-all ease-in duration-200 hover:scale-110 
                  ${
                    currentPage === totalPages
                      ? 'text-gray-300 bg-[#282828] '
                      : 'bg-linear-to-r from-[#1a1a1a] to-[#2d2d2d] text-white  '
                  } `}
      >
        <MdOutlineKeyboardArrowRight className='text-3xl' />
      </button>
    </div>
  )
}
