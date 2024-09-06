
const SocialNavigation = () => {
  return (
    <div className="absolute h-screen w-max z-20 ">
        <div className="lg:hidden top-9 absolute left-1  px-6 py-2">
            <div className="flex items-center gap-5 font-body font-extralight uppercase tracking-[5px] text-xs">
                <i>Linkdin</i>
                <i>Github</i>
                <div className="w-12 h-[2px] bg-opacity-80 bg-black"></div>
            </div>
        </div>
        <div className=" hidden lg:block absolute top-[30%]  -rotate-90  -left-28">
        <div className="flex items-center gap-8 font-body font-extralight uppercase tracking-[6px] text-xs">
                <div className="w-20 h-[2px] bg-opacity-80 bg-black"></div>
               <div className="group">
               <i className="cursor-pointer">Linkdin</i>
               <div className="w-0 group-hover:w-full duration-500 bg-black h-[1px] opacity-60 mx-auto"></div>
               </div>
                <div className="group">
                <i className="cursor-pointer ">Github</i>
                <div className="w-0 group-hover:w-full duration-500 bg-black h-[1px] opacity-60 mx-auto "></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SocialNavigation