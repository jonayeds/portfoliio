
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SocialNavigation from "../components/SocialNavigation";

const Layout = () => {
   
  return (
    <div className="min-h-screen overflow-x-hidden bg-light ">
      <NavBar/>
     <div className="z-0">
     <SocialNavigation/>
     </div>
     <div className="z-10">
     <Outlet />
     </div>
    </div>
  );
};

export default Layout;
