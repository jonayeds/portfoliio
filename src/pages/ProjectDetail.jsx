import {  useParams } from "react-router-dom";
import { allProjects } from "../assets/api/projects";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useGSAP } from "@gsap/react";
import { TiLocationArrow } from "react-icons/ti";

const ProjectDetail = () => {
  const { name } = useParams();
  const project = allProjects.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );
  const tl = gsap.timeline();
  const tech = gsap.timeline();
  useGSAP(() => {
    tl.to(".project-loader", {
      height: "90vh",
      duration: 0.8,
      ease: "power2.inOut",
    });

    tl.to(".project-heading", {
      opacity: 1,
      duration: 0.5,
      letterSpacing: "12px",
    });
    tech.to(".tech",{
        x:"-100%",
        duration:10,
        ease: "none",
    }).repeat(-1)

    // tl.pause()
  });

  return (
    <div className="lg:px-36 px-4  min-h-screen w-screen ">
      <div className="">
        <div className="min-h-screen">
          <div className="bg-dark text-light h-0 project-loader rounded-b-lg flex items-end justify-center shadow-md">
            <h1 className="text-[12vw] project-heading opacity-0 text-center font-heading tracking-[30px] uppercase mb-20 lg:mb-0">
              {project.name}
            </h1>
          </div>
        </div>

        <div className="my-20   ">
          <h3 className="md:text-4xl sm:text-2xl text-xl font-body text-dark font-extralight max-w-[80vw]  mx-auto text-center">
            {project.headline}
          </h3>
          <div className="flex items-center justify-around mt-12 font-body md:text-2xl text-xs font-light" style={{
            wordSpacing:"1px"
          }}>
            <div className={`group ${project.name === "YouShare" && 'hidden'}`}>
              <a
                href={project.live_link}
                className="flex items-center cursor-pointer"
                target="#"
              >
                Live Demo <TiLocationArrow className="group-hover:bottom-1 bottom-0 left-0 group-hover:left-1 relative duration-300 " />
              </a>
              <div className="h-[2px] group-hover:w-full w-0 duration-500 bg-dark mx-auto"></div>
            </div>
            <div className={`group ${project.name === "YouShare" && 'hidden'}`}>
              <a
                href={project.client_code}
                className="flex items-center "
                target="#"
              >
                Client Side Code <TiLocationArrow className="group-hover:bottom-1 bottom-0 left-0 group-hover:left-1 relative duration-300 " />
              </a>
              <div className="h-[2px] group-hover:w-full w-0 duration-500 bg-dark mx-auto"></div>
            </div>
            <div className="group">
              <a
                href={project.server_code}
                className="flex items-center "
                target="#"
              >
                Server Side Code <TiLocationArrow  className="group-hover:bottom-1 bottom-0 left-0 group-hover:left-1 relative duration-300 " />
              </a>
              <div className="h-[2px] group-hover:w-full w-0 duration-500 bg-dark mx-auto"></div>
            </div>
          </div>
          <div>
            <img
              src={project.photo}
              alt=""
              className="lg:w-[45vw] md:w-[60vw]  w-[90vw] mt-24 mx-auto rounded-2xl"
            />
            <p className="md:max-w-[80vw] max-w-[90vw] mx-auto mt-12 font-body font-light text-lg opacity-90">
              {project.sub_description}
            </p>
          </div>
          <div className="mt-12">
            <h2 className="font-body tracking-[4px] md:text-4xl sm:text-2xl text-xl font-[100] text-center uppercase ">
              key characteristics and features
            </h2>
            <div  className="mt-6">
              {project.key_features.map((feature, idx) => (
                <div
                  className="font-body flex  items-center justify-center gap-4 text-center font-light  text-lg mt-4 group relative "
                  key={idx}
                >
                  <div className="w-12 h-[2px]  hidden lg:block ">
                    <div className="bg-dark group-hover:w-full w-0 duration-500 h-full mx-auto"></div>
                  </div>
                  <p><TiLocationArrow className="inline-block rotate-45 mr-2 lg:hidden"/>{feature}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-dark font-body font-light text-lg">
                <p>{project.description}</p>
            </div>
            <div className={project.name !== 'YouShare' && "hidden"}>
              <img src="https://res.cloudinary.com/dtqsckwk9/image/upload/v1726392685/apis_valylk.jpg" className="lg:w-[60vw] w-full  rounded-3xl mx-auto" alt="" />
                
            </div>
            <div className="mt-12">
            <h2 className="font-body tracking-[4px] md:text-4xl sm:text-2xl text-xl font-[100] text-center uppercase ">
              Technologies used
            </h2>
            <div className="max-w-7xl mx-auto  overflow-hidden    mt-10 tech-container cursor-default space-x-16 text-dark whitespace-nowrap " onMouseEnter={()=>tech.pause()} onMouseLeave={()=>tech.play()}>
            <div className=" tech  space-x-8 inline-block">
                {
                    project.technologies.map((tech,idx)=>(
                        <p key={idx} className="text-dark font-body inline-block text-center font-light text-xl uppercase ">{tech}</p>
                    ))
                }
            </div>
            <div className=" tech inline-block space-x-8">
                {
                    project.technologies.map((tech,idx)=>(
                        <p key={idx} className="text-dark font-body inline-block font-light text-center text-xl uppercase">{tech}</p>
                    ))
                }
            </div>
            </div>
            </div>
            <div className={project.name !== 'YouShare' && "hidden"}>
              <div className="flex flex-col justify-center items-center gap-12 mt-24 ">
                <img src="https://res.cloudinary.com/dtqsckwk9/image/upload/v1726391051/share4_rofnhm.png" className="lg:w-[75vw] w-full  rounded-3xl" alt="" />
                <img src="https://res.cloudinary.com/dtqsckwk9/image/upload/v1726391053/share1_rnfdqu.png" alt="" className="lg:w-[75vw] w-full rounded-3xl" />
              </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
