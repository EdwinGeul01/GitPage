import React, { useState } from 'react'
import ProjectsData from "../resources/projects.json";
import ProjectCard from "../Components/cards/ProjectCard";

export default function SearchBarProject(props) {



    const [valuetoSearch, setvaluetoSearch] = useState("")

    function SearchProjectsByName(name)
    {

        let CardProjectsContent = ProjectsData.map(
            (project,index) => {
              if(project.name.includes(name))
              {
                  return( <ProjectCard name={project.name} pathIMG={project.pathIMG} key={index}  /> );
              }
            }
        
          )

        props.SetProjects(CardProjectsContent);

    }


    function handleChange(e)
    {
        
        setvaluetoSearch(e.target.value);
        SearchProjectsByName(e.target.value);
    }



  return (
    <div className='text-black'>
        <input type="text" placeholder='Search' className='w-full h-[40px] mb-5 rounded-md px-4 outline-none' value={valuetoSearch} onChange={(e)=>{handleChange(e)}}/>
    </div>
  )
}
