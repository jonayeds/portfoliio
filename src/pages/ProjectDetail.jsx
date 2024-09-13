import { useParams } from "react-router-dom"
import {allProjects}  from "../assets/api/projects" 
import imageA from "../assets/images/travelia/scrnli_11_09_2024_19-38-26.png"
import imageB from "../assets/images/travelia/scrnli_11_09_2024_19-39-52.png"
import imageC from "../assets/images/travelia/scrnli_11_09_2024_19-40-20.png"
import imageD from "../assets/images/travelia/scrnli_11_09_2024_19-40-57.png"
import imageE from "../assets/images/travelia/scrnli_11_09_2024_19-41-34.png"
import imageF from "../assets/images/travelia/scrnli_11_09_2024_19-43-24.png"
import mocup from "../assets/images/projects/Unilink.jpg"
import gsap from "gsap";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { useGSAP } from "@gsap/react"


const ProjectDetail = () => {
    const {name} = useParams()
    const project = allProjects.find(p=> p.name.toLowerCase() === name.toLowerCase())
    const tl = gsap.timeline()
    useGSAP(()=>{
        tl.to(".project-loader",{
            height:"90vh",
            duration:0.8,
            ease:"power2.inOut",
        })

        tl.to(".project-heading",{
            opacity:1,
            duration:0.5,
            letterSpacing:"12px"
        })

        // tl.pause()
    })




  return (
    <div className="lg:px-36 px-4  min-h-screen w-screen ">
          
        <div className="">
       
           <div className="min-h-screen">
           <div className="bg-dark text-light h-0 project-loader rounded-b-lg flex items-end justify-center shadow-md">
                <h1  className="text-[12vw] project-heading opacity-0 text-center font-heading tracking-[30px] uppercase mb-20 lg:mb-0">{project.name}</h1>
            </div>
           </div>

            <div className="my-20   ">
                <h3  className="text-4xl text-body text-dark font-light max-w-[60vw]  mx-auto text-center" >{project.headline}</h3>
                <div className="flex items-center justify-around mt-12 text-body md:text-2xl text-xs font-light">
                    <div className="group">
                    <a href={project.live_link} target="#">Live Demo</a>
                    <div className="h-[2px] group-hover:w-full w-0 duration-500 bg-dark mx-auto"></div>
                    </div>
                    <div className="group">
                    <a href={project.client_code} target="#">Client Side Code</a>
                    <div className="h-[2px] group-hover:w-full w-0 duration-500 bg-dark mx-auto"></div>
                    </div>
                    <div className="group">
                    <a href={project.server_code} target="#">Server Side Code</a>
                    <div className="h-[2px] group-hover:w-full w-0 duration-500 bg-dark mx-auto"></div>
                    </div>
                    
                   
                </div>
                <div>
                    <img src={mocup} alt="" className="lg:w-[45vw] md:w-[60vw]  w-[90vw] mt-24 mx-auto rounded-2xl" />
                    <p className="md:max-w-[80vw] max-w-[90vw] mx-auto mt-12 font-body font-light text-lg opacity-90">{project.sub_description}</p>
                </div>
                




            
                {/* <div className="grid grid-cols-12  grid-rows-12 max-w-[80vw]  mx-auto   gap-4 h-[80vh] relative   ">


                    
                
                    <div  className="col-span-2 row-span-8  overflow-hidden shadow-lg    rounded-2xl cursor-pointer " >
                    <img src={imageE} alt="" className="w-full  ml-auto project-image " onMouseLeave={handleMouseLeave} onMouseMove={handleMouseEnter} />
                    </div>
                    <div className="col-span-8 row-span-4 shadow-lg  rounded-2xl   overflow-hidden flex   " onMouseLeave={handleMouseLeave} onMouseMove={handleMouseEnter}>
                    <img src={imageA} alt="" className="self-start w-full  " />
                    </div>
                    <div className="col-span-2 overflow-hidden rounded-2xl  row-span-8 shadow-lg " onMouseLeave={handleMouseLeave} onMouseMove={handleMouseEnter}>
                    <img src={imageF} alt="" className="w-full " />
                    </div>
                    <div className="col-span-8 shadow-lg  rounded-2xl overflow-hidden row-span-4  flex ">
                    <img src={imageC} alt="" className="w-full self-start" />
                    </div>
                    <div className="col-span-8  rounded-2xl  row-span-4 overflow-hidden shadow-lg ">
                    <img src={imageB} alt=""  className="w-full " />
                    </div>
                    <div className="col-span-4  row-span-4 rounded-2xl overflow-hidden   shadow-lg ">
                    <img src={imageD} alt="" className="w-full"  />
                    </div>
          
                </div> */}

            </div>
        </div>
    </div>
  )
}

export default ProjectDetail