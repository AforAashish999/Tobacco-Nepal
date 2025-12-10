'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/tobaccoNepalLogo.webp';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import GalleryPopUp from "./GalleryPopUp";

export default function NavBar() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const galleryRef = useRef(null);
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? "border-b-2 border-yellow-500"
      : "text-white hover:text-yellow-400";

  /* ✅ click outside to close */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        galleryRef.current &&
        !galleryRef.current.contains(event.target)
      ) {
        setIsGalleryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-[#211F1B] ">
        <ul className="p-5">
          <li className="flex justify-between items-center">
            <Link href="/">
              <Image
                src={Logo}
                alt="Tobacco Nepal Logo"
                className="w-27 h-14"
              />
            </Link>

            <div className="text-white tracking-wide space-x-6 flex items-center">
              <Link className={linkClass("/")} href="/">Home</Link>
              <Link className={linkClass("/product")} href="/product">Product</Link>
              <Link className={linkClass("/about")} href="/about">About</Link>
              <Link className={linkClass("/blog")} href="/blog">Blog</Link>

              {/* ✅ Gallery */}
              <div className="relative hover:text-yellow-500 " ref={galleryRef}>
                <button
                  onClick={() => setIsGalleryOpen((prev) => !prev)}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  Gallery
                  <MdOutlineKeyboardArrowDown
                    className={`transition-transform ${isGalleryOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isGalleryOpen && (
                  <div className="absolute top-full mt-2">
                    <GalleryPopUp />
                  </div>
                )}
              </div>

              <Link className={linkClass("/contact")} href="/contact">Contact</Link>
            </div>

            <Link
              className="font-bold text-lg px-6 py-1 bg-[#EAB308] rounded-md hover:bg-[#d4a007] transition-all duration-200"
              href="/inquire"
            >
              Inquire Now
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
