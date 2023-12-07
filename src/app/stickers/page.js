import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Stickers = () => {
  return(
    <div className='bg-black'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a >
          <Link href="/product" className="block relative h-48 rounded overflow-hidden"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Stickers/sticker1.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stickers</h3>
          <h2 className="text-white title-font text-lg font-medium">Colon</h2>
          <p className="text-cyan-300">₹ 16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link href="/product" className="block relative h-48 rounded overflow-hidden"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Stickers/sticker2.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stickers</h3>
          <h2 className="text-white title-font text-lg font-medium">Binary</h2>
          <p className="text-cyan-300">₹ 21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link href="/product" className="block relative h-48 rounded overflow-hidden"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Stickers/sticker3.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stickers</h3>
          <h2 className="text-white title-font text-lg font-medium">Boss</h2>
          <p className="text-cyan-300">₹ 12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link href="/product" className="block relative h-48 rounded overflow-hidden"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Stickers/sticker4.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stickers</h3>
          <h2 className="text-white title-font text-lg font-medium">Coding loop</h2>
          <p className="text-cyan-300">₹ 18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link href="/product" className="block relative h-48 rounded overflow-hidden"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Stickers/sticker5.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stickers</h3>
          <h2 className="text-white title-font text-lg font-medium">Code it</h2>
          <p className="text-cyan-300">₹ 16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link href="/product" className="block relative h-48 rounded overflow-hidden"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Stickers/sticker6.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stickers</h3>
          <h2 className="text-white title-font text-lg font-medium">Naive</h2>
          <p className="text-cyan-300">₹ 21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link href="/product" className="block relative h-48 rounded overflow-hidden"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Stickers/sticker7.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stickers</h3>
          <h2 className="text-white title-font text-lg font-medium">Stressed</h2>
          <p className="text-cyan-300">₹ 12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link href="/product" className="block relative h-48 rounded overflow-hidden"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Stickers/sticker8.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stickers</h3>
          <h2 className="text-white title-font text-lg font-medium">Perfection</h2>
          <p className="text-cyan-300">₹ 18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Stickers