import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";

export default async function FeatureProducts() {
  const response = await fetch(`${process.env.API_URL}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();

  const filteredProducts = data.slice(0, 5);
  return (
    <div className='min-h-screen bg-black px-8 py-15'>
      <div className='flex flex-col items-center justify-center space-y-8'>
        <h1 className='text-5xl text-[#EAB308] font-bold '>Our Feature Products</h1>
        <h2 className='text-lg text-[#D2863C] font-medium '>Experience rich, smooth tobacco made using time-honored methods and sustainable practices.</h2>
      </div>

      {/* PRODUCT GRID */}
      <div
        className=" p-5 grid grid-cols-5 gap-x-4 mt-5  ">
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
        <p>View All</p>
        <MdOutlineArrowRightAlt className="text-xl" />
      </Link>

      <div className="flex justify-center pt-16">
        <Link href="/products"
          className="bg-[#EAB308] px-6 py-2 text-lg font-bold rounded-md hover:bg-yellow-300 ">
          View Products
        </Link>
      </div>

    </div>
  )
}
