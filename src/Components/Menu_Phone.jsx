import { AssistantDirection } from "@mui/icons-material"
import { motion, useAnimationControls } from "framer-motion"
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';



let ShowMenu ;           
                     





export const Menu_Phone = ({rotate})=>
{

    const controls = useAnimationControls()

    function HideMenu()
    {
        controls.start({
            width:0,
            opacity:0,
            transition:{
                duration:1
            }
        })

        controls.start(
            {
                display:"none",
                transition:{
                    delay:1
                }
            }
        )


    }

    ShowMenu = () => {
        console.log("asdasd")
        controls.start(
            {
                display:"block",
                opacity:1,
                transition:{
                    duration:1
                }
            }
        )

        controls.start({
            width:"100%",
            transition:{
                duration:1
            }
        })
        
        
    }


    return(
        <motion.div className="
        fixed top-0
        bg-slate-800
        w-full
        opacity-0
        hidden
        h-[100%]
        z-[200]
        "
        animate={controls}
        >
        

        <div className="w-full  flex ">
        <button className="ml-auto justify-self-end p-3 bg-sky-300 rounded-xl mt-2 mr-2" onClick={()=>{HideMenu()}}><CloseIcon></CloseIcon></button>
        </div>


        <div className="flex flex-col text-white w-full items-center mt-32 h-full space-y-5">
            <Link to="/GitPage/" className="p-2 border rounded-md px-4 min-w-[200px] text-center" onClick={()=>{HideMenu()}}>Home</Link>
            <Link to="/GitPage/Projects" className="p-2 border rounded-md px-4 min-w-[200px] text-center" onClick={()=>{HideMenu()}}>My Projects</Link>
            <Link to="/GitPage/certificates" className="p-2 border rounded-md px-4 min-w-[200px] text-center" onClick={()=>{HideMenu()}}>Certificates</Link>
            <Link to="/GitPage/ContactMe" className="p-2 border rounded-md px-4 min-w-[200px] text-center" onClick={()=>{HideMenu()}}>Contact Me</Link>

        </div>
        </motion.div>
    )

}


export {ShowMenu} ;