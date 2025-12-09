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

        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-5xl text-yellow-300 font-bold '>Our Feature Products</h1>
            <h2 className='text-lg text-orange-300 font-bold tracking-wide'>Experience rich, smooth tobacco made using time-honored methods and sustainable practices.</h2>
        </div>

        {/* PRODUCT GRID */}
        <div className="bg-amber-500 p-5 flex"> 
        {
            filteredProducts.map((product) => (
                <div
                className="grid grid-cols-5 bg-green-600"
                 key={product.id}>
                    <Image src={product.images } alt="image"
                    height={20} width={15} />
                   <h2>  {product.name} </h2>
                  <p className="truncate">  {product.description}</p>
                    </div>

            ))
            
        }
        </div>

        <Link href="/products"
        className="text-yellow-400 font-bold tracking-wide flex items-center justify-end hover:text-yellow-300">
         <p>View All</p>
          <MdOutlineArrowRightAlt className="text-xl" />
          </Link>

    <div className="flex justify-center">
          <Link href="/products"
               className="bg-yellow-400 px-5 py-3 text-xl font-bold rounded-md hover:bg-yellow-300 ">
               View Products
               </Link>

    </div>
       
    </div>
  )
}
