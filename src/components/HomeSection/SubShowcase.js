import React, { useEffect } from "react";
import sub_show_bg from "../Images/subshowbg.jpg";
import Aos from "aos";
import "aos/dist/aos.css"





const SubShowcase = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  }, []);

  return(
    <div className="sub_images">
      <section className="sub_showcase mt-5">
      
      </section>
      <section>
        <div className="container">
          <div className="row sub_showcase_overlap align-items-center justify-content-center">
            <div className="col-2"></div>
            <div className="col-7">
              <img  data-aos="flip-left" src={sub_show_bg} alt="sub_show" className="img-fluid"/>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div className="container pb-5 sub_content">
          <div className="row text-center mx-2">
            <p className="my-4">POP IN! <br/> WE'D LOVE TO SAY HI</p>
            <p className="location">OUR LOCATIONS</p>
            <p>
              100 E. ALIQUAM <br/> SUIT 132 CURABITUR , <br/> NULLAM HENDRERIT
            </p>
            <div className="direction mx-auto">
            <p>GET DIRECTION</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default SubShowcase