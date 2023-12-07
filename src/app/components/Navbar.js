import React from 'react'
import Link from 'next/link'
import { PiShoppingCart } from "react-icons/pi";
const Navbar = () => {
  return (
    <div className='bg-orange-400'>
       <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">Codeswear</Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <Link href="./tshirts" className="mr-5 hover:text-gray-900">Tshirts</Link>
    <Link href="./hoodies" className="mr-5 hover:text-gray-900">Hoodies</Link>
    <Link href="./stickers" className="mr-5 hover:text-gray-900">Sticker</Link>
    </nav>
    <Link href=""><button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><PiShoppingCart />
    </button></Link>
  </div>
</header>
    </div>
  )
}

export default Navbar
