'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/tobaccoNepalLogo.webp'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import GalleryPopUp from './GalleryPopUp'
import { IoIosMenu } from 'react-icons/io'
import HamBurger from './HamBurger.js'
import { RxCross2 } from 'react-icons/rx'

export default function NavBar () {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [isHamOpen, setIsHamOpen] = useState(false)
  // const [hamIcon, setHamIcon] = useState(
  //   <IoIosMenu className='text-white text-3xl' />
  // )
  const galleryRef = useRef(null)
  const pathname = usePathname()
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Product', href: '/product' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Gallery', href: '#', isDropdown: true },
    { label: 'Contact', href: '/contact' }
  ]

  const linkClass = path =>  
    pathname === path
      ? 'border-b-2 border-[#EAB308] text-sm   '
      : 'text-white hover:text-yellow-400 text-sm'

  // close whenever the page changes
  useEffect(() => setIsGalleryOpen(false), [pathname])

  /*  click outside to close */
  useEffect(() => {
    const handleClickOutside = event => {
      if (galleryRef.current && !galleryRef.current.contains(event.target)) {
        setIsGalleryOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className='sticky  w-full top-0 z-500 bg-[#1f1f1f] lg:p-4 md:p-0 '>
      <div className=' relative w-full flex  justify-between p-4  items-center '>
        <Link className='relative w-25 h-14 hover:scale-105' href='/'>
          <Image src={Logo} alt='Tobacco Nepal Logo' fill />
        </Link>

        {/* NAVBAR FOR desktop */}
        <div className='hidden flex-1 bg-red lg:flex justify-between pl-72 '>
          <ul className='text-white  space-x-6 flex items-center'>
            {navItems.map(item => (
              <li key={item.label}>
                {item.isDropdown ? (
                  <div
                    className='relative hover:text-yellow-500 '
                    ref={galleryRef}
                  >
                    <button
                      onClick={() => setIsGalleryOpen(prev => !prev)}
                      className={`flex items-center gap-1 cursor-pointer text-sm
                           ${
                             pathname === '/photogallery' ||
                             pathname === '/videogallery'
                               ? 'border-b-2 border-yellow-500'
                               : ''
                           }`}
                    >
                      Gallery
                      <MdOutlineKeyboardArrowDown
                        className={`transition-transform ${
                          isGalleryOpen ? 'rotate-180  ' : ''
                        }`}
                      />
                    </button>

                    {isGalleryOpen && (
                      <div className='absolute top-full mt-2'>
                        <GalleryPopUp />
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href} className={linkClass(item.href)}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link
            className='font-bold  md:px-6 md:py-2 bg-[#EAB308] rounded-sm hover:bg-[#d4a007] transition-all duration-200'
            href='/contact'
          >
            Inquire Now
          </Link>
        </div>

        {/* HAMBURGER FOR MOBILE */}
        <button
          className='lg:hidden'
          onClick={() => {
            setIsHamOpen(prev => !prev)
          }}
        >
           {
              isHamOpen === true
                ? <RxCross2 className='text-white text-3xl' />
                : <IoIosMenu className='text-white text-3xl' />
            }
        </button>
      </div>

      {isHamOpen && (
        <div className='  bg sticky top-22 w-full '>
          <HamBurger onClose={()=>setIsHamOpen(false)} />
        </div>
      )}
    </nav>
  )
}

// /*
// What changed:
// I added this useEffect hook:
// javascript/* Close dropdown when pathname changes */
// useEffect(() => {
//   setIsGalleryOpen(false)
// }, [pathname])
// How it works:

// Whenever the pathname changes (i.e., user navigates to a new page), this effect runs
// It automatically closes the dropdown by setting isGalleryOpen to false
// This happens whether the user clicks Photo Gallery, Video Gallery, or any other navigation link

// Now when you click on Photo or Video gallery links, the dropdown will close immediately as the page navigates! 🎉
