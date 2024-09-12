import { useParams } from "react-router-dom"
import {allProjects}  from "../assets/api/projects" 
import imageA from "../assets/images/travelia/scrnli_11_09_2024_19-38-26.png"
import imageB from "../assets/images/travelia/scrnli_11_09_2024_19-39-52.png"
import imageC from "../assets/images/travelia/scrnli_11_09_2024_19-40-20.png"
import imageD from "../assets/images/travelia/scrnli_11_09_2024_19-40-57.png"
import imageE from "../assets/images/travelia/scrnli_11_09_2024_19-41-34.png"
import imageF from "../assets/images/travelia/scrnli_11_09_2024_19-43-24.png"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'


const ProjectDetail = () => {
    const {name} = useParams()
    const project = allProjects.find(p=> p.name.toLowerCase() === name.toLowerCase())

  return (
    <div className="lg:px-32 px-4 pt-24 min-h-screen w-screen ">
        
        <div className="">
            <h1  className="text-7xl text-center font-heading tracking-[6px] uppercase">{project.name}</h1>
            <div className="">
                <div className="grid grid-cols-6  grid-rows-[repeat(6, minmax(0, 1fr))] max-w-[80vw]  mx-auto   gap-4 h-[80vh] ">
                    <div  className="col-span-1 row-span-4 overflow-hidden  border  ">
                    <img src={imageE} alt="" className="w-full  ml-auto  " />
                    </div>
                    <div className="col-span-4 row-span-2 border  overflow-hidden flex   ">
                    <img src={imageA} alt="" className="self-start w-full " />
                    </div>
                    <div className="col-span-1 overflow-hidden border row-span-4 ">
                    <img src={imageF} alt="" className="w-full " />
                    </div>
                    <div className="col-span-4 overflow-hidden row-span-2 border flex ">
                    <img src={imageC} alt="" className="w-full self-start" />
                    </div>
                    <div className="col-span-4 border row-span-2 overflow-hidden">
                    <img src={imageB} alt=""  className="w-full " />
                    </div>
                    <div className="col-span-2  row-span-2 overflow-hidden  border">
                    <img src={imageD} alt="" className="w-full"  />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetail