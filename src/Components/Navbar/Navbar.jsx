import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss"
import {motion} from "framer-motion";

 const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
    <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition  ={{duration :0.5}}
        >
          Mostafa Dev
        </motion.span>
        <div className="social">
        <a href="https://github.com/MostafaBadr7" target="_blank" rel="noopener noreferrer"><img src="/github.png" alt="" /></a>
        <a   href="https://www.linkedin.com/in/mostafa-badr-610b64208/" target="_blank" rel="noopener noreferrer"><img src="/linkedin.png" alt="" /></a> 
        <a href="#"><img src="/youtube.png" alt="" /></a>
        <a href="#"><img src="/dribbble.png" alt="" /></a>
        </div>
    </div>
    </div>
  )
}
export default Navbar;