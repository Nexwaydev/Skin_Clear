import React from "react";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";




function Navbar(){
  return(
    <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <h4 class="text-dark">-Elijah <span className="nav-color">Blessing-</span></h4>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="toggler-icon top-bar"></span>
          <span class="toggler-icon middle-bar"></span>
          <span class="toggler-icon bottom-bar"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 ms-auto mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="/">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/">Contact Me</a>
            </li>
            
          </ul>
          <form class="d-flex ms-1">
           <div>
            <span>
            <img src={linkedin}  alt="linkedin" className="img-fluid"/>
            </span>
            <span>
            <img src={twitter}  alt="twitter" className="img-fluid"/>
            </span>
           </div>
          </form>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Navbar