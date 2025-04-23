import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Appcontext } from '../context/Appcontext'


const Doctors = () => {
  const {speciality}=useParams()
  const {doctors} = useContext(Appcontext) || []

  const [filterDoc,setFilterDoc]=useState([])
  const [Showfilter,Setshowfilter]=useState(false)
  const navigate=useNavigate()
  useEffect(()=>{
    if(speciality){
     
      setFilterDoc(doctors.filter(doc=>doc.speciality===speciality))
     
    }
    else{
      setFilterDoc(doctors)
    }
   
 
   
    

  },[doctors,speciality])

  
  
  return (
    <div className='text-gray-600 '>
      <p>Browse through the doctors specialist.</p>
    
      <div className='flex flex-col items-start gap-5 sm:flex-row my-5 space-x-6  '>
        <button onClick= {()=>Setshowfilter(true)}     className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${Showfilter?"bg-blue-500 text-white":""}`}>Show filter</button>
     
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${Showfilter?"flex":"hidden sm:flex"}`}>
   
          <p  onClick={()=>speciality==='General physician' ? navigate(`/doctors` ):navigate(`/doctors/General physician`)} className={`px-10  text-sm py-1.5  w-[94vw] sm:w-auto  border border-gray-300 rounded active:bg-blue-100`}>General physician</p>
          <p onClick={()=> speciality==='Gynecologist' ? navigate(`/doctors` ):navigate(`/doctors/Gynecologist`)}   className={`px-10 py-1.5  w-[94vw] sm:w-auto  border border-gray-300 rounded active:bg-blue-100`}> Gynecologist</p>
          <p onClick={()=> speciality==='Dermatologist' ? navigate(`/doctors` ):navigate(`/doctors/Dermatologist`)}   className={`px-10 py-1.5  w-[94vw] sm:w-auto  border border-gray-300 rounded active:bg-blue-100`}> Dermatologist</p>
          <p onClick={()=> speciality==='Pediatricians' ? navigate(`/doctors` ):navigate(`/doctors/Pediatricians`)}   className={`px-10 py-1.5  w-[94vw] sm:w-auto  border border-gray-300 rounded active:bg-blue-100`}> Pediatrician</p>
          <p onClick={()=> speciality==='Neurologist' ? navigate(`/doctors` ):navigate(`/doctors/Neurologist`)}   className={`px-10 py-1.5  w-[94vw] sm:w-auto  border border-gray-300 rounded active:bg-blue-100`}> Neurologist</p>
          <p onClick={()=> speciality===' Gastroenterologist' ? navigate(`/doctors` ):navigate(`/doctors/Gastroenterologist`)}   className={`px-10 py-1.5  w-[94vw] sm:w-auto  border border-gray-300 rounded active:bg-blue-100`}> Gastroenterologist</p>
          
        

</div>

<div className='w-full grid grid-cols-auto gap-6 space-y-4  ' >               
  {filterDoc.map((item,index) => {
     return(
      <>
    <div key={index} onClick={()=>navigate(`/appointment/${item._id}`) } 
    className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer "
    
    >

    <img src={item.image} alt="" className='bg-blue-50 '/>
    <div className='p-4 '>
                        <div className='flex items-center text-sm text-green-500 gap-2 mx-5 '>     
                        
                            <p className='rounded-full bg-green-500 h-2 w-2 flex items-center '></p>
                            <p>Available</p>

                            </div>
                            <p className='text-center  text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-center text-sm text-gray-900 '>{item.speciality}</p>


     </div>
     </div>
                    

      
      
      
      </>
     )



  })}


    



</div>















</div>
</div>

          


  


  )
}

export default Doctors