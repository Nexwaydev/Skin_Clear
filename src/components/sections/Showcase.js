import React from "react";
import mypicture from "../images/mypicture.jpg"
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";


function Showcase(){
  return(
    <div>
     <section class="showcase">
      <div class="container">
        <div
          class="row d-flex justify-content-center align-items-center mx-2 g-4 text-dark mt-2"
        >
          <div class="col-md-5">
            <p>HI THERE</p>
            <h4>I Am Elijah Blessing</h4>
            <h1>A Top-notch Developer, <br/>
                Writer and Mentor.</h1>
            <div>
            <span>
            <img src={linkedin} alt="linkedin" className="img-fluid"/>
            </span>
            <span>
            <img src={twitter} alt="twitter" className="img-fluid"/>
            </span>
            </div>
          </div>

          <div class="col-md-5 show">
            <img src={mypicture} alt="mypicture" className="img-fluid"/>
          </div>
        </div>
        <div
          class="row justify-content-end align-items-center mx-3 mt-5 text-white"
        ></div>

      
      </div>
    </section>
    </div>
  )
}

export default Showcase