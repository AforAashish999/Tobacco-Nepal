import useSWR from 'swr'
import { useState,useEffect,useRef } from 'react'
import SearchSort from './SearchSort'
import ProductCard from '../../components/ProductCard.js'
import Pagination from '../../components/Pagination.js'
import EmptyProduct from './EmptyProduct.js'
import Popup from './Popup.js'

const fetcher = url => fetch(url).then(res => res.json())

export default function FilterProducts () {
  const productsRef = useRef(null);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('desc')

 //scroll to top when page changes
  useEffect(() => {
  productsRef.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}, [currentPage])
    
  const itemsPerPage = 10
  const categories = [
    { label: 'All Categories', value: '' },
    { label: ' Gutkha Products', value: 'gutkha' },
    { label: ' Surti/Khaini Products', value: 'surti' },
    { label: 'Jarda Products', value: 'jarda' },
    { label: 'Sada-Paan Masala (Non-Tobacco)', value: 'pan-masala' }
  ]
  const params = new URLSearchParams()
  if (category) params.append('category', category)
  if (search) params.append('name_like', search.toLowerCase())
    //sorting
    params.append('_sort', 'createdAt');
    params.append('_order', sortOrder);

      const query = params.toString();

  // const url = `${process.env.NEXT_PUBLIC_API}/products${params.toString() ? `?${params.toString()}` : ''}`
   const url = `${process.env.NEXT_PUBLIC_API}/products${query ? `?${query}` : ''}`
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

  //text logic
  const currentCategoryName = categories.find(item => item.value === category)?.label || 'All Products'

  return (
    <div ref={productsRef} className=' min-h-screen bg-black px-6  flex flex-col space-y-10   '>
      <SearchSort 
      search={search} setSearch={setSearch}
       sortOrder={sortOrder}  setSortOrder={setSortOrder} setCurrentPage={setCurrentPage} />

          {/* CATEGORY POPUP */}
      <Popup category={category}  setCategory={setCategory} currentCategoryName={currentCategoryName}/>

            {/* NUMBER OF PRODUCTS */}
      <h1 className='text-[#d2863c] font-semibold text-lg text-center'>
        Showing Products{' '}
        <span className='text-[#EAB308]'>{paginatedData.length}</span> of{' '}
        <span className='text-[#EAB308]'>{data.length} </span>
        {category && <span> in "{currentCategoryName} " </span>}
      </h1>

      {/* CATEGORY BUTTONS */}
      <div className='h-24 p-2 flex space-x-5 '>
        {categories.map(btn => (
          <button
            key={btn.value}
            onClick={() => setCategory(btn.value)}
            className={` text-lg  font-semibold rounded-lg cursor-pointer py-2 px-4  w-[238.53px] transform transition-all ease-in-out  duration-300   
                           ${ category === btn.value
                               ? 'bg-yellow-100 text-[#EAB308] translate-y-0 '
                               : 'bg-white text-gray-700 hover:text-[#EAB308] hover:bg-yellow-50 hover:-translate-y-1 '} `
                      }
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className='grid grid-cols-4  gap-12 w-full mb-16 '>
        {paginatedData.length === 0 ? <EmptyProduct />
          : paginatedData.map(item => <ProductCard key={item.id} item={item} />)
        }
      </div>

      {/* PAGINATION */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
