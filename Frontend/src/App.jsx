import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import MyAppoiments from './pages/MyAppoiments'
import Appoiment from './pages/Appoiment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Register'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/doctors' element={<Doctor />} />
        <Route path='/doctors/:speciality' element={<Doctor />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/myappoiment' element={<MyAppoiments />} />
        <Route path='/appoiment/:docId' element={<Appoiment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App