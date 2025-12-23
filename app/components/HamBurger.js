'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function HamBurger ({ navItems }) {
  const pathname = usePathname()
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const linkClass = path =>
    pathname === path
      ? 'text-lg text-white font- inline-block w-full border-yellow-500 border-b-2   '
      : 'text-white text-lg font- hover:text-[#eab308] '
  return (
    <div className='bg-[#1f1f1f] p-6 '>
      <ul className=''>
        {navItems.map(item => (
          <li key={item.href} className='mb-6'>
            {item.isDropdown ? (
              <div>
                <button
                  onClick={() => setIsGalleryOpen(prev => !prev)}
                  className='relative text-white text-lg flex items-center'
                >
                  <p>Gallery</p>
                  <MdOutlineKeyboardArrowDown
                    className={`text-white transform transition-all duration-150 ease-in 
                    ${isGalleryOpen === true ? 'rotate-180' : ''} `}
                  />
                </button>

                {isGalleryOpen && (
                  <div className='bg-red bg-[#1f1f1f] py-1 px-5 sticky top-0 border-[#c28957] border-l-2 '>
                    <Link
                      href='/photogallery'
                      className='text-white text-base block p-1'
                    >
                      {' '}
                      Photo Gallery
                    </Link>
                    <Link
                      href='/videogallery'
                      className='text-white text-base block p-1'
                    >
                      {' '}
                      Video Gallery
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link className={`${linkClass(item.href)} `} href={item.href}>
                {item.label}
              </Link>
            )}
          </li>
        ))}

        <Link
          className='bg-[#f4b906] font-bold text-sm inline-block text-center w-full py-3 rounded-md '
          href='/contact'
        >
          Inquire Now
        </Link>
      </ul>
    </div>
  )
}
