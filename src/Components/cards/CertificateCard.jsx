import React from 'react'

export default function CertificateCard(props) {
  return (
    <div className="w-full bg-[#383a7d] px-4 py-2 flex items-center mb-4 ">
      <div className='w-[80%]'>
          {props.name}
      </div>
    <a
      href={props.link}
      className="text-orange-400 border p-2 border-orange-400 rounded-md ml-auto 
    hover:border-cyan-300
    hover:text-cyan-300
    duration-200 hover:duration-200"
    >
      View Credential
    </a>
  </div >
  )
}
