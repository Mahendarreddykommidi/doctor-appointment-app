import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'

const Myappointment = () => {
  const { doctors } = useContext(Appcontext)
  return (
    <div className='pb-3 mt-12 text-zinc-700 font-medium border-b '>
    <p>Myappointments</p>
      <div className='  '>  
           
        {doctors.slice(0, 3).map((item, index) => (
          <div key={index} className='grid grid-cols-2 gap-4 sm:flex py-2 sm:gap-6 border-b'>
            <div>
              <img src={item.image} className='w-32 bg-indigo-50' alt="" />
            </div>
            <div className='flex-1 text-zinc-700'>   
            <p className='font-medium'>{item.name}</p>
            <p>{item.speciality}</p>
            <p className='text-xs mt-2'>Address</p>
            <p className='text-xs'>{item.address.line1}</p>
            <p className='text-xs'>{item.address.line2}</p>
            <p className='text-xs'><span>Date and time</span><span>23 april april 2025 | 2:30pm</span></p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-end '>
              <button className="text-sm border  text-gray-500 hover:text-white transition-all duration-300 hover:bg-blue-500 py-2 sm:min-w-60">Pay online</button>
              <button  className='text-sm border text-gray-500 hover:text-white transition-all duration-300 hover:bg-red-600 py-2 sm:min-w-60'     >Cancel appointment</button>
            </div>
        
    </div>
            
         
        ))}
</div>
       
      </div>
    
  )
}

export default Myappointment