import React, { useContext, useEffect, useState } from 'react'
import { Appcontext } from '../../context/Appcontext'
import { useNavigate } from 'react-router-dom'

const Relateddoctors = ({docId,speciality}) => {
    const {doctors}=useContext(Appcontext)
    const [reldoc,SetrelDocs]=useState([])
const navigate=useNavigate()
    useEffect(()=>{
      if(doctors.length>0 &&speciality){
        const doctorsData=doctors.filter((doc)=>doc.speciality===speciality &&doc._id !==docId)
        SetrelDocs(doctorsData)
      }
    },[doctors,speciality,docId])
  return (
    <div className='flex flex-col items-center my-16 text-gray-700 md:mx-10'>
          
          
    <p className='my-5 text-3xl font-bold'>Top doctors to Book</p>
    <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
       

<div className=' grid grid-cols-auto w-full gap-4 pt-5 gap-y-6 px-3 sm:px-0 '>
{reldoc.slice(0,5).map((item,index)=>{
      return(
          <>
          <div key={index} onClick={()=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)} } className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer ">
              <img src={item.image} alt="" className='bg-blue-50 '/>
              <div className='p-4 '>
                  <div className='flex items-center text-sm text-green-500 gap-2 mx-5 '>     
                  
                      <p className='rounded-full bg-green-500 h-2 w-2 flex items-center '></p>
                      <p>Available</p>

                      </div>
              
          </div>
          <div>
          <p className='text-center  text-gray-900 text-lg font-medium'>{item.name}</p>
          <p className='text-center text-sm text-gray-900 '>{item.speciality}</p>
          
          </div>


          </div>
          

          
          
          
          </>
      )




  })}
  </div>
  <button onClick={()=>navigate("/Doctors")} className='bg-blue-50 text-gray-600 px-12 py-3 my-8 rounded-full '>more</button>
  </div>
  )
}

export default Relateddoctors