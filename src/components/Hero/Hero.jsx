import React from 'react'
import { assets } from '../../assets/assets_frontend/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-center md:flex-row justify-center md:items-end  bg-primary px-6 md:px-10 lg:px-20 rounded-lg '>
      
      <div className='md:w-1/2 justify-center flex flex-col items-start gap-4 py-10 m-auto md:py-[10vw] md:mb-[-36px]'>
        <p className='text-white font-semibold text-2xl md:text-3xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br />With trusted doctors</p>
        <div className='flex flex-col md:flex-row items-center justify-center text-sm font-light text-white  gap-4'>
          <img src={assets.group_profiles} alt="" className='w-1/4' />
          <p>Simply browse through our extensive 
            list of trusted doctors,<br />
           schedule your appointment hassle-free.</p>

        </div>
        <a href="#myappointment" className='bg-white flex items-center gap-4 px-4 py-2 rounded-full'>
          Book appointment<img src={assets.arrow_icon}/>
        </a>


      </div>

      <div className='header-image w-1/2 '>
        <img src={assets.header_img} className=' w-full   rounded-lg' alt="" />
        

      </div>


    </div>
  )
}

export default Hero