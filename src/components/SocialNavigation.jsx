import { Link, useLocation } from "react-router-dom"

const SocialNavigation = () => {
  const location = useLocation()
  return (
    <div className="fixed h-screen w-max  z-20">
        <div className={`${ location.pathname === '/' ? "lg:hidden top-9 absolute left-1  px-6 py-2" : "lg:hidden top-9 absolute -left-20  px-6 py-2" }`}>
            <div className="flex items-center gap-5 font-body font-extralight uppercase tracking-[5px] text-xs">
                <div className={` ${ location.pathname !== '/' ? "relative opacity-0" : "group" }`}>
                <div className="w-0 group-hover:w-full duration-500 bg-black h-[1px] opacity-60 mx-auto  "></div>
                <i className="cursor-pointer">Github</i>
                <div className={`${ location.pathname !== '/' ? "w-full h-full  absolute top-0" : "" }`}></div>
                </div>
            <Link className={`group`} to={location.pathname !== "/" && "/" }>
               <div className="w-0 group-hover:w-full duration-500 bg-black h-[1px] opacity-60 mx-auto"></div>
               <i className={`${location.pathname ==='/contact'? 'cursor-pointer text-light': 'cursor-pointer text-dark'}`}>{ location.pathname === "/" ? 'Linkdin': 'Home' }</i>
               </Link>
               <div className={`w-12 h-[2px] bg-opacity-80 ${location.pathname ==='/contact' ? 'bg-light' : 'bg-dark'} `}></div>
            </div>
        </div>
        <div className={`${ location.pathname === '/' ? "hidden lg:flex absolute top-[30%]  -rotate-90  -left-28" : "hidden lg:flex absolute top-[20%]  -rotate-90  -left-28" }`}>
        <div className="flex items-center gap-8 font-body font-extralight uppercase tracking-[6px] text-xs ">
                <div className={`w-24 h-[2px] bg-opacity-80 ${location.pathname ==='/contact' ? 'bg-light' : 'bg-dark'} `}></div>
               <Link className="group" to={location.pathname !== "/" && "/" }>
               <div className={`w-0 group-hover:w-full duration-500 h-[1px] opacity-60 mx-auto ${location.pathname ==='/contact' ? 'bg-light' : 'bg-dark'}`}></div>
               <i className={`${location.pathname ==='/contact'? 'cursor-pointer text-light': 'cursor-pointer text-dark'}`}>{ location.pathname === "/" ? 'Linkdin': 'Home' }</i>
               </Link>
                <div className={` ${ location.pathname !== '/' ? "relative opacity-0" : "group" }`}>
                <div className="w-0 group-hover:w-full duration-500 bg-black h-[1px] opacity-60 mx-auto  "></div>
                <i className="cursor-pointer">Github</i>
                <div className={`${ location.pathname !== '/' ? "w-full h-full  absolute top-0" : "" }`}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SocialNavigation