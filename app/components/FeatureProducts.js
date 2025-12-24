import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";

export default async function FeatureProducts() {
  const response = await fetch("https://productsbackend-0zfz.onrender.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  const allProducts = data?.products || []

  const filteredProducts = allProducts.slice(0, 5);
  return (
    <div className='min-h-screen bg-black md:px-8  py-15'>

      <div className='flex flex-col items-center justify-center space-y-8'>
        <h1 className='text-5xl text-[#EAB308] font-bold text-center md:text-nowrap  md:max-w-none leading-tight md:leading-none '>Our Featured Products</h1>
        <h2 className='text-lg text-[#D2863C] max-w-[330px] md:max-w-2xl font-medium text-center  '>Experience rich, smooth tobacco made using time-honored methods and sustainable practices.</h2>
      </div>

      {/* PRODUCT GRID */}
      <div
        className=" p-5 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-x-4 mt-5  ">
        {
          // individual products
          filteredProducts.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`}
              className='rounded-xl overflow-hidden '>
              {/* IMAGE Wrapper */}
              <div className=' h-[255.1px] flex flex-col justify-evenly bg-[#111111] ' >
                <div className="h-2/3 bg-blue-500 relative " >
                  <Image src={item.images}
                    alt="images"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
              </div>
              {/* DESCRIPTIONI */}
              <div className="p-4 bg-[#1A1A1A] " >
                <h1 className='text-lg text-[#EAB308] text-center mb-2 font-bold '> {item.name} </h1>
                <h2 className='text-[#d2863c] text-sm line-clamp-2 text-center ' > {item.description} </h2>
              </div>
            </Link>))
        }
      </div>

      <Link href="/products"
        className="text-[#EAB308] font-semibold  flex items-center justify-end hover:text-yellow-300 mr-4">
        <p className="text-lg md:text-base">View All</p>
        <MdOutlineArrowRightAlt className="text-xl" />
      </Link>

      <div className="flex justify-center pt-16">
        <Link href="/products"
          className="bg-[#EAB308] px-3 md:px-6 py-2 text-base md:text-lg font-bold rounded-lg md:rounded-md hover:bg-yellow-300 ">
          View Products
        </Link>
      </div>

    </div>
  )
}
