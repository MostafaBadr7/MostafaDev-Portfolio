import React, { useRef } from 'react'
import "./Services.scss";
import {motion, useInView} from "framer-motion"

const variants ={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}
export default function Services() {
    const ref = useRef();
    const isInView = useInView(ref, {margin:"-100px"});
  return (
    <motion.div animate={isInView && "animate"} ref={ref} className='services' variants={variants} initial={"initial"} >
        <motion.div variants={variants} className="servicestextContainer">
            <pf>I focus on helping your brand growb <br /> and move forward</pf>
            <hr />
        </motion.div>
        <motion.div variants={variants} className="titleContainer">
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1> <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas </h1>
            </div>
            <div className="title">
                <h1> <motion.b whileHover={{color:"orange"}}>For Your </motion.b>Business. </h1>
                <button>WHAT WE DO ?</button>
            </div>
        </motion.div>
        <motion.div variants={variants} className="listContainer">
            <motion.div variants={variants} whileHover={{backgroundColor:"lightgrey", color:"black"}} className="Box">
                <h2>Frontend Development</h2>
                <p>Modern and responsive UIs with React and advanced CSS.
                    
                </p>
                <button>GO</button>
            </motion.div>
            <motion.div variants={variants} whileHover={{backgroundColor:"lightgrey", color:"black"}} className="Box">
                <h2>Backend Development</h2>
                <p>Scalable server-side solutions using C# and ASP.NET.
                    
                </p>
                <button>GO</button>
            </motion.div>
            <motion.div variants={variants} whileHover={{backgroundColor:"lightgrey", color:"black"}} className="Box">
                <h2>Database Management</h2>
                <p>Efficient queries, design, and optimization with SQL.
                    
                </p>
                <button>GO</button>
            </motion.div>
            <motion.div variants={variants} whileHover={{backgroundColor:"lightgrey", color:"black"}} className="Box">
                <h2>IT Support & Solutions</h2>
                <p>Strong technical background to troubleshoot and optimize systems.
                    
                </p>
                <button>GO</button>
            </motion.div>
            {/* <motion.div variants={variants} whileHover={{backgroundColor:"lightgrey", color:"black"}} className="Box">
                <h2>Multilingual Communication</h2>
                <p>Fluent English and working knowledge of German (A2) for international collaboration.
                    
                </p>
                <button>GO</button>
            </motion.div> */}
        </motion.div>
    </motion.div>
  )
}
