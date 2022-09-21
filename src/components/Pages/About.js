import React from 'react';
import '../AboutSection/About.css';
import Showcase from '../AboutSection/Showcase';
import Ceo from '../AboutSection/Ceo';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
    <Showcase/>
    <Ceo/>
    </motion.div>
  )
}

export default About