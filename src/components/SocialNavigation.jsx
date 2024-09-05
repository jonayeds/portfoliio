
const SocialNavigation = () => {
  return (
    <div className="absolute h-screen w-screen z-20">
        <div className="lg:hidden top-9 absolute left-1  px-6 py-2">
            <div className="flex items-center gap-5 font-body font-light uppercase tracking-[5px] text-xs">
                <i>Linkdin</i>
                <i>Github</i>
                <div className="w-12 h-[2px] bg-opacity-80 bg-black"></div>
            </div>
        </div>
        <div className=" hidden lg:block absolute top-[50%]  -rotate-90  -left-28">
        <div className="flex items-center gap-8 font-body font-light uppercase tracking-[6px] text-sm">
                <div className="w-20 h-[2px] bg-opacity-80 bg-black"></div>
                <i>Linkdin</i>
                <i>Github</i>
            </div>
        </div>
    </div>
  )
}

export default SocialNavigation