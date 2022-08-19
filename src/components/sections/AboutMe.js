import React from "react";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";



function AboutMe(){
  return(
    <div>
     <section className="about text-center">
      <div className="container mx-2">
      <h1>About Me</h1>
      <p>
        My name is Elijah Blessing, founder of Nex Way Dev. <br/> 
        I am a solution oriented, passionate and creative Frontend Web Developer <br/> 
        using web technologies to build amazing products and focusing <br/>  on solving problems
        for different niches and different industries <br/>  using the power of technology. 
      </p>
      <div>
            <span>
            <img src={linkedin} alt="linkedin" className="img-fluid"/>
            </span>
            <span>
            <img src={twitter} alt="twitter" className="img-fluid"/>
            </span>
            </div>
      </div>
     </section>
    </div>
  )
}

export default AboutMe