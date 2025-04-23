import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Appcontext } from '../context/Appcontext'
import { assets } from '../assets/assets_frontend/assets'
import Relateddoctors from '../components/Relateddoctors/Relateddoctors'

const Appointment = () => {
  const { doctors } = useContext(Appcontext)
  const { docId } = useParams()
  const [docInfo, setDocInfo] = useState(null)
  const [docslots,Setdocslosts]=useState([])
  const [slotIndex,setSlotindex]=useState(0)
  const [slotTime,Setslottime]=useState("")

  const daysofweek=["sun","mon","Tue","Wed","Thu","Fri","Sat"]

  const getAvailableslots = async () => {
    Setdocslosts([])
    let today = new Date();
    
    for (let i = 0; i <= 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)
      let endTime = new Date(currentDate)
      endTime.setHours(21, 0, 0)
      
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      
      let timeslots = []
      
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        timeslots.push({
          dateTime: new Date(currentDate),
          time: formattedTime
        })
        
        // Increment by 30 minutes
        currentDate = new Date(currentDate.getTime() + 30 * 60000)
      }
      
      Setdocslosts(prev => ([...prev, timeslots]))
    }
  }

  useEffect(() => {
    getAvailableslots()
  }, [docInfo])

  useEffect(() => {
    console.log(docslots)
  }, [docslots])


  useEffect(() => {
    if (doctors && docId) {
      const foundDoc = doctors.find(doc => doc._id === docId)
      setDocInfo(foundDoc)
      console.log(foundDoc)
    }
  }, [doctors, docId])

  if (!docInfo) {
    return <div>Doctor not found</div>
  }


  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-4 '>  
        <div className='image'>
          <img src={docInfo.image} alt="" className='w-full sm:max-w-80 bg-primary' />

        </div>
        <div className='flex-1 flex-col -mt-[30px] bg-stone-50 sm:my-0 items-center pl-5 py-5 rounded-lg border border-gray-600   '>
          <div className='flex gap-3 '>
          <p className='text-3xl font-semibold text-gray-600'>{docInfo.name}</p>
          <img src={assets.verified_icon} alt="" className='w-4' />
          </div>
          <div className='flex  mt-2 gap-3 items-center'>
            <p className='font-medium'>{docInfo.degree}-{docInfo.speciality}</p>
            <p>{docInfo.experience}</p>
           
          </div>
          <div className='flex items-center gap-2  mt-3'>
            <p>About</p>
            <img src={assets.info_icon} alt="w-2" />

          </div>
          <p className='mt-3 text-sm text-gray-600 w-full  '>{docInfo.about}</p>
          <p className='mt-6'>Appointment fee <span>${docInfo.fees}</span></p>
        </div>
         
        </div>
        <div className="sm:ml-72 pl-4 mt-4 text-gray-700">
          <p>Booking slots</p>
          <div className='flex items-center gap-3 w-full overflow-x-scroll my-5'>
            {
              docslots.length > 0 && docslots.map((item, index) => (
                <div onClick={()=>setSlotindex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index?"bg-primary text-white":"border border-gray-200"}`} key={index}>
                    <p>{item[0] && daysofweek[item[0].dateTime.getDay()]}</p>
                    <p>{item[0] && item[0].dateTime.getDate()}</p>
                </div>
              ))
            }
          </div>
          <div className='flex items-center gap-3 w-full overflow-x-scroll my-5'>
            {
              docslots.length > 0 && docslots[slotIndex].map((item, index) => (
                 <p onClick={()=>Setslottime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full  ${item.time===slotTime?"bg-primary text-white":"text-gray-400 border border-gray-300"}`} key={index}>
                  {item.time.toLowerCase()}

                 </p>
              ))
            }
          </div>
          <button className='bg-primary px-14 py-3 text-sm font-light text-white rounded-full my-2 '>Book an appointment</button>


        </div>

        <Relateddoctors docId={docId} speciality={docInfo.speciality}/>

        
    </div>
  )
}

export default Appointment