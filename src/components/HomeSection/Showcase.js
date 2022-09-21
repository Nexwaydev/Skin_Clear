import React from "react";
import showImg from "../Images/showcase.mp4"



const Showcase = () => {
  return(
    <>
    <section className="main">
    <div className="overlay"></div>
      <video autoPlay loop muted>
        <source src={showImg} type="video/mp4" />
      </video>
      <div className="content">
        <span>
        <p>CUSTOMIZED <br/> SKINCARE</p>
        </span>
        <span>
        <p>FOR ALL</p>
        </span>
      </div>
    
    </section>
    </>
  )
}
export default Showcase