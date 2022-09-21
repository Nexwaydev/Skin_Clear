import React, { useEffect } from 'react';
import treatment1 from '../Images/treatment1.jpg';
import treatment2 from '../Images/treatment2.jpg';
import treatment3 from '../Images/treatment3.jpg';
import orangeicon2 from '../Images/orangeicon2.jpg'
import Star from './Star';
import Aos from "aos";
import "aos/dist/aos.css"

const Treatment = () => {
  useEffect(() => {
    Aos.init({duration:1000})
  }, []);
  return (
    <>
    <section className='treatment pb-5'>
    <div className="container text-center pt-5">
          <img src={orangeicon2} width={200} height={200} alt="orange-icon" className="img-fluid orange-icon py-4"/>
        </div>
      <div className='container pt-2 pb-5'>
        <div className='text-center mx-1'>
        <p id='treatment' data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">YOUR TREATMENT MAY INCLUDE:</p>
        <p id='treatments'>
          DOUBLE CLEANSE, <img src={treatment1} className='img-fluid images'  alt='treatment'/> ENZYME EXFOLIATION, <br/>
          TREATMENT MASKS, <span  data-aos="fade-zoom-out"  className='treatment-color'> <Star/> DERMAPLANING,</span> EXTRACTIONS <br/>
          <span  data-aos="fade-zoom-out"  className='treatment-color'><Star/> HIGH FREQUENCY, <Star/> PURELIFT TECHNOLOGY,</span>  CRYO GLOBE <br/>
          MASSAGE, <img src={treatment2} className='img-fluid images' alt='treatment'/>SCULPTING FACIAL MASSAGE, FACIAL TENSION RELIEF, <br/>
          ENZYME & EYE TREATMENT, GUA SHA, <span  data-aos="fade-zoom-out"  className='treatment-color'> <Star/> TEXTURED ROLLER,</span> <br/>
          TARGETED SERUMS & <img src={treatment3} className='img-fluid images'  alt='treatment'/>FINISHING PRODUCTS
        </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Treatment