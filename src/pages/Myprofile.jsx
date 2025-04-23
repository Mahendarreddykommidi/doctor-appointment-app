import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Myprofile = () => {
  const [isEdit,Setisedit]=useState(false)
  const [userData,SetUserdata]=useState({
    name:"Edward vincent",
    image:assets.profile_pic,
    email:"richard32@gmail.com",
    phone:+123456789,
   address:{
       line1: '57th Cross, Richmond',
      line2: 'Circle, Ring Road, London',

   },
   gender:"male",
   Dob:"2025-02-03",

  })
  return (
    <div className='max-w-lg flex flex-col gap-2'>
      <img className='max-w-50' src={userData.image} alt="" />
      { isEdit ?
            <input className='max-w-60 text-3xl bg-gray-50 mt-4' value={userData.name} type="text" onChange={(e =>SetUserdata(prev=>({...prev,name:e.target.value})))} />
            : <p className='font-medium text-3xl text-neutral-300 mt-4'>{userData.name}</p>

      }
      <hr className='bg-zinc-100 h-1px'/>
      <div className=''>
        <p className='text-neutral-500 text-2xl underline mt-3'>Contact information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-3 mt-3 text-neutral-700 '>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit ?
            <input value={userData.phone} type="text" onChange={(e =>SetUserdata(prev=>({...prev,phone:e.target.value})))} />
            : <p>{userData.phone}</p>

          }
          <p>Address:</p>
          {
            isEdit ?
             <p> 
            <input className='bg-gray-50' value={userData.address.line1} type="text" onChange={(e) => SetUserdata(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
             <br />
             <input className='bg-gray-50' value={userData.address.line2} type="text" onChange={(e) => SetUserdata(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
             </p>
            : 
            <p>
              {userData.address.line1}
              {userData.address.line2}
            </p>

          }
        </div>
        <p className='  text-gray-500 my-3'>BASIC INFORMATION :</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit ?
            <select className='' value={userData.gender} onChange={(e)=>SetUserdata(prev=>({...prev,gender:e.target.value}))}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            : <p>{userData.gender}</p>

          }
          <p>Birthday</p>
          {
            isEdit 
            ? <input type="date" value={userData.Dob} onChange={(e)=>SetUserdata(prev=>({...prev,Dob:e.target.value}))}></input> 
            : <p>{userData.Dob}</p>
          }

        </div>
      </div>
      <div className='mt-3'>
        {
          isEdit ?
          <button className='hover:bg-blue-500 hover:text-white py-2 rounded-full px-6 border border-gray-300' onClick={()=>(Setisedit(false))}>Save information</button>
          :<button className='hover:bg-blue-500 hover:text-white  py-2 rounded-full px-6 border border-gray-300' onClick={()=>(Setisedit(true))}>Edit</button>
          
        }

      </div>
    </div>
  )
}

export default Myprofile