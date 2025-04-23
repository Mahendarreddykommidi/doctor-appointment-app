import React from 'react'
import Hero from '../components/Hero/Hero'
import Doctorspeciality from '../components/speciality/Doctorspeciality'
import Topdoctors from '../components/Topdoctors/Topdoctors'
import Banner from '../components/Banner/Banner'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Doctorspeciality/>
      <Topdoctors/>
      <Banner/>
      
    
    </div>
  )
}

export default Home