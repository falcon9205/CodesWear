import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hoodies = () => {
  return(
    <div className='bg-black'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link href="/product"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/hoodies/Hoodie1.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-white title-font text-lg font-medium">Black</h2>
          <p className="text-cyan-300">₹ 16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link href="/product"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/hoodies/Hoodie2.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-white title-font text-lg font-medium">Green</h2>
          <p className="text-cyan-300">₹ 21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link href="/product"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/hoodies/Hoodie3.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-white title-font text-lg font-medium">Grey</h2>
          <p className="text-cyan-300">₹ 12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link href="/product"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/hoodies/Hoodie4.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-white title-font text-lg font-medium">Printed Brown</h2>
          <p className="text-cyan-300">₹ 18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link href="/product"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/hoodies/Hoodie5.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-white title-font text-lg font-medium">Moonlight Black</h2>
          <p className="text-cyan-300">₹ 16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link href="/product"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/hoodies/Hoodie6.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-white title-font text-lg font-medium">2-Color Printed</h2>
          <p className="text-cyan-300">₹ 21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link href="/product"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/hoodies/Hoodie7.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-white title-font text-lg font-medium">Modern fame</h2>
          <p className="text-cyan-300">₹ 12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link href="/product"><Image width={200} height={300} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/hoodies/Hoodie8.jpeg"/></Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-white title-font text-lg font-medium">Two way</h2>
          <p className="text-cyan-300">₹ 18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hoodies;
