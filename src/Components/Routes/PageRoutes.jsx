import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../../pages/Home'
import { Projects } from '../../pages/My_Projects'
import Certificates from '../../pages/My_Certificates'
import ContactMe from '../../pages/ContactMe'

  function PageRoutes() {
  return (
    <Routes>
        <Route path='./' element={<Home></Home>} />
        <Route path='./Projects' element={<Projects/>} />
        <Route path='./certificates' element={<Certificates/>} />
        <Route path='./ContactMe' element={<ContactMe/>} />
    </Routes>
    )
}


export default PageRoutes;