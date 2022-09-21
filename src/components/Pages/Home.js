import React from "react";
import Showcase from "../HomeSection/Showcase";
import Focus from "../HomeSection/Focus";
import Prices from "../HomeSection/Price";
import Facials from "../HomeSection/Facials";
import SubShowcase from "../HomeSection/SubShowcase";
import Products from "../HomeSection/Products";
import Subscribe from "../HomeSection/Subscribe";
import '../HomeSection/Homepage.css';
import { motion } from 'framer-motion';


function Home(){
  return(
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
    <Showcase/>
    <Focus/>
    <Prices/>
    <Facials/>
    <SubShowcase/>
    <Products/>
    <Subscribe/>
   
    </motion.div>
  )
}
export default Home;