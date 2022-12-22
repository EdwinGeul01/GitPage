import { GitHub, LinkedIn, Mail, Phone, WhatsApp } from '@mui/icons-material'
import React from 'react'

export default function ContactMe() {
  return (
    <div className=' w-full h-[calc(100vh-100px)] mt-3 px-3 py-4 flex flex-col  items-center'>
      <div className='w-[80%] '>
        <h1 className="text-4xl BebasFont mb-10 text-white">CONTACT ME</h1>
        <div className='w-full lg:px-20 border border-double border-[5px] py-10 flex flex-col text-white'>
        <span >
          <p className='mb-10'>
            <Phone/>  <WhatsApp />  +504 3239-2413 <br />
          </p>
          <p className='mb-10'>
          <Mail /> edwingeul01@gmail.com <br />
          </p>
          
        </span>

        <div className='lg:ml-auto space-x-4'>
          <a href="https://www.linkedin.com/in/edwin-salvador-geul-discua-56b666181/">
            <LinkedIn sx={{fontSize:60}} />      
          </a>
          <a href="https://github.com/EdwinGeul01">
            <GitHub sx={{fontSize:60}} />      
          </a>
          </div>
        </div>
      
      </div>
    </div>
  )
}
