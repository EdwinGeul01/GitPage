import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {NavBar} from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu_Phone } from './Components/Menu_Phone';
import PageRoutes from './Components/Routes/PageRoutes'
import './styles/font-styles.css'

function App() {

  return (
      <BrowserRouter>
          <NavBar></NavBar>
          <Menu_Phone></Menu_Phone>
          <PageRoutes/>
      </BrowserRouter>
  )
}

export default App
