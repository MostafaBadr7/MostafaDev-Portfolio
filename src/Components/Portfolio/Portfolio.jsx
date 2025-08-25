import React, { useRef } from 'react';
import "./Portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items=[
    {link:"https://mostafabadr7.github.io/FreeCart-Ecommerce-WebApp-React/#/Home", id:"ShopVista",title:"ShopVista",img:"/Ecommerce.png", desc:" A React e-commerce app is a fast, interactive web application for browsing, managing, and purchasing products online with a seamless user experience."},
    {link:"https://mostafabadr7.github.io/Mealify/",id:"Mealify",title:"Mealify",img:"/Mealify3.png", desc:"An advanced CSS app with light/dark themes using design tokens (CSS custom properties) and color functions (e.g., hsl(), color-mix(), calc()) to swap palettes and update the UI instantly."},
    {link:"https://mostafabadr7.github.io/Games-web-app-JS-OOP-/",id:"GameReviews",title:"GameReviews",img:"/JS-OOP.png", desc:"A JavaScript OOP-based games app featuring multiple pages with unique navigation bars, diverse game styles, and sections to explore game requirements and screen previews."}
]

function openDemo(link) {
    window.open(link, "_blank", "noopener,noreferrer");
  }

const Single = ({item}) =>{
    
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref});
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return(
        <section >
            <div className="container">
                <div className="wrapper"> 
                    <div ref={ref} className="imageContainer">  
                        <img  src={item.img} alt="project" />
                    </div>
                    <motion.div style={{y}} className="textContainer">
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                       
                        <button onClick={()=> openDemo(item.link)}> see Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};
export default function Portfolio() {

    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref, offset:["end end", "start start"]});
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <div ref={ref} className='portfolio'>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map( item =>( <Single id={item.id} item={item} key={item.id} />) )}
    </div>
  )
}
