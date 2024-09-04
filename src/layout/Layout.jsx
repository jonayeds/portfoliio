import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Outlet } from "react-router-dom";

const Layout = () => {
    let tl  = gsap.timeline()
    useGSAP(()=>{
        tl
        .to('.loader', {
            width: 0,
            duration: 2.5,
            ease: "power2.inOut",
        })
        .to('.loading-animation1', {
            top: 0,
            height:0,
            duration: 1,
        },"anim")
        .to('.loading-animation2', {
            top: "100vh",
            height:0,
            duration: 1,
        },"anim")
    })
  return (
    <div className="bg-light min-h-screen ">
      <div className=" relative">
        <div className="absolute h-[50vh] loading-animation1 w-screen top-0 bg-dark"></div>
        <div className="absolute h-screen  w-screen flex justify-center items-center  ">
          <div className="loader z-50   md:h-[6px] h-[3px] bg-light lg:w-1/3 md:w-2/3  w-3/4 rounded-full "></div>
        </div>
        <div className="absolute loading-animation2 top-[50vh] h-[50vh] w-screen bg-dark"></div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
