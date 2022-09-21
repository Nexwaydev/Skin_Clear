import React, { useEffect } from 'react';
import about1 from '../Images/about1.jpg';
import about2 from '../Images/about2.jpg';
import about3 from '../Images/about3.jpg';
import { motion } from 'framer-motion';
import Aos from "aos";
import "aos/dist/aos.css"

const Ceo = () => {
  useEffect(() => {
    Aos.init({duration:1000})
  }, []);

  return (
    <>
    <section className='about py-5'>
      <div className='container py-5'>
        <div className='row mt-5 align-items-center justify-content-center mx-2 g-4 text-center'>
        <div className='col-md-4' data-aos="flip-left">
          <motion.div className="card about-card p-4 top-card"
          whileHover={{ scale: 1.1 }}>
          <img  src={about2} alt='ceo' className='bi img-fluid'/>
          <div className="card-body text-white mt-4">
          <h4 className="mt-3">Our Story</h4>
          <p className="mt-2">
          Aliquam non nunc massa. Curabitur convallis pharetra fringilla. Nullam hendrerit semper sem ac facilisis. Sed eu finibus magna. Nulla blandit nec ligula sit amet posuere. Duis ac justo vehicula, rutrum mi non, gravida sapien. Nullam fermentum, ex sit amet aliquam mollis, justo metus accumsan nisi, at ultrices elit metus in arcu.
          </p>
        </div>
        </motion.div>
          </div>
          <div className='col-md-4 middle-card' data-aos="fade-zoom-in" data-aos-delay="300">
          <motion.div className="card about-card p-4"
          whileHover={{ scale: 1.1 }}>
          <img src={about1} alt='ceo' className='bi img-fluid'/>
          <div className="card-body mt-4 text-white">
          <h4 className="mt-3">Our Growth</h4>
          <p className="mt-2">
          Aliquam non nunc massa. Curabitur convallis pharetra fringilla. Nullam hendrerit semper sem ac facilisis. Sed eu finibus magna. Nulla blandit nec ligula sit amet posuere. Duis ac justo vehicula, rutrum mi non, gravida sapien. Nullam fermentum, ex sit amet aliquam mollis, justo metus accumsan nisi, at ultrices elit metus in arcu.
          </p>
        </div>
        </motion.div>
          </div>
          <div className='col-md-4 middle-card' data-aos="flip-right" data-aos-delay="300">
          <motion.div className="card about-card p-4"
          whileHover={{ scale: 1.1 }}>
          <img src={about3} alt='ceo' className='bi img-fluid'/>
          <div className="card-body mt-4 text-white">
          <h4 className="mt-3">Our Founders</h4>
          <p className="mt-2">
          Aliquam non nunc massa. Curabitur convallis pharetra fringilla. Nullam hendrerit semper sem ac facilisis. Sed eu finibus magna. Nulla blandit nec ligula sit amet posuere. Duis ac justo vehicula, rutrum mi non, gravida sapien. Nullam fermentum, ex sit amet aliquam mollis, justo metus accumsan nisi, at ultrices elit metus in arcu.
          </p>
        </div>
        </motion.div>
          </div>
          </div>
      </div>
    </section>
    </>
  )
}

export default Ceo