import React, {useState} from 'react';
import {motion} from "framer-motion";




export const Test = () => {

    const [open, setOpen] = useState(false);
    const variants = {
        visible: (i) => ({
            opacity:1,
            x:100,
            transition:{delay: i * 0.3}
        }),
        hidden:{opacity:0}
    }

    const items = ["item1", "item2", "item3", "item4" ]
  return (
    <div className="course">
        <motion.ul initial="hidden" animate="visible" variants={variants}>
            {
                items.map( (item, i) => <motion.li variants={variants} key={item} custom={i}>item</motion.li>)
            }
            
        </motion.ul>
        {/* <motion.div 
         className="box"
        variants={variants}
        //   initial="hidden" 
        animate={open? "visible" : "hidden"}
          >
            
          </motion.div>
          <button onClick={()=> setOpen(PREV => !PREV)}>Hello</button> */}
    </div>
  )
}
