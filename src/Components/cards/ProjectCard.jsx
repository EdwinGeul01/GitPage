import React from 'react'



export default function ProjectCard(props) {
  
  
  return (
    <a href='#' className='w-full h-full'>
    <div className='w-full h-32 bg-[#233049] mb-8 
                    relative flex items-end justify-end 
                    text-[calc(6vw-12px)] md:text-[calc(3vw-12px)]
                    cardproject'>
        <p className=' font-bold KionaFont z-10'>  
        {props.name}
        </p>
    <img src={props.pathIMG} className="opacity-20 absolute top-0 w-full h-full lg:w-[30%] left-[0] "/>
    <div className=" absolute top-0 w-full h-full left-[0] bg-gradient-to-r from-transparent to-[#191c4a] "/>

    </div>
  </a>
  )
}
