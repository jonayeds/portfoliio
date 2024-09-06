import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";

const  router = createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/projects",
                element: <Projects/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
        ]
    }
])

export {router}