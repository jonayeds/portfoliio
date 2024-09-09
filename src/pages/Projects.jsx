import { useGSAP } from "@gsap/react";
import {gsap} from "gsap"

const Projects = () => {

  const tl = gsap.timeline()
  useGSAP(()=>{
    tl.to('.project-loader', {
      height:0,
      duration:2,
      ease:"power2.inOut"
    })
    tl.from(".heading",{
      y:100,
      duration:0.8,
      delay:-0.8
    })
  })
  return (
    <div className="min-h-screen w-screen bg-light lg:px-24 px-4 md:px-10 flex  items-center justify-centers">
      <div className="absolute top-0 w-screen h-screen lg:-mx-24 bg-dark -mx-4 project-loader z-30">

      </div>
      <div className="w-full text-center lg:text-left h-full flex items-end justify-around flex-col md:flex-row pt-28">
        <div className="mx-auto py-8">
         <div className="overflow-hidden">
         <h1 className="text-7xl font-heading font-[100] tracking-[8px]  uppercase heading">
            Projets
          </h1>
         </div>
          <p className="max-w-xl font-body tracking-[1.2px] mt-4s">
            This is a showcase of my best work in a variety of fields including
            Graphic and Web Design, No-Code Development, Product Design and
            Product Management. The world of digital design and development is
            constantly evolving and so has my role over the last 15 years. I’m
            still learning and gaining new skills every day.
          </p>
        </div>
        <div  className="md:px-10 font-body  uppercase tracking-[2px] md:tracking-[6px] md:text-[6vh] text-[5vh] font-[100] py-10 md:py-0 mx-auto">
          <h1 className=" py-7 border-b-2  border-[#1a1a1a]">UNILINK</h1>
          <h1 className=" py-7 border-b-2 border-[#1a1a1a]">Youshare</h1>
          <h1 className=" py-7 border-b-2 border-[#1a1a1a]">travelia</h1>
          <h1 className=" py-7 border-b-2 border-[#1a1a1a]">backpackers.</h1>

          <h1 className=" py-7 border-b-2 border-[#1a1a1a]">Aultly</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
