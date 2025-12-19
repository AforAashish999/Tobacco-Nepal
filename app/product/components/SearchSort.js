import { IoIosSearch } from 'react-icons/io'
import { CgSortAz } from 'react-icons/cg'
import { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import { PiSortAscendingBold } from 'react-icons/pi'
import { IoClose } from 'react-icons/io5'

export default function SearchSort ({
  search,
  setSearch,
  sortOrder,
  setSortOrder,
  setCurrentPage
}) {
  const [inputValue, setInputValue] = useState(search) // local state for input
  const [debouncedValue] = useDebounce(inputValue, 400) // debounced value after 400ms
  // Update parent search only after debounce

  const [isDropActive, setIsDropActive] = useState(false)
  const [active, setActive] = useState('Latest')

  useEffect(() => {
    setSearch(debouncedValue)
  }, [debouncedValue, setSearch])

  const handleSort = item => {
    setActive(item.label)
    setCurrentPage(1)
    setSortOrder(item.value)
    setIsDropActive(false)
  }
  const dropItems = [
    { label: 'Latest', value: 'desc' },
    { label: 'Oldest', value: 'asc' }
  ]
  return (
    <div className='flex flex-col '>
      <div className=' w-full flex gap-x-4 relative '>
        {/* SEARCH BOX */}
        <div className='flex-1 bg-[#2d2d2d] rounded-xl border-yellow-300/40 border flex px-2 py-3 items-center '>
          <IoIosSearch className='text-[#c99c15] text-2xl font-bold ' />
          <input
            placeholder='search products...'
            className='placeholder-gray-400 text-white w-full focus:outline-0 pl-2  caret-white  '
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button className='font-medium bg-[#EAB308] py-2 px-5 rounded-lg hover:bg-yellow-400 cursor-pointer '>
            Search
          </button>
        </div>

        {/* SORT BOX */}
        <div className='w-36 bg-[#181818] rounded-xl border-yellow-300/40 border flex items-center py-2 px-1 '>
          <CgSortAz className='text-[#c99c15] text-3xl ' />
          <button
            onClick={() => setIsDropActive(prev => !prev)}
            className='bg-[#2d2d2d] border-yellow-300/30 border-2 rounded-xl text-white text-sm p-2 cursor-pointer flex gap-1'
          >
            <div className='font-medium'> {active} </div>
            <MdOutlineKeyboardArrowDown className='text-xl text-[#eab308] ' />
          </button>
        </div>

        {isDropActive && (
          <div
            className='text-white absolute cursor-pointer right-2 top-15 w-32 bg-[#2d2d2d] border-yellow-300/40 border
            rounded-xl p-1 space-y-1 '
          >
            {dropItems.map(item => (
              <p
                key={item.label}
                onClick={() => handleSort(item)}
                className={`py-2 px-3 rounded-md text-sm 
                     ${
                       active === item.label
                         ? 'bg-[#eab308] text-black'
                         : 'text-white hover:bg-[#eab308] hover:text-black'
                     } `}
              >
                {item.label}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* framer */}
      <div>
        <AnimatePresence>
          {active === 'Oldest' && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className='bg-[#D2863C]/20 text-[#d2863c] text-sm font-medium mt-6
                  py-2 px-4 rounded-2xl flex gap-2 items-center w-fit '
              >
                <PiSortAscendingBold />
                <p>Sort: Oldest First </p>
                <button onClick={() => setActive('Latest')}>
                  <IoClose className='text-lg cursor-pointer hover:text-[#e4a260] ' />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}


      
