import React from 'react'

export default function ProductCard({item}) {
  return (
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
  )
}
