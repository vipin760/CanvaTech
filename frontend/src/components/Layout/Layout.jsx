import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Header from '../Partials/Header/Header'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Service from '../Pages/Service/Service'
import Footer from '../Partials/Footer/Footer'

const Layout = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/service' element={<Service/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default Layout
