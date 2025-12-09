'use client';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/tobaccoNepalLogo.webp';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { usePathname } from 'next/navigation';


export default function NavBar() {
    const pathname = usePathname();
    const linkClass = (path) =>
        pathname === path
            ? " border-b-2 border-yellow-400"
            : "text-white hover:text-yellow-400";

    return (
        <div className='sticky top-0 z-100'>
            <nav className='bg-stone-800'>
                <ul className=' p-5 '>
                    <li className='flex justify-between items-center'>
                        <Link
                            href="/">
                            <Image src={Logo} alt="Tobacco Nepal Logo" className='w-27 h-14' />
                        </Link>

                        <div className='text-white tracking-wide space-x-6 flex'>
                            <Link
                                className={linkClass("/")}
                                href="/"> Home </Link>
                            <Link
                                className={linkClass("/product")}
                                href="/product"> Product
                            </Link>
                            <Link
                                className={linkClass("/about")}
                                href="/about"> About
                            </Link>
                            <Link
                                className={linkClass("/blog")}
                                href="/blog"> Blog </Link>
                            <Link
                                className={linkClass("/gallery")}
                                href="/gallery">
                                <div className='flex items-center'>
                                    <p>Gallery</p>
                                    <MdOutlineKeyboardArrowDown />
                                </div>

                            </Link>
                            <Link
                                className={linkClass("/contact")}
                                href="/contact"> Contact </Link>
                        </div>

                        <Link
                            className='font-bold text-lg px-6 py-1 bg-[#eab308] rounded-md hover:bg-[#d4a007] transition-all duration-200'
                            href="/inquire"> Inquire Now</Link>

                    </li>
                </ul>
            </nav>
        </div>
    )
}
