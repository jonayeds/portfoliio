import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react"


const Home = () => {
    let tl  = gsap.timeline()
    useGSAP(()=>{
        tl
        .to('.loader', {
            width: 0,
            duration: 2.2,
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
        .to('.text-container',{
          x:-50,
          delay:-0.4,
          duration:1.5,
          ease: "power2.out",

        }, "text")
        .from('.text-animation', {
          width:0,
          marginLeft:15,
          x:-50,
            opacity:0,
            stagger:0.1,
            duration: 1.5,
        }, "text" )
    })
  return (
    <div  className="bg-light min-h-screen relative">

      {/* home loader */}
        <div className=" absolute top-0 w-screen h-screen overflow-hidden z-20">
        <div className="absolute h-[50vh] loading-animation1 w-screen top-0 bg-dark"></div>
        <div className="absolute h-screen  w-screen flex justify-center items-center  ">
          <div className="loader z-50   md:h-[6px] h-[3px] bg-light lg:w-1/3 md:w-2/3  w-3/4 rounded-full "></div>
        </div>
        <div className="absolute loading-animation2 top-[50vh] h-[50vh] w-screen bg-dark"></div>
      </div>

      {/* home content */}
      <div className='h-screen flex justify-center  items-center  '>
        <h1  className='font-heading tracking-widest uppercase text-9xl text-container relative left-[50px] space-x-8'>
          {
            ["Sajjad", "jonayed"].map((text,  index)=>(
              <span key={index}>
                {
                  text.split('').map((char, i)=>(
                    <span key={i} className={`inline-block ${i>0 && 'text-animation '}`}>{char}</span>
                  ))
                }
              </span>
            ))
          }
        </h1>
      </div>
    </div>
  )
}

export default Home