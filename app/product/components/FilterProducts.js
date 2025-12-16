// import useSWR from 'swr';
// import { useState } from "react"
// import SearchSort from './SearchSort';
// import Image from "next/image";

// const fetcher = url => fetch(url).then(res => res.json());

// export default function FilterProducts() {
//     const [showAllProduct, setShowAllProduct] = useState(false);
//     const [useCategory, setUseCategory] = useState("gutkha");
//     const[search, setSearch] = useState("");

//     const { data: allData, error: allError, isLoading: allIsLoading } = useSWR(`${process.env.NEXT_PUBLIC_API}/products`, fetcher)
//     const { data: filteredData, error: filteredError, isLoading: filteredIsLoading, mutate } = useSWR(`${process.env.NEXT_PUBLIC_API}/products?category=${useCategory}`, fetcher);
//     if (allIsLoading || filteredIsLoading) return <p>Page is loading................................</p>
//     if (allError || filteredError) return <p>Error occured................{error.message} </p>

//     // console.log(data);
//     console.log(`${process.NEXT_PUBLIC_API}/product?category=${useCategory}`);

//     // const products = data?.product || data || []; // fallback if structure differs

//     const slicedProduct = allData.slice(0, 10);

//     return (
//         <div className=' min-h-screen bg-black px-6  flex flex-col space-y-10   '>

//             {/* SEARCH AND SORT BOXES */}
//             <SearchSort />

//             <h1 className='text-[#d2863c] font-semibold text-lg text-center'> Showing Products <span className='text-[#EAB308]'>10</span> of <span className='text-[#EAB308]'>15</span>  products </h1>

//             <div
//                 //  className='flex justify-between'
//                 className="h-24 p-2 flex justify-between "
//             >

//                 <button
//                     onClick={() => {
//                         setShowAllProduct(true);
//                         setUseCategory("");
//                     }}
//                     className={` text-lg  font-semibold rounded-lg cursor-pointer py-2 px-4  w-[238.53px]
//                          transform transition-all ease-in-out  duration-300
//                            ${showAllProduct === true ? "bg-yellow-100 text-[#EAB308] translate-y-0 " :
//                             "bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 "} `}
//                 >
//                     All Categories
//                 </button>
//                 <button
//                     onClick={() => {
//                         setShowAllProduct(false);
//                         setUseCategory("gutkha");
//                     }}
//                     className={` text-lg   font-semibold rounded-lg cursor-pointer p-2 w-[222.53px]
//                          transform transition-all ease-in-out  duration-300
//                            ${useCategory === 'gutkha' ? "bg-yellow-100 text-[#EAB308] translate-y-0 " :
//                             "bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 "} `}
//                 >
//                     Gutkha Products
//                 </button>
//                 <button
//                     onClick={() => {
//                         setShowAllProduct(false);
//                         setUseCategory("surti");
//                     }}
//                     className={` text-lg  font-semibold rounded-lg cursor-pointer   p-2  w-[222.53px]
//                          transform transition-all ease-in-out  duration-300
//                            ${useCategory === 'surti' ? "bg-yellow-100 text-[#EAB308] translate-y-0 " :  //when its active
//                             "bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 "} `} //when its passive
//                 >
//                     Surti/Khaini Products
//                 </button>

//                 <button
//                     onClick={() => {
//                         setShowAllProduct(false);
//                         setUseCategory("jarda");
//                     }}
//                     className={` text-lg  font-semibold rounded-lg cursor-pointer    p-2  w-[222.53px]
//                          transform transition-all ease-in-out  duration-300
//                            ${useCategory === 'jarda' ? "bg-yellow-100 text-[#EAB308] translate-y-0 " :
//                             "bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 "} `}
//                 >
//                     Jarda Products
//                 </button>
//                 <button
//                     onClick={() => {
//                         setShowAllProduct(false);
//                         setUseCategory("pan-masala");
//                     }}
//                     className={` text-lg  font-semibold rounded-lg cursor-pointer p-2  w-[222.53px]
//                          transform transition-all ease-in-out  duration-300
//                            ${useCategory === 'pan-masala' ? "bg-yellow-100 text-[#EAB308] translate-y-0 " :
//                             "bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 "} `}
//                 >
//                     Sada-Paan Masala (Non-Tobacco)
//                 </button>
//             </div>

//             <div className='grid grid-cols-4  gap-12 w-full mb-16 '>
//                 {
//                     showAllProduct ?
//                         slicedProduct.map((item) => (
//                             <div key={item.id}
//                                 className='rounded-xl overflow-hidden '>
//                                 {/* IMAGE Wrapper */}
//                                 <div className=' h-[255.1px] flex flex-col justify-evenly bg-[#111111] ' >
//                                     <div className="h-2/3 bg-blue-500 relative " >
//                                         <Image src={item.images}
//                                             alt="images"
//                                             fill
//                                             style={{ objectFit: 'cover', objectPosition: 'center' }}
//                                         />
//                                     </div>
//                                 </div>
//                                 {/* DESCRIPTIONI */}
//                                 <div className="p-4 bg-[#1A1A1A] " >
//                                     <h1 className='text-lg text-[#EAB308] text-center mb-2 font-bold '> {item.name} </h1>
//                                     <h2 className='text-[#d2863c] text-sm line-clamp-2 text-center ' > {item.description} </h2>
//                                 </div>
//                             </div>))
//                         :
//                         filteredData.map((item) => (
//                             <div key={item.id}
//                                 className='rounded-xl overflow-hidden '>
//                                 {/* IMAGE Wrapper */}
//                                 <div className=' h-[255.1px] flex flex-col justify-evenly bg-[#111111] ' >
//                                     <div className="h-2/3 bg-blue-500 relative " >
//                                         <Image src={item.images}
//                                             alt="images"
//                                             fill
//                                             style={{ objectFit: 'cover', objectPosition: 'center' }}
//                                         />
//                                     </div>
//                                 </div>
//                                 {/* DESCRIPTIONI */}
//                                 <div className="p-4 bg-[#1A1A1A] " >
//                                     <h1 className='text-lg text-[#EAB308] text-center mb-2 font-bold '> {item.name} </h1>
//                                     <h2 className='text-[#d2863c] text-sm line-clamp-2 text-center ' > {item.description} </h2>
//                                 </div>
//                             </div>))
//                 }
//             </div>
//         </div>
//     )
// }

// ********************************************************************************************
// FILTERING LOGIC ONLY

// import useSWR from 'swr'
// import { useState } from 'react'
// import SearchSort from './SearchSort'
// import Image from 'next/image'

// const fetcher = url => fetch(url).then(res => res.json())

// export default function FilterProducts () {
//   const [category, setCategory] = useState('')
//   const [search, setSearch] = useState('')
//   const params = new URLSearchParams()
//   if (category) {
//     params.append('category', category)
//   }
//   const url = `${process.env.NEXT_PUBLIC_API}/products${
//     params.toString() ? `?${params.toString()}` : ''
//   }`
//   const { data, error, isLoading, mutate } = useSWR(url, fetcher)
//   if (isLoading) return <p>Page is loading................................</p>
//   if (error) return <p>Error occured................{error.message} </p>
//   return (
//     <div className=' min-h-screen bg-black px-6  flex flex-col space-y-10   '>
//       {/* SEARCH AND SORT BOXES */}
//       <SearchSort />

//       <h1 className='text-[#d2863c] font-semibold text-lg text-center'>
//
//         Showing Products <span className='text-[#EAB308]'>10</span> of{' '}
//         <span className='text-[#EAB308]'>15</span> products{' '}
//       </h1>

//       <div className='h-24 p-2 flex justify-between '>
//         <button
//           onClick={() => setCategory('')}
//           className={` text-lg  font-semibold rounded-lg cursor-pointer py-2 px-4  w-[238.53px] transform transition-all ease-in-out  duration-300
//                            ${
//                              category === ''
//                                ? 'bg-yellow-100 text-[#EAB308] translate-y-0 '
//                                : 'bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 '
//                            } `}
//         >
//           All Categories
//         </button>
//         <button
//           onClick={() => setCategory('gutkha')}
//           className={` text-lg   font-semibold rounded-lg cursor-pointer p-2 w-[222.53px] transform transition-all ease-in-out  duration-300
//                            ${
//                              category === 'gutkha'
//                                ? 'bg-yellow-100 text-[#EAB308] translate-y-0 '
//                                : 'bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 '
//                            } `}
//         >
//           Gutkha Products
//         </button>
//         <button
//           onClick={() => setCategory('surti')}
//           className={` text-lg  font-semibold rounded-lg cursor-pointer   p-2  w-[222.53px] transform transition-all ease-in-out  duration-300
//                            ${
//                              category === 'surti'
//                                ? 'bg-yellow-100 text-[#EAB308] translate-y-0 '
//                                : 'bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 '
//                            } `}
//         >
//           Surti/Khaini Products
//         </button>

//         <button
//           onClick={() => setCategory('jarda')}
//           className={` text-lg  font-semibold rounded-lg cursor-pointer p-2  w-[222.53px] transform transition-all ease-in-out  duration-300
//                            ${
//                              category === 'jarda'
//                                ? 'bg-yellow-100 text-[#EAB308] translate-y-0 '
//                                : 'bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 '
//                            } `}
//         >
//           Jarda Products
//         </button>
//         <button
//           onClick={() => setCategory('masala')}
//           className={` text-lg  font-semibold rounded-lg cursor-pointer p-2  w-[222.53px] transform transition-all ease-in-out  duration-300
//                            ${
//                              category === 'pan-masala'
//                                ? 'bg-yellow-100 text-[#EAB308] translate-y-0 '
//                                : 'bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 '
//                            } `}
//         >
//           Sada-Paan Masala (Non-Tobacco)
//         </button>
//       </div>

//       <div className='grid grid-cols-4  gap-12 w-full mb-16 '>
//         {data.length === 0 ? (
//           <div className='col-span-4 pt-20 flex justify-center items-center'>
//             <p className='text-white text-5xl font-bold'>
//               There are no products in this category
//             </p>
//           </div>
//         ) : (
//           data.map(item => (
//             <div key={item.id} className='rounded-xl overflow-hidden '>
//               {/* IMAGE Wrapper */}
//               <div className=' h-[255.1px] flex flex-col justify-evenly bg-[#111111] '>
//                 <div className='h-2/3 bg-blue-500 relative '>
//                   <Image
//                     src={item.images}
//                     alt='images'
//                     fill
//                     style={{ objectFit: 'cover', objectPosition: 'center' }}
//                   />
//                 </div>
//               </div>
//               {/* DESCRIPTIONI */}
//               <div className='p-4 bg-[#1A1A1A] '>
//                 <h1 className='text-lg text-[#EAB308] text-center mb-2 font-bold '>
//
//                   {item.name}{' '}
//                 </h1>
//                 <h2 className='text-[#d2863c] text-sm line-clamp-2 text-center '>
//
//                   {item.description}{' '}
//                 </h2>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   )
// }

// *********************************************************************************************
// Got it, mate. You already have a solid setup using SWR, which is actually perfect for server-side
// fetching with query parameters — you don’t need useEffect in this case because SWR handles revalidation
// automatically. I’ll show you how to modify your code to include both category filtering and search while
//  keeping your SWR setup.

import useSWR from 'swr'
import { useState } from 'react'
import SearchSort from './SearchSort'
import Image from 'next/image'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const fetcher = url => fetch(url).then(res => res.json())

export default function FilterProducts () {
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const categories = [
    { label: 'All Categories', value: '' },
    { label: '   Gutkha Products', value: 'gutkha' },
    { label: ' Surti/Khaini Products', value: 'surti' },
    { label: 'Jarda Products', value: 'jarda' },
    { label: 'Sada-Paan Masala (Non-Tobacco)', value: 'pan-masala' }
  ]
  const params = new URLSearchParams()
  if (category) params.append('category', category)
  if (search) params.append('name_like', search.toLowerCase())

  const url = `${process.env.NEXT_PUBLIC_API}/products${
    params.toString() ? `?${params.toString()}` : ''
  }`
  const { data, error, isLoading, mutate } = useSWR(url, fetcher, {
    keepPreviousData: true
  })
  if (isLoading && !data)
    return <p>Page is loading................................</p>
  if (error) return <p>Error occured................{error.message} </p>

  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage)

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }
  return (
    <div className=' min-h-screen bg-black px-6  flex flex-col space-y-10   '>
      {/* SEARCH AND SORT BOXES */}
      <SearchSort search={search} setSearch={setSearch} />
      {/* Optional: Show loading indicator during background fetch */}
      {/* {isLoading && data && (
                <div className='fixed top-4 right-4 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold'>
                    Loading...
                </div>
            )} */}

      <h1 className='text-[#d2863c] font-semibold text-lg text-center'>
        Showing Products <span className='text-[#EAB308]'>10</span> of
        <span className='text-[#EAB308]'>15</span> products
      </h1>

      <div className='h-24 p-2 flex space-x-5 '>
        {categories.map(btn => (
          <button
            key={btn.value}
            onClick={() => setCategory(btn.value)}
            className={` text-lg  font-semibold rounded-lg cursor-pointer py-2 px-4  w-[238.53px] transform transition-all ease-in-out  duration-300   
                           ${
                             category === btn.value
                               ? 'bg-yellow-100 text-[#EAB308] translate-y-0 '
                               : 'bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 '
                           } `}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-4  gap-12 w-full mb-16 '>
        {paginatedData.length === 0 ? (
          <div className='col-span-4 pt-20 flex justify-center items-center'>
            <p className='text-white text-5xl font-bold'>
              There are no products in this category
            </p>
          </div>
        ) : (
          paginatedData.map(item => (
            <div key={item.id} className='rounded-xl overflow-hidden '>
              {/* IMAGE Wrapper */}
              <div className=' h-[255.1px] flex flex-col justify-evenly bg-[#111111] '>
                <div className='h-2/3 bg-blue-500 relative '>
                  <Image
                    src={item.images}
                    alt='images'
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
              </div>
              {/* DESCRIPTIONI */}
              <div className='p-4 bg-[#1A1A1A] '>
                <h1 className='text-lg text-[#EAB308] text-center mb-2 font-bold '>
                  {item.name}
                </h1>
                <h2 className='text-[#d2863c] text-sm line-clamp-2 text-center '>
                  {item.description}
                </h2>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Pagination Controls */}
      <div className='flex justify-center items-center gap-4 mt-5 mb-20 '>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className={` h-14 w-14 flex justify-center items-center rounded-xl disabled:opacity-50 cursor-pointer
                         transform transition-all ease-in duration-200 hover:scale-110 
                  ${
                    currentPage === 1
                      ? 'text-gray-300 bg-[#282828] '
                      : 'bg-linear-to-l from-[#1a1a1a] to-[#2d2d2d] text-white  '
                  } `}
        >
          <MdKeyboardArrowLeft className={`text-3xl  `} />
        </button>

        {pageNumbers.map(num => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`hover:scale-110 transition-all ease-in duration-200 cursor-pointer h-12 w-12 text-lg font-bold rounded-xl 
                             ${
                               currentPage === num
                                 ? 'bg-[#EAB308] shadow-[#EAB308] shadow-lg/60  text-black'
                                 : 'bg-[#2D2D2D] text-white'
                             }`}
          >
            {num}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className={` h-14 w-14 flex justify-center items-center rounded-xl disabled:opacity-50 cursor-pointer
                         transform transition-all ease-in duration-200 hover:scale-110 
                  ${
                    currentPage === 2
                      ? 'text-gray-300 bg-[#282828] '
                      : 'bg-linear-to-r from-[#1a1a1a] to-[#2d2d2d] text-white  '
                  } `}
        >
          <MdOutlineKeyboardArrowRight className='text-3xl' />
        </button>
      </div>
    </div>
  )
}
