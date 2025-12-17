import styles from "./Second-Section.module.css";
import useSWR from "swr";
import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const fetcher = url => fetch(url).then(res => res.json());

export default function SecondSection() {
    const [category, setCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const categories = [
        { label: 'All Products', value: '' },
        { label: 'Gutkha Products', value: 'gutkha' },
        { label: 'Surti/Khaini Products', value: 'surti' },
        { label: 'Jards Products', value: 'jarda' },
        { label: 'Sada-Pan Masala (Non-Tobacco)', value: 'pan-masala' },
        { label: 'Export Products', value: 'export' },
    ]

    const params = new URLSearchParams();
    if (category) {
        params.append("category", category)
    }
    const url = `${process.env.NEXT_PUBLIC_API}/gallery${params.toString() ? `?${params.toString()}` : ''}`
    const { data, error, isLoading } = useSWR(url, fetcher);
    console.log(data);
    if (isLoading && !data)
        return <p>Page is loading................................</p>
    if (error) return <p>Error occured................{error.message} </p>


    console.log(data);
     // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

    return (
        <div className={styles.products} >

            <div className={styles.products__categorieWrapper}>
                <div className={styles.products__categorieBtn}>
                    {
                        categories.map((item) => (
                            <button
                                key={item.value}
                                className={`${styles.products__button} ${category === item.value ? styles['products__button--active'] : styles['products__button--passive']} `}
                                onClick={() => setCategory(item.value)}
                            >
                                {item.label}
                            </button>
                        ))
                    }

                </div>
            </div>


            <div className={styles.products__imagesWrapper} >
                {
                    paginatedData.length === 0 ? (
                        <div className={styles.products__empty}>
                            <p>  There are no products in this category</p>

                        </div>
                    ):
                    paginatedData.map((item) => (
                            <div
                                key={item.id}
                                className={styles.products__item}
                            >
                                <Image
                                    src={item.images}
                                    alt="photogalleryimages"
                                    fill
                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                />
                            </div> ))
                }
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
                 </div> <div className={styles.products__pagination}>
                page
            </div>

        </div>
    )
}


/*
const query = params.toString();
const url = `${process.env.NEXT_PUBLIC_API}/gallery${query ? `?${query}` : ''}`;

*/