import React from "react";
import AllSocial from "../images/allsocial.png";







function Footer(){
  return(
    <div>
    <section className="footer">
      <div className="container">
        <div className="text-center">
          <h2 className="pt-4">Elijah Blessing</h2>
          <img src={AllSocial} width={180} height={180} alt="all" className="img-fluid"/>
          <p>Copyright &copy; 2022 | All rights Reserved</p>

        </div>
      </div>
    </section>
    </div>
  )
}

export default Footer