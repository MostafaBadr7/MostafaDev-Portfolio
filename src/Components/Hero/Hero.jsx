import React from 'react'
import "./Hero.scss";
import {motion} from "framer-motion";

const textVariants={
    initial:{x:-500,
        opacity:0,
    },
    animate:{x: 0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren: 0.1,

        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
}

const sliderVariants = {
    animate: {
      x: ["0%", "-100%"], 
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, 
          ease: "linear",
        },
      },
    },
  };
export default function Hero() {
  return (
    <div className='Hero'>
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants}
            initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>MOSTAFA BADR</motion.h2>
                <motion.h1 variants={textVariants}>Software Engineer Crafting Web Solutions</motion.h1>
                <div className="buttons" >
                    <motion.button 
                     onClick={() => {document.getElementById("Portfolio").scrollIntoView({ behavior: "smooth" });}} 
                     variants={textVariants} 
                     className='oneButton'>
                        See The Latest Works
                    </motion.button>
                    <motion.button 
                    onClick={() => {document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });}}
                    variants={textVariants} className='oneButton'>Contact Me</motion.button>
                </div>
                <motion.img src={`${import.meta.env.BASE_URL}scroll.png`} alt="scroll" 
                variants={textVariants}
                animate="scrollButton"
                onClick={() => {
                    document.getElementById("Portfolio")?.scrollIntoView({ 
                      behavior: "smooth" 
                    });}}
                />
            </motion.div>
        </div>
        {/* <motion.div className="slidingTextContainer" 
        variants={sliderVariants} 
        initial="initial"
        animate="animate">
            writer content creator and influncer
        </motion.div> */}
        <motion.div className="slidingTextContainer">
        <motion.span
            className="slidingText"
            variants={sliderVariants}
            initial="animate"
            animate="animate"
        >
            Engineer Problem Solver and Influencer 
        </motion.span>
        <motion.span
            className="slidingText"
            variants={sliderVariants}
            initial="animate"
            animate="animate"
        >
            Engineer Problem Solver and Influencer 
        </motion.span>
        </motion.div>
        <div className="imageContainer">
            <img src={`${import.meta.env.BASE_URL}me2.png`} alt="Mostafa Badr" />
        </div>
    </div>
  )
}
