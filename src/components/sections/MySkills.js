import React from "react";
import html from "../images/html.png"
import css from "../images/css.png"
import javascript from "../images/javascript.png"
import react from "../images/react.png"
import mysql from "../images/mysql.png"
import bootstrap from "../images/bootstrap.png"



function MySkills(){
  return(
    <div>
     <section className="skills">
      <div className="container py-5">

        <div className="pt-5 mx-1">
          <h1>My Skills</h1>
          <p>Here are a few skills I possess</p>
        </div>
      
      <div className="row my-5 g-4 mx-1">
        <div className="col-md-6">
          <div className="skills-flex mb-3">
            <span>
            <img src={html} width={40} height={40} alt="html" className="img-fluid"/>
            </span>
            <span>
            <h5 className="d-inline">HTML</h5> <br/>
           <progress id="file" value="90" max="100"> 32% </progress>
            </span> 
          </div>
          <div className="skills-flex mb-3">
            <span> <img src={css} width={40} height={40} alt="css" className="img-fluid"/></span>
            <span>
            <h5 className="d-inline">CSS</h5> <br/>
            <progress id="file" value="95" max="100"> 32% </progress></span>
         
          
          </div>
          <div className="skills-flex">
            <span><img src={javascript} width={40} height={40} alt="javascript" className="img-fluid"/></span>
            <span>
            <h5 className="d-inline">JAVASCRIPT</h5> <br/>
            <progress id="file" value="70" max="100"> 32% </progress></span>
          </div>
        
        </div>
        <div className="col-md-6">
        <div className="skills-flex mb-3">
          <span> <img src={bootstrap} width={42} height={42} alt="bootstrap" className="img-fluid"/></span>
          <span>
          <h5 className="d-inline">BOOTSTRAP</h5> <br/>
            <progress id="file" value="98" max="100"> 32% </progress></span>
          </div>
          <div className="skills-flex mb-3">
            <span><img src={mysql} width={42} height={42} alt="mysql" className="img-fluid"/></span>
            <span>
            <h5 className="d-inline">MySql</h5> <br/>
            <progress id="file" value="90" max="100"> 32% </progress></span>
          </div>
          <div className="skills-flex">
            <span><img src={react} width={42} height={42} alt="react" className="img-fluid"/></span>
            <span>
            <h5 className="d-inline">REACT</h5> <br/>
            <progress id="file" value="70" max="100"> 32% </progress></span>
          </div>
        </div>
      </div>

      </div>
     </section>
    </div>
  )
}

export default MySkills