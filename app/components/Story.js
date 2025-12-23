import Link from 'next/link'
import Image from 'next/image'
import StoryImage from '../../public/ourstory.webp'

export default function Story () {
  return (
    <div className='min-h-screen grid grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-none
      bg-black px-4 lg:pt-25 md:pb-0 gap-x-6'>

      <div className='bg-amber col-span-1 py-15 lg:pl-10 md:pl-0 flex flex-col justify-between md:justify-around md:py-20 space-y-10 md:space-y-0'>
        <h1 className='text-5xl font-bold text-[#F8985F] lg:mb-8 mb:mb-0 '>Our Story</h1>
        <p 
        className='text-xl font-semibold text-[#61511C] lg:mb-8 md:mb-0 lg:max-w-xl md:w-full text-justify '>
          Founded in 1985, Tobacco has been cultivating and processing premium
          tobacco in the pristine foothills of the Himalayas for over three
          decades. Our journey began with a simple mission: to produce the
          finest quality tobacco products while preserving traditional farming
          methods.
        </p>
        <Link
          href='/about'
          className='bg-[#EAB308] px-6 py-2.5 w-fit font-semibold rounded-md hover:bg-yellow-600 '
        >
          Learn Our Story
        </Link>
      </div>

      <div className='bg-green col-span-1 rounded-xl lg:p-5 md:px-16 '>
        <Image
          src={StoryImage}
          alt='image'
          className='lg:h-full md:h-3/4 w-full   object-center object-cover rounded-xl'
        />
      </div>
    </div>
  )
}
