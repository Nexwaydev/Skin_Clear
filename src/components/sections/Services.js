import React from "react";
import  One from "../images/one.png";
import Two from "../images/two.png";
import Three from "../images/three.png";
import Four from "../images/four.png";
import Five from "../images/five.png";
import Six from "../images/six.png";
import Seven from "../images/seven.png";
import Eight from "../images/eight.png";
import ServicesCards from "./ServicesCards";

function Services(){
  const projects = [
    {
      title: "Training",
      description: "Lorem ipsum dolor sit amet, consectetur ipsum dolor",
      imgUrl: One,
    },
    {
      title: "It Consulting",
      description: "Lorem ipsum dolor sit amet ipsum dolor sit amet, consectetur ipsum dolor sit amet, ipsum dolot",
      imgUrl: Two,
    },
    {
      title: "Responsive Web design",
      description: "Lorem ipsum dolor psum dolor sit amet, consectetur ipsum dolor sit amet sit amet ipsum dolor sit amet, consectetur ipsum dolor sit amet, ipsum dolot",
      imgUrl: Three,
    },
    {
      title: "Database Development",
      description: "psum dolor sit amet, consectetur ipsum dolor sit amet  dolor sit amet, consectetur ip",
      imgUrl: Four,
    },
    {
      title: "Customer Software Development",
      description: "Design dolor sit amet, consectetur ip  dolor s  dolor sit amet, consectetur ipit amet, consectetur ipt",
      imgUrl: One,
    },
    {
      title: "Software Testing",
      description: " dolor sit amet, consectetur ip  dolor sit am  dolor sit amet, consectetur ipet, consectetur ip",
      imgUrl: Five,
    },
    {
      title: "Sass Development",
      description: " Lorem ipsum dolor psum dolor sit amet, consectetur ipsum dolor sit amet sit amet ips  dolor sit amet, consectetur ip",
      imgUrl: Six,
    },
    {
      title: "Technical Writing",
      description: "Lorem ipsum dolo Lorem ipsum dolor psum dolor sit amet, consectetur ipsum dolor sit amet sit amet ipsr psum dolor sit amet, consectetur ipsum dolor sit amet sit a",
      imgUrl: Seven,
    },
    {
      title: "Web Development",
      description: " Lorem ipsum dolor psum dolor sit amet, consectetur Lorem ipsum dolor psum dolor sit amet, consectetur ipsuipsum dolor sit amet sit amet ips",
      imgUrl: Eight,
    },
  ]
  return(
    <div>
      <section className="services">
      <div className="container py-5">
        <di className="row pt-4 mx-1 ">
          <div className="col">
            <h1>Services I Render</h1>
            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor incididunt ut</p>

          </div>
        </di>
        <div className="row mt-4 mx-2">
         {projects.map((project)=>{
          return(
            <ServicesCards 
                           {...project}/>
          )
         })}   
        </div>
      </div>
      </section>
    </div>
  )
}
export default Services
