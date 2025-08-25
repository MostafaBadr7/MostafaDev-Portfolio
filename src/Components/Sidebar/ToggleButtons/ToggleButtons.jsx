import React from 'react'
import {motion} from "framer-motion"
export default function ToggleButtons ({setOpen})  {
  return (
    <button className='toggleButton' onClick={()=> setOpen((prev)=>!prev)}>
      <svg viewBox="0 0 23 23" width="23" height="23" >
      <motion.path strokeWidth="3"  stroke="black"  strokeLinecap="round" 
      variants={{closed:{d:"M 2 2.5 L 20 2.5"},
        open:{d:"M 3 3 L 20 20"}
      }}
      />
      <motion.path strokeWidth="3" stroke="black"  strokeLinecap="round" 
      variants={{closed:{d:"M 2 9.5 L 20 9.5",opacity:1},
        open:{opacity:0},
      }} />
      <motion.path strokeWidth="3" stroke="black"  strokeLinecap="round" 
       variants={{closed:{d: "M 2 16.5 L 20 16.5"},
       open:{d: "M 3 20 L 20 3"} }}
      /> 
    </svg>
    </button>
  )
}