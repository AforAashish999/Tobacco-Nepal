"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const WHATSAPP_URL =
	"https://wa.me/9779810298283?text=Hi%2C%20I%20would%20like%20to%20inquire.";

export default function Navbar() {
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const [isMobileGalleryOpen, setIsMobileGalleryOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	const galleryRef = useRef<HTMLDivElement>(null);
	const mobileGalleryRef = useRef<HTMLDivElement>(null);
	const [mobileGalleryHeight, setMobileGalleryHeight] = useState(0);

	/* ---------- Mobile-only scroll-up-show ---------- */
	const [showMobileBar, setShowMobileBar] = useState(true);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			// Run only on mobile
			if (window.innerWidth >= 1024) return;

			const cur = window.scrollY;

			if (cur > lastScrollY.current && cur > 80) {

				setShowMobileBar(false); // scrolling down

			} else if (cur < lastScrollY.current) {
				setShowMobileBar(true); // scrolling up
			}

			lastScrollY.current = cur;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [showMobileBar]);
	/* ------------------------------------------------ */

	useEffect(() => {
		if (isMobileGalleryOpen && mobileGalleryRef.current) {
			setMobileGalleryHeight(mobileGalleryRef.current.scrollHeight);
		} else {
			setMobileGalleryHeight(0);
		}
	}, [isMobileGalleryOpen]);

	const toggleGallery = () => setIsGalleryOpen(!isGalleryOpen);
	const toggleMobileGallery = () =>
		setIsMobileGalleryOpen(!isMobileGalleryOpen);
	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

	const navItems = [
		{ href: "/", label: "Home" },
		{ href: "/product", label: "Product" },
		{ href: "/about", label: "About" },
		{ href: "/blog", label: "Blog" },
		{ href: "/contact", label: "Contact" },
	];

	const galleryItems = [
		{ href: "/photogallery", label: "Photo Gallery" },
		{ href: "/video-gallery", label: "Video Gallery" },
	];

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				galleryRef.current &&
				!galleryRef.current.contains(event.target as Node) &&
				isGalleryOpen
			) {
				setIsGalleryOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isGalleryOpen]);

	const handleNavigation = () => {
		setIsGalleryOpen(false);
		setIsMobileGalleryOpen(false);
		setIsMobileMenuOpen(false);
	};

	return (
		<header
			className={`bg-[#211f1b] relative z-50 lg:sticky lg:top-0 ${showMobileBar ? "sticky top-0 translate-y-0" : "relative -translate-y-full"
				} transition-all duration-200 ease-in-out`}
		>
			<div
				className={`
          p-4 max-w-[1600px] mx-auto flex items-center justify-between
          transition-transform duration-300
          lg:translate-y-0
          
        `}
			>
				<div className="flex items-center">
					<Link
						href="/"
						className="flex items-center transition-transform duration-200 hover:scale-105"
						onClick={handleNavigation}
					>
						{/* <span className="text-[#eab308] font-bold text-2xl">Tobacco</span>
						<span className="font-bold text-2xl text-[#965720]">World</span> */}
						<Image
							src="/images/81ecbd1b-f847-4655-8c0b-01a87524016e.png"
							alt="Logo"
							width={100}
							height={60}
							className="h-[3.5rem]"
						></Image>
					</Link>
				</div>

				{/* Desktop navigation */}
				<nav className="hidden lg:flex text-white items-center gap-6">
					{navItems.slice(0, -1).map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`text-sm hover:text-[#eab308] transition-all duration-200 relative nav-link ${pathname === item.href
								? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#eab308] after:transition-all after:duration-300"
								: ""
								}`}
							onClick={handleNavigation}
						>
							{item.label}
						</Link>
					))}

					<div
						className="relative"
						ref={galleryRef}
					>
						<button
							onClick={toggleGallery}
							className={`flex items-center gap-1 text-sm hover:text-[#eab308] transition-all duration-200 px-2 py-1 relative nav-link ${galleryItems.some((item) => pathname === item.href)
								? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#eab308] after:transition-all after:duration-300"
								: ""
								}`}
							aria-expanded={isGalleryOpen}
							aria-controls="gallery-dropdown"
						>
							Gallery{" "}
							<ChevronDown
								size={13}
								className={`transition-transform duration-200 ${isGalleryOpen ? "rotate-180" : ""
									}`}
							/>
						</button>
						<div
							id="gallery-dropdown"
							className={`absolute flex flex-col gap-1 top-full left-0 mt-2 w-48 bg-[#211f1b] text-white shadow-lg rounded-lg border border-[#eab308]/30 p-2 z-10 transition-all duration-300 ease-in-out ${isGalleryOpen
								? "opacity-100 translate-y-0"
								: "opacity-0 -translate-y-2 pointer-events-none"
								}`}
						>
							{galleryItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className={`block px-4 py-2 text-sm rounded-md hover:bg-[#eab308] hover:text-[#211f1b] transition-colors duration-200 ${pathname === item.href
										? "bg-[#eab308]/90 text-[#211f1b]"
										: ""
										}`}
									onClick={() => {
										setIsGalleryOpen(false);
										handleNavigation();
									}}
								>
									{item.label}
								</Link>
							))}
						</div>
					</div>

					<Link
						href="/contact"
						className={`text-sm hover:text-[#eab308] transition-all duration-200 relative nav-link ${pathname === "/contact"
							? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#eab308] after:transition-all after:duration-300"
							: ""
							}`}
						onClick={handleNavigation}
					>
						Contact
					</Link>
				</nav>

				<div className="hidden lg:block">
					<Link
						href={WHATSAPP_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-[#eab308] px-6 py-2 rounded text-[#211f1b] font-bold hover:bg-[#d4a007] transition-all duration-200"
					>
						Inquire Now
					</Link>
				</div>

				{/* Hamburger */}
				<button
					className="lg:hidden text-white p-1 transition-all duration-200"
					onClick={toggleMobileMenu}
					aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
				>
					{isMobileMenuOpen ? (
						<X
							size={24}
							className="transition-transform duration-300"
						/>
					) : (
						<Menu
							size={24}
							className="transition-transform duration-300"
						/>
					)}
				</button>
			</div>

			{/* ---------- Mobile dropdown menu ---------- */}
			<nav
				className={`lg:hidden bg-[#211f1b] overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
					}`}
			>
				<div className="max-w-[90%] mx-auto py-4 flex flex-col gap-4">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`text-white text-lg hover:text-[#eab308] transition-colors duration-200 relative px-2 py-1 ${pathname === item.href
								? "after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#eab308] after:transition-all after:duration-300"
								: ""
								}`}
							onClick={() => {
								setIsMobileMenuOpen(false);
								handleNavigation();
							}}
						>
							{item.label}
						</Link>
					))}

					<div className="relative">
						<button
							onClick={toggleMobileGallery}
							className={`flex items-center gap-1 text-white text-lg hover:text-[#eab308] transition-colors duration-200 px-2 py-1 relative w-full text-left ${galleryItems.some((item) => pathname === item.href)
								? "after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#eab308] after:transition-all after:duration-300"
								: ""
								}`}
							aria-expanded={isMobileGalleryOpen}
							aria-controls="gallery-dropdown-mobile"
						>
							Gallery{" "}
							<ChevronDown
								size={13}
								className={`transition-transform duration-200 ml-1 ${isMobileGalleryOpen ? "rotate-180" : ""
									}`}
							/>
						</button>
						<div
							id="gallery-dropdown-mobile"
							ref={mobileGalleryRef}
							style={{ maxHeight: `${mobileGalleryHeight}px` }}
							className={`overflow-hidden transition-all duration-500 ease-in-out pl-4 mt-1 border-l-2 border-[#eab308]/30 ${isMobileGalleryOpen ? "opacity-100" : "opacity-0"
								}`}
						>
							<div className="flex flex-col gap-3 py-2">
								{galleryItems.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className={`text-white text-base hover:text-[#eab308] transition-colors duration-200 px-2 ${pathname === item.href ? "text-[#eab308] font-medium" : ""
											}`}
										onClick={() => {
											setIsMobileGalleryOpen(false);
											setIsMobileMenuOpen(false);
											handleNavigation();
										}}
									>
										{item.label}
									</Link>
								))}
							</div>
						</div>
					</div>

					<Link
						href={WHATSAPP_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-[#eab308] px-6 py-3 rounded text-[#211f1b] font-bold hover:bg-[#d4a007] transition-all duration-200 text-center mt-2"
						onClick={() => setIsMobileMenuOpen(false)}
					>
						Inquire Now
					</Link>
				</div>
			</nav>
		</header>
	);
}