import React, { useState }  from "react";
import './constant.css';
import Button from "../Inc/Button";
import { Link } from "react-router-dom";
import logo from '../Images/logo.png';




const Navbar = () => {

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if(window.scrollY >= 90){
      setColor(true)
    } else setColor(false)
  }

  window.addEventListener('scroll', changeColor)


  return(
    <>
    <section className="my_navbar">
    <nav className={color ? "nav-bg navbar navbar-expand-lg fixed-top navbar-light" : "my_nav navbar navbar-expand-lg fixed-top navbar-dark"} >
      <div className="container">
        <span className="navbar-brand ">
          <img src={logo} className="img-fluid" alt="logo"/>
        </span>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 ms-auto mb-lg-0">
            <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/about" className="nav-link active">  About</Link>
            </li>
            <li className="nav-item">
            <Link to="/services" className="nav-link active">Services</Link>
            </li>
            <li className="nav-item">
            <Button
              title="BOOK AN APPOINTMENT"/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </section>
    </>
  )
}

export default Navbar