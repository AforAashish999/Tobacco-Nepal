"use client";
import useSWR from 'swr';
import { useState } from "react"
import SearchSort from '../components/SearchSort';



const fetcher = url => fetch(url).then(res => res.json());

export default function CategoriesList() {
    const[showAllProduct, setShowAllProduct] = useState(false);
    const [useCategory, setUseCategory] = useState("gutkha");

    const{data:allData, error:allError, isLoading:allIsLoading } = useSWR(`${process.env.NEXT_PUBLIC_API}/products`, fetcher)
    const { data:filteredData, error:filteredError, isLoading:filteredIsLoading, mutate } = useSWR(`${process.env.NEXT_PUBLIC_API}/products?category=${useCategory}`, fetcher);
    if (allIsLoading || filteredIsLoading ) return <p>Page is loading................................</p>
    if (allError || filteredError ) return <p>Error occured................{error.message} </p>

   
    // console.log(data);
    console.log(`${process.NEXT_PUBLIC_API}/product?category=${useCategory}`);

    // const products = data?.product || data || []; // fallback if structure differs

        const slicedProduct = allData.slice(0,10);

    return (
        <div className=' min-h-screen bg-black px-7 pb-15  space-y-10'>

            {/* SEARCH AND SORT BOXES */}
           <SearchSort />

            <h1 className='text-[#d2863c] font-semibold text-lg text-center'> Showing Products <span className='text-[#EAB308]'>10</span> of <span className='text-[#EAB308]'>15</span>  products </h1>

            <div className='flex justify-between'>

                <button
                onClick={()=>setShowAllProduct(true)}
                className={` text-lg  tracking-wide font-semibold rounded-lg cursor-pointer px-12
                         transform transition-all ease-in-out  duration-300   
                           ${showAllProduct === true ? "bg-yellow-100 text-[#EAB308] translate-y-0 " :  
                            "bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 "} `} 
                >
                    All Categories
                </button>
                <button
                    onClick={() => {
                        setShowAllProduct("false");
                        setUseCategory("gutkha");
                    }}
                    className={` text-lg  tracking-wide font-semibold rounded-lg cursor-pointer px-12
                         transform transition-all ease-in-out  duration-300   
                           ${useCategory === 'gutkha' ? "bg-yellow-100 text-[#EAB308] translate-y-0 " :  
                            "bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 "} `} 
                     >
                    Gutkha Products
                </button>
                <button
                    onClick={() => setUseCategory("surti")}
                    className={` text-lg tracking-wide font-semibold rounded-lg cursor-pointer px-5
                         transform transition-all ease-in-out  duration-300   
                           ${useCategory === 'surti' ? "bg-yellow-100 text-[#EAB308] translate-y-0 " :  //when its active
                            "bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 "} `} //when its passive
                >
                    Surti/Khaini Products
                </button>

                <button
                onClick={()=>setUseCategory("jarda")}
                className={` text-lg tracking-wide font-semibold rounded-lg cursor-pointer px-12
                         transform transition-all ease-in-out  duration-300   
                           ${useCategory === 'jarda' ? "bg-yellow-100 text-[#EAB308] translate-y-0 " :  
                            "bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 "} `} 
                >
                    Jarda Products
                </button>
                <button
                onClick={()=>setUseCategory("pan-masala")}
                     className={` text-lg tracking-wide font-semibold rounded-lg cursor-pointer max-w-[200px] px-4 py-3
                         transform transition-all ease-in-out  duration-300   
                           ${useCategory === 'pan-masala' ? "bg-yellow-100 text-[#EAB308] translate-y-0 " :  
                            "bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 "} `} 
                >
                    Sada-Paan Masala (Non-Tobacco)
                </button>
            </div>


            <div className='grid grid-cols-4 grid-rows-3 gap-x-5 w-full'>
                {
                    showAllProduct? 
                    slicedProduct.map((item) => (
                            <div key={item.id}
                                className='bg-red-700'>
                                <h1 className='text-2xl text-white'> {item.name} </h1>

                            </div>

                        ))
                        :
                        filteredData.map((item) => (
                            <div key={item.id}
                                className='bg-red-700'>
                                <h1 className='text-2xl text-white'> {item.name} </h1>

                            </div>

                        ))
                }
            </div>





        </div>
    )
}


/*
filteredData.length === 0 ? (
                        <div className='p-25 grid-cols-4'>
                            <p className='text-white text-5xl max-w-4xl font-bold'> There are no products in this category</p>
                        </div>
                    ) :

                    */