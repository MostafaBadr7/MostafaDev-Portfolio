import "./app.scss";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";
import Hero from "./Components/Hero/Hero";
import Navbar  from "./components/Navbar/Navbar";
import Parallax from "./Components/Parallax/Parallax";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
// import {Test} from "./Test"

const App = () => {
  return <div>
    <Cursor></Cursor>
    <section id="Homepage">
      <Navbar/>
      <Hero></Hero>
    </section>
    <section id="Services"> <Parallax type="services"></Parallax></section>
    <section><Services></Services></section>
    <section id="Portfolio"><Parallax type="portfolio"></Parallax></section>
    <div><Portfolio></Portfolio></div>
    <section id="Contact"> <Contact></Contact></section>
  </div>;
};

export default App;
