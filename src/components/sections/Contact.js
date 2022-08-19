import React from "react";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import message from "../images/message.png";
import phone from "../images/phone.png"



function Contact(){
  return(
    <div>
     <section className="contact">
      <div className="container-fluid">
        <div className="row g-3 pt-5 ">
          <div className="col-md-6 contact-padding ">
          <h1>Get In Touch</h1>
          <p>Lroe sgfs wskhw frdrws hwsgst sjwtc wfs hwcfcz <br/>
           cyhge bhue euhue ehued ejhuefgtyfwsz </p>
           <img src={linkedin} alt="linkedin" className="img-fluid"/>
           <img src={twitter} alt="twitter" className="img-fluid"/>
           <h6 className="d-inline">-Nex-Boy-</h6>
           <div className="skills-flex mt-4">
            <span>
            <img src={message} alt="message" className="img-fluid"/>
            </span>
            <span>
            <h6>nexwaydev@gmail.com</h6>
            <p>Send a message anytime!</p>
            </span>
           </div>
           <div className="skills-flex">
            <span>
            <img src={phone} alt="phone" className="img-fluid"/>
            </span>
            <span>
            <h6>+2349034070265</h6>
            <p>Send a message anytime!</p>
            </span>
           </div>
          </div>
          <div className="col-md-6 test-bg text-white contact-padding py-5 ">
            <h3>Need a Service?</h3>
            <h1>Send A Message</h1>
            <fieldset>
              <form>
                 <input
                  type="text"
                  placeholder="Name"
                  name="name"
              
                />

                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  
                />

                <textarea
                  name="message"
                  placeholder="Message"
                 
                ></textarea>
              

                <button>Send Message</button>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
      
     </section>
    </div>
  )
}

export default Contact