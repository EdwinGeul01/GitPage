import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import { ShowMenu } from './Menu_Phone';
import { Link } from 'react-router-dom';

export const NavBar = ()=>(
    

    <div className="h-20 w-full bg-white xl:w-[50%]  xl:ml-[25%]   opacity-95 flex items-center justify-center 
    px-5 lg:px-0
    rounded-none lg:rounded-lg
    lg:mt-3
    xl:text-[14px] lg:text-[calc(2.2vw-10px)] md:text-[calc(2.8vw-10px)] sm:text-[calc(3vw-10px)] 
     
    ">
            <Link to="/" className='hover:bg-[#1b1d3f] rounded-xl hover:text-white duration-300 p-3 hidden md:block' >Home</Link>
            <Link to="/Projects" className="ml-[10%] hover:bg-[#1b1d3f] rounded-xl hover:text-white duration-300 p-3  hidden md:block ">My Projects</Link>
            <GitHubIcon
            className='md:ml-[10%]'
            sx={{fontSize:'40px'}}
            />
            <Link to='/certificates' className="ml-[10%] hover:bg-[#1b1d3f] rounded-xl hover:text-white duration-300 p-3  hidden md:block">Certificates</Link>

            <a href="/ContactMe" className="ml-[10%] hover:bg-[#1b1d3f] rounded-xl hover:text-white duration-300 p-3 hidden md:block">Contact me</a>

            <button className=' 
            ml-auto
            block md:hidden
            hover:bg-orange-400 p-3 rounded-2xl
            hover:text-white
            duration-200'
            onClick={()=>{ ShowMenu()}}>
                <MenuIcon/>
            </button>
    </div>
    


)




