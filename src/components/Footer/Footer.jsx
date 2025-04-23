import React from 'react'
import { assets } from '../../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className=' md:mx-10 '>
      <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm">
      <div className='flex flex-col items-start   '>
        <img src={assets.logo} alt="" />
        <p className='w-full md:w-2/3 text-gray-700 my-3 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book.</p>

      </div>
      <div className='footer-links space-y-3 text-gray-700'>
        <h2 className='text-xl font-medium mb-5'>COMPANY</h2>
        <p className=''>Home</p> 
        <p className=''> About us</p>
        <p className=''>Delivery</p>
        <p className=''>Privacy policy</p>

      </div>
      <div className=' space-y-2 text-gray-700'>
        <h2 className='text-xl font-medium mb-5'>GET IN TOUCH</h2>
        <p>+0-000-000-000</p>
        <p>greatstackdev@gmail.com</p>

      </div>
      </div>
      <hr />
      <div className="copy-right mb-5 text-center my-2">
        <p className='text-gray-700 font-medium text-sm'>Copyright 2025 @ Greatstack.dev - All Right Reserved.</p>

      </div>

  



    </div>
  )
}

export default Footer