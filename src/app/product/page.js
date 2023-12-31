"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [pin,setpin] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Service, setservice] = useState();
  const checkserivce = async()=>{
    let pins = await fetch('https://codeswear-five.vercel.app/api/pincode')
    let {pincode} = await pins.json();
    let pinJson = pincode;
       console.log(pinJson); 
       
    if(pinJson.includes(pin))
       {setservice(true);
        console.log(Service);
       }

    else
      { setservice(false); 
        console.log(Service);
      } 
  }
  const onchangepin = (e)=>{
    setpin(e.target.value)
  }
  
  return (
    <div>
       <>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <Image width={400} height={600} alt="ecommerce" className="" src="/tshirts/tshirt1.jpeg"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
       
        <p className="leading-relaxed">Embrace the vibrant energy of fabric. Our exclusive artwork is a fusion of nature, creating a visual masterpiece that stands out in any crowd. Whether you are a trendsetter or a fashion enthusiast, this T-shirt is the canvas for your unique expression.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
         
         
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">₹ 2200.00</span>
          <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Add To Cart</button>
        </div>
        <div className='flex mt-5'>
        <input onChange={onchangepin} type="text" name="name" className='border-orange-600  p-2 bg-slate-800'  placeholder='Enter Pincode'/>
      <button onClick={checkserivce} type="submit" className='ml-auto text-white bg-orange-500 border-0  focus:outline-none hover:bg-orange-600 rounded p-3'>Check Pincode</button>
        </div>
        
        {(!Service && Service!=null) && <div className='text-sm text-red-600 mt-1'>
            SORRY! We do no delivered yet
        </div>
        }

        {(Service && Service!=null) &&  <div className='text-sm text-green-600 mt-1'>
            Yes! We delivered here
        </div>
        }

      </div>
    </div>
  </div>
</section>
        </>
    </div>
  )
}

export default page

