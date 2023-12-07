import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Tshirts = () => {
  return(
    <div className='bg-black'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link href="/product" className='block relative h-48 rounder overflow-hidden' > <Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/tshirts/tshirt1.jpeg"/></Link>
        
        <div className="mt-4">
          <h3 className=" text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
          <h2 className="text-white title-font text-lg font-medium">Pure Black</h2>
          <p className="text-cyan-300">₹ 16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        
          <Link href="/product" className='block relative h-48 rounder overflow-hidden'> <Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/tshirts/tshirt2.jpeg"/></Link>
        
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
          <h2 className="text-white title-font text-lg font-medium">Simple Black</h2>
          <p className="text-cyan-300">₹ 21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        
          <Link href="/product" className='block relative h-48 rounder overflow-hidden'> <Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/tshirts/tshirt3.jpeg"/></Link>
        
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
          <h2 className="text-white title-font text-lg font-medium">3D printing</h2>
          <p className="text-cyan-300">₹ 12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        
          <Link href="/product" className='block relative h-48 rounder overflow-hidden'> <Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/tshirts/tshirt4.jpeg"/></Link>
        
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
          <h2 className="text-white title-font text-lg font-medium">Halloween</h2>
          <p className="text-cyan-300">₹ 18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        
          <Link href="/product" className='block relative h-48 rounder overflow-hidden'> <Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/tshirts/tshirt5.jpeg"/></Link>
        
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
          <h2 className="text-white title-font text-lg font-medium">Marshmellow</h2>
          <p className="text-cyan-300">₹ 16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        
          <Link href="/product" className='block relative h-48 rounder overflow-hidden'> <Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/tshirts/tshirt6.jpeg"/></Link>
        
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
          <h2 className="text-white title-font text-lg font-medium">Old school</h2>
          <p className="text-cyan-300">₹ 21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        
          <Link href="/product" className='block relative h-48 rounder overflow-hidden'> <Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/tshirts/tshirt7.jpeg"/></Link>
        
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
          <h2 className="text-white title-font text-lg font-medium">Telegram</h2>
          <p className="text-cyan-300">₹ 12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        
          <Link href="/product" className='block relative h-48 rounder overflow-hidden'> <Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/tshirts/tshirt8.jpeg"/></Link>
        
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
          <h2 className="text-white title-font text-lg font-medium">Mockup</h2>
          <p className="text-cyan-300">₹ 18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        
          <Link href="/product" className='block relative h-48 rounder overflow-hidden'> <Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/tshirts/tshirt8.jpeg"/></Link>
        
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
          <h2 className="text-white title-font text-lg font-medium">Mockup</h2>
          <p className="text-cyan-300">₹ 18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Tshirts
