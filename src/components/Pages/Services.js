import React from 'react';
import Showcase from '../ServicesSection/Showcase';
import FaceWorkOut from '../ServicesSection/FaceWorkOut';
import Pigmentation from '../ServicesSection/Pigmentation';
import Treatment from '../ServicesSection/Treatment';
import '../ServicesSection/Services.css';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
    <Showcase/>
    <FaceWorkOut/>
    <Pigmentation/>
    <Treatment/>
    </motion.div>
  )
}

export default Services