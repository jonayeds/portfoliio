import { BsTelephone } from "react-icons/bs"
import { FaLocationArrow } from "react-icons/fa"
import {  MdOutlineMailOutline } from "react-icons/md"

const Contact = () => {
  return (
    <div className=" absolute w-screen min-h-screen bg-dark text-light">
      <div className="max-w-[80vw] min-h-screen flex items-center justify-center mx-auto pt-24 ">
       <div className="flex justify-evenly items-start relative w-full">
       <div className="px-20">
          <h1 className="text-9xl  font-heading text-center">Contact</h1>
          <p className="font-body text-xl opacity-80 tracking-[3px] font-extralight">Fill in the form to start a conversation</p>
          <div className="space-y-4 mt-8 font-body font-extralight opacity-90 tracking-wider">
            <p className="flex items-center gap-4"><FaLocationArrow className="text-sm" />Narayanganj, Dhaka</p>
            <p className="flex items-center gap-4"><BsTelephone className="text-lg"/> +880 1961391186</p>
            <p className="flex items-center gap-4"><MdOutlineMailOutline className="text-lg"/>sajjadjonayed@gmail.com</p>

          </div>
          
        </div>
       
        <div className="border-l-2 h-full pl-10 ml-10 flex-1 ">
          <form className="px-4 ">
            <div>
              <p className="font-body font-light tracking-[1px] text-lg">Full Name</p>
            <input type="text" className="bg-light text-dark px-4 py-2 rounded-lg mt-2 outline-none w-full"  />
            </div>
            <div className="mt-6">
              <p className="font-body font-light tracking-[1px] text-lg">Email</p>
            <input type="email" className="bg-light text-dark px-4 py-2 rounded-lg mt-2 outline-none w-full"  />
            </div>
            <div className="mt-6">
              <p className="font-body font-light tracking-[1px] text-lg">Full Name</p>
            <textarea type="text" className="bg-light text-dark px-4 py-2 rounded-lg mt-2 outline-none w-full  h-24"  />
            </div>
          </form>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Contact