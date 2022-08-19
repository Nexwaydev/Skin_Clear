import React from "react"

function ServicesCards(props){

  return(
    <div className="col-md-4">
      <div className="proj-imgbox">
        <img src={props.imgUrl} width={60} height={60} className="img-fluid" alt="img"/>
      </div>
      <div className="proj-txt">
        <h6 className="mt-2">{props.title}</h6>
        <span><p>{props.description}</p></span>
      </div>
    </div>
  )
}

export default ServicesCards