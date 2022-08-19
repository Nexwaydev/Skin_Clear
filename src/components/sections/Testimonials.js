import React from "react";
import TestPics from "../images/testimonial.jpg";
import BgBlue from "../images/bgblue.jpg";





function Testimonials(){
  return(
    <div>
    <section className="testimonials">
      <div className="container-fluid mt-5">
        <div className="row mx-1 g-4 d-flex justify-content-center align-items-center">
          <div className="col-md-5">
            <img src={BgBlue} alt="bg-blue" className="img-fluid"/>
          </div>
          <div className="col-md-7">
            <div className="row testimonial g-4">
              <div className="col-6">
                <div>
                <img src={TestPics} width={70} height={70}  className="img-fluid" alt="first"/>
                <h6>Femi Olu</h6>
                <p>Elijah get things done. He's very passionate about
                  what he does and always fun to be with
                </p>
                </div>
                
              </div>
              <div className="col-6">
              <div>
                <img src={TestPics} width={70} height={70}  className="img-fluid" alt="first"/>
                <h6>Femi Olu</h6>
                <p>Elijah get things done. He's very passionate about
                  what he does and always fun to be with
                </p>
                </div>
              </div>
              <div className="col-6">
              <div>
                <img src={TestPics} width={70} height={70}  className="img-fluid" alt="first"/>
                <h6>Femi Olu</h6>
                <p>Elijah get things done. He's very passionate about
                  what he does and always fun to be with
                </p>
                </div>
              </div>
              <div className="col-6">
              <div>
                <img src={TestPics} width={70} height={70}  className="img-fluid" alt="first"/>
                <h6>Femi Olu</h6>
                <p>Elijah get things done. He's very passionate about
                  what he does and always fun to be with
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Testimonials