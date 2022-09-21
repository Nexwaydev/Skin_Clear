import React from "react";



const Subscribe = () => {

  return (
    <>
    <section className='main-subscription mb-5'>
      <div className='container pb-4'>
      <div className='row align-items-center justify-content-center g-4 subscription mx-3'>
        <div className='col-md-5 px-4'>
          <h2>Newsletter Subscription</h2>
          <h5>Get promotion, new products and sales updates</h5>
        </div>
  
        <div className='col-md-5 px-3' id="newsletter">
        <div className="input-group">
              <input type="text" className="form-control" placeholder="Enter Email .."/>
              <button className="n_b" type="submit">Subscribe</button>
            </div>
        </div>

      </div>
      </div>
    </section></>
  )
}

export default Subscribe