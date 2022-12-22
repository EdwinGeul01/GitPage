import ProjectsData from "../resources/projects.json";
import { useState } from "react";
import { motion } from "framer-motion"
import ProjectCard from "../Components/cards/ProjectCard";
import SearchBarProject from "../Components/searchBarProject";
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const Projects = () => {





  let CardProjectsContent = ProjectsData.map(
    (project,index) => {
      return( <ProjectCard name={project.name} pathIMG={project.pathIMG} key={index}  /> );
    }


  )



  const [ProjectsCard, setProjectsCard] = useState(
    CardProjectsContent
  )










  return (
    <motion.div
      className="
        flex
        flex-col
        flex-nowrap 
        h-auto  
        pb-10
        w-[80%] ml-[10%]
        mt-10
        rounded-xl
        text-white
        "
    initial={
      { opacity:0}
    }
    animate={{ opacity:1}}
    transition={{duration:0.5}}

    >
      <h1 className="text-4xl BebasFont mb-10">My Projects <DesignServicesIcon  sx={{fontSize:40}} /> </h1>
      <SearchBarProject SetProjects={setProjectsCard} />
      {ProjectsCard}

    </motion.div>
  );
};

export { Projects };
