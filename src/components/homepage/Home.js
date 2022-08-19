import React from "react";
import Navbar from "../sections/Navbar";
import Showcase from "../sections/Showcase";
import AboutMe from "../sections/AboutMe";
import MySkills from "../sections/MySkills";
import Services from "../sections/Services";
import Milestones from "../sections/Milestones";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";



function Home(){
  return(
    <div>
    <Navbar/>
    <Showcase/>
    <AboutMe/>
    <MySkills/>
    <Services/>
    <Milestones/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  )
}
export default Home;