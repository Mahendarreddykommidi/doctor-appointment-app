import React from 'react'
import { assets } from '../../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div className='flex rounded-lg   bg-primary px-6 sm:px-10  py-5 md:mx-10  md:px-15 lg:px-12 my-20'>
      <div className=' flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5   '>
        <div className='flex flex-col justify-center gap-5'>
        <p className='text-2xl md:text-3xl lg:text-5xl text-white leading-15'>Book Appointment

With 100+ Trusted Doctors</p>
        </div>
        
   

        
       <div className="button">
       <button className='text-md font-light bg-white my-5 px-5 py-2 rounded-full'>Create acount</button>
       </div>

   
        
      </div>
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative top-12.5 '>
        <img src={assets.appointment_img} alt="" className='w-full absolute top-5 right-0 bottom-5 max-w-md' />
        

      </div>
      
      
     
    


    </div>
  )
}

export default Banner