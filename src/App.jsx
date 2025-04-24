
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Myappointment from './pages/Myappointment'
import Myprofile from './pages/Myprofile'
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer"
import Appointment from './pages/Appointment'

function App() { 


  return (
    <>
    <BrowserRouter>
      <div className='mx-4 overflow-hidden sm:mx-[10%]'>
        <Navbar/>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/doctors/:speciality" element={<Doctors/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/appointment' element={<Appointment/>}/>
          <Route path='/my-appointment'  element={<Myappointment/>}/>
  
          <Route path='/appointment/:docId' element={<Appointment/>}/>
          <Route path='/my-profile' element={<Myprofile/>}/>
        </Routes>
        <Footer/>
        
      </div>
    </BrowserRouter>




  
      
    </>
  )
}

export default App
