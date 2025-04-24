import React from 'react'
import {specialityData} from "../../assets/assets_frontend/assets"
import { Link } from 'react-router-dom'

const Doctorspeciality = () => {
  return (
    <div>
        <div className='flex flex-col items-center my-20'>
          
            <p className='my-5 text-3xl font-bold'>Find doctors by speciality</p>
            <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
               





        </div>
        <div className='flex flex-col items-center justify-center gap-5 px-10' >  
            <div className='flex w-full overflow-x-scroll sm:justify-center  pt-14 gap-6'>   
        {specialityData.map((item,index)=>{
            return(
                <div key={index} >
                    <Link onClick={()=>scrollTo(0,0)} to={`/doctors/${item.speciality}`} className='flex flex-col items-center text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='w-16 sm:w-24' src={item.image} alt="" />
                    <p>{item.speciality}</p>
                
                    </Link>


                </div>
            )
        })}
        </div>
</div>

    </div>
  )
}

export default Doctorspeciality