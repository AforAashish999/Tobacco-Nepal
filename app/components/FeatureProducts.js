import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";

export default async function FeatureProducts() {
    const response = await fetch(`${process.env.API_URL}/products`);
    if(!response.ok){
        throw new Error("Failed to fetch products");
    }
    const data = await response.json();

    const filteredProducts = data.slice(0,5);
  return (
    <div className='min-h-screen bg-black px-8 py-15'>

        <div className='flex flex-col items-center justify-center space-y-10'>
            <h1 className='text-5xl text-[#EAB308] font-bold '>Our Feature Products</h1>
            <h2 className='text-lg text-[#D2863C] font-bold tracking-wide'>Experience rich, smooth tobacco made using time-honored methods and sustainable practices.</h2>
        </div>

        {/* PRODUCT GRID */}
        <div className=" p-5 grid grid-cols-5 gap-x-4 mt-5  "> 
        {
            filteredProducts.map((product) => (
                <div
                className=" bg-[#111111]  h-90 rounded-xl flex flex-col justify-between
                 hover:transition hover:duration-500 hover:border-orange-300/50 hover:border cursor-pointer "
                 key={product.id}>
                 
                    <Image src={product.images } alt="image"
                    width={283} height={50} className="pt-10" />
                  
                  <div className="bg-[#1A1A1A] rounded-xl p-5 ">
                   <h2 className="text-center text-xl font-bold text-yellow-500">  {product.name} </h2>
                  <p className="line-clamp-2 text-center text-[#D2863C] tracking-wide">  {product.description}</p>
                  </div>

                    </div>

            ))
            
        }
        </div>

        <Link href="/products"
        className="text-yellow-400 font-bold tracking-wide flex items-center justify-end hover:text-yellow-300 mr-4">
         <p>View All</p>
          <MdOutlineArrowRightAlt className="text-xl" />
          </Link>

    <div className="flex justify-center pt-16">
          <Link href="/products"
               className="bg-[#EAB308] px-5 py-2.5 text-xl font-bold rounded-md hover:bg-yellow-300 ">
               View Products
               </Link>

    </div>
       
    </div>
  )
}
