import React from 'react'
import { Routes,Route ,useLocation} from 'react-router-dom'
import Home from '../../pages/Home'
import { Projects } from '../../pages/My_Projects'
import Certificates from '../../pages/My_Certificates'
import ContactMe from '../../pages/ContactMe'

  function PageRoutes() {
    let Location = useLocation();
   
    return (


    <Routes >
        <Route path='/GitPage/' element={<Home></Home>} />
        <Route path='/GitPage/Projects' element={<Projects/>} />
        <Route path='/GitPage/certificates' element={<Certificates/>} />
        <Route path='/GitPage/ContactMe' element={<ContactMe/>} />
    </Routes>
    )
}


export default PageRoutes;