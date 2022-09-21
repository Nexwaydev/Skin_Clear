import React, { useEffect } from "react";
import Button from "../Inc/Button";
import Aos from "aos";
import "aos/dist/aos.css"


const Focus = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  }, []);
  return(
    <>
    <section className="focus">
      <div className="container pt-5">
        <p  data-aos="fade-zoom-in" className="focus_first_text mx-2 mt-5 mb-3">WE FOCUS ON WHAT'S REALLY <br/> IMPORTANT.
          YOUR CONFIDENCE  <br/>  AND YOUR SKIN HEALTH
        </p>
        <p  data-aos="fade-zoom-in" className="focus_second_text mb-5 mx-2">
        Our first product, the Clear Skin Under Eye Mask, is certified, <br/> cruelty-free, and dermatologist-tested, aligning with our high standards for quality and safety. <br/>
        We think your skin should look and feel refreshed, no matter your lifestyle. Clear Skin was created to take the stress <br/> out of your routine, starting with our Under Eye Masks.
        </p>
        <Button 
              title="SEE HOW IT WORKS"/>
      </div>
    </section>
    </>
  )
}
export default Focus