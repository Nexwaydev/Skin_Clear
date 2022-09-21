import React, { useEffect, useState } from "react";
import orange1 from "../Images/orange1.png";
import orange2 from "../Images/orange2.png";
import orange3 from "../Images/orange3.png";
import orange4 from "../Images/orange4.png";
import face2 from "../Images/face2.jpg";
import face22 from "../Images/face22.jpg";
import orangeicon from "../Images/orangeicon.jpg";
import Aos from "aos";
import "aos/dist/aos.css"



const Facials = () => {

useEffect(() => {
    Aos.init({duration:2000})
  }, []);


const [offsetY, setOffsetY] = useState(0);
const handleScroll = () => setOffsetY(window.pageYOffset);

useEffect(()=> {
  window.addEventListener("scroll", handleScroll);
  return ()=> window.removeEventListener("scroll", handleScroll);
}, []);


  return(
    <>
      <section className="facials pb-4">
      <div className="container text-center">
          <img src={orangeicon} width={200} height={200} alt="orange-icon" className="img-fluid orange-icon py-4"/>
        </div>
        <img src={orange1} width={230} height={230} style={{transform: `translateY(${offsetY * 0.1}px)`}} className="img-fluid orange1 " alt="orange"/>
        <img src={orange2} width={100} height={100} style={{transform: `translateY(${offsetY * 0.1}px)`}}  className="img-fluid orange2" alt="orange"/>
        <img src={orange3} width={300} height={300} style={{transform: `translateY(${offsetY * 0.3}px)`}}  className="img-fluid orange3" alt="orange"/>
        <img src={orange4} width={120} height={120} style={{transform: `translateY(${offsetY * 0.2}px)`}}  className="img-fluid orange4" alt="orange"/>
        <div className="container py-5">
          <div className="text-center mx-2">
            <p data-aos="fade-up"  data-aos-offset="0">FACIALS + FACE WORKOUTS.</p>
          </div>
          <div className="row align-items-center justify-content-center g-4 mx-2 mt-3 images">
            <div  className="col-md-4">
              <img data-aos="fade-up-right" src={face2} alt="face1" className="img-fluid"/>
            </div>
            <div className="col-md-4">
            <img data-aos="fade-up-left" src={face22} alt="face2" className="img-fluid"/>
            </div>
          </div>
        </div>

        
        
      </section>
    </>
  )
}
export default Facials