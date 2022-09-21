import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import { Routes,  Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/services" element={ <Services/>} />
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes