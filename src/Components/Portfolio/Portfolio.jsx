import React, { useRef } from 'react';
import "./Portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items=[
    {link:"https://mostafabadr7.github.io/FreeCart-Ecommerce-WebApp-React/#/Home", id:"ShopVista",title:"ShopVista",img:"/Ecommerce.png", desc:" A React e-commerce app is a fast, interactive web application for browsing, managing, and purchasing products online with a seamless user experience."},
    {link:"https://mostafabadr7.github.io/Mealify/",id:"Mealify",title:"Mealify",img:"/Mealify3.png", desc:"An advanced CSS app with light/dark themes using design tokens (CSS custom properties) and color functions (e.g., hsl(), color-mix(), calc()) to swap palettes and update the UI instantly."},
    {link:"https://mostafabadr7.github.io/Games-web-app-JS-OOP-/",id:"GameReviews",title:"GameReviews",img:"/JS-OOP.png", desc:"A JavaScript OOP-based games app featuring multiple pages with unique navigation bars, diverse game styles, and sections to explore game requirements and screen previews."},
    {link:"https://mostafabadr7.github.io/Meals-Recipes-web-app/",id:"MealsRecipesWebApp",title:"CoockingReciepes",img:"/CoockingReciepes.png", desc:"Built a responsive web app using HTML, CSS, Bootstrap, JavaScript, and jQuery, delivering dynamic interactivity and cross-device compatibility. Implemented Regex-based validation to ensure accurate, secure, and user-friendly input handling."},
    {link:"https://mostafabadr7.github.io/DevFolio/",id:"PortfolioSkills",title:"PortfolioSkills",img:"/PortfolioSkills.png", desc:"Proficient in building responsive and modern web applications using HTML, CSS, JavaScript, and Bootstrap. Skilled at creating clean designs with smooth interactivity."},
    {link:"https://mostafabadr7.github.io/Fokir/",id:"PortfolioSkills2",title:"PortfolioSkills2",img:"/PortFolioSkills2.png", desc:"Developed a responsive portfolio skills section using HTML and CSS, showcasing core competencies with a clean and modern layout. Focused on accessibility, responsive design, and structured presentation."},
    {link:"https://mostafabadr7.github.io/Bootstrap-Portfolio/",id:"PortfolioSkills3",title:"PortfolioSkills3",img:"/PortFolioSkills3.png", desc:"Built an interactive portfolio showcase using advanced Bootstrap components, custom CSS, and JavaScript. Designed responsive layouts with smooth interactions to highlight projects and skills professionally."},
    {link:"https://mostafabadr7.github.io/JSBookmark-webapp/",id:"MyLinksBcookie",title:"MyLinksBcookie",img:"/MyLinksBcookie.png", desc:"Built a Bookmark Web App using JavaScript and Bootstrap with CRUD operations (Add, Update, Delete, Visit) and local storage for data persistence. Designed with responsive UI for easy website management."},
    {link:"https://mostafabadr7.github.io/React-DashBoard/#/Home",id:"ReactDashboard",title:"ReactDashboard",img:"/ReactDashboard.png", desc:"Developed a React dashboard with search and filter functionality to quickly retrieve records by name. Integrated Chart.js to display data in an interactive circular chart for clear and modern visualization."},
    {link:"https://mostafabadr7.github.io/API-Weather-app/Home",id:"weatherApi",title:"weatherApi",img:"/weatherApi.png", desc:"Built a weather web app using JavaScript and OpenWeather API to fetch real-time data. Designed a responsive interface to display temperature, conditions, and location details dynamically."},
    {link:"https://mostafabadr7.github.io/Smart-Login-System/",id:"smartLoginSystem",title:"smartLoginSystem",img:"/smartLoginSystem.png", desc:"Developed a Smart Login System using JavaScript with Regex-based validation for username and password. Integrated pop-up window messages to display error feedback with an attractive, user-friendly design."},
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
