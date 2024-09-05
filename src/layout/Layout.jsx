
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SocialNavigation from "../components/SocialNavigation";

const Layout = () => {
   
  return (
    <div className="min-h-screen overflow-x-hidden bg-light ">
      <NavBar/>
      <SocialNavigation/>
      <Outlet />
    </div>
  );
};

export default Layout;
