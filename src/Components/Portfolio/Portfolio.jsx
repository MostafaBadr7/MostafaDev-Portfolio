import React, { useRef } from 'react';
import "./Portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items=[
    {link:"https://mostafabadr7.github.io/FreeCart-Ecommerce-WebApp-React/#/Home", id:"ShopVista",title:"ShopVista",img:"/Ecommerce.png", desc:" A React e-commerce app is a fast, interactive web application for browsing, managing, and purchasing products online with a seamless user experience."},
    {link:"https://mostafabadr7.github.io/Mealify/",id:"Mealify",title:"Mealify",img:"/Mealify3.png", desc:"An advanced CSS app with light/dark themes using design tokens (CSS custom properties) and color functions (e.g., hsl(), color-mix(), calc()) to swap palettes and update the UI instantly."},
    {link:"https://mostafabadr7.github.io/Games-web-app-JS-OOP-/",id:"GameReviews",title:"GameReviews",img:"/JS-OOP.png", desc:"A JavaScript OOP-based games app featuring multiple pages with unique navigation bars, diverse game styles, and sections to explore game requirements and screen previews."},
    {link:"https://mostafabadr7.github.io/Meals-Recipes-web-app/",id:"MealsRecipesWebApp",title:"CoockingReciepes",img:"/CoockingReciepes.png", desc:"Built a responsive web app using HTML, CSS, Bootstrap, JavaScript, and jQuery, delivering dynamic interactivity and cross-device compatibility. Implemented Regex-based validation to ensure accurate, secure, and user-friendly input handling."},
    {link:"https://mostafabadr7.github.io/Meals-Recipes-web-app/",id:"MealsRecipesWebApp",title:"CoockingReciepes",img:"/CoockingReciepes.png", desc:"Built a responsive web app using HTML, CSS, Bootstrap, JavaScript, and jQuery, delivering dynamic interactivity and cross-device compatibility. Implemented Regex-based validation to ensure accurate, secure, and user-friendly input handling."},
    {link:"https://mostafabadr7.github.io/DevFolio/",id:"PortfolioSkills",title:"PortfolioSkills",img:"/PortfolioSkills.png", desc:"Proficient in building responsive and modern web applications using HTML, CSS, JavaScript, and Bootstrap. Skilled at creating clean designs with smooth interactivity."},
    {link:"https://mostafabadr7.github.io/JSBookmark-webapp/",id:"MyLinksBcookie",title:"MyLinksBcookie",img:"/MyLinksBcookie.png", desc:"Built a Bookmark Web App using JavaScript and Bootstrap with CRUD operations (Add, Update, Delete, Visit) and local storage for data persistence. Designed with responsive UI for easy website management."},
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
                        <img  src={`${import.meta.env.BASE_URL}${item.img}`} alt="project" />
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
