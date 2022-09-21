import React from "react";
import { motion } from "framer-motion";

function PricesCards(props){

  return(
    <motion.div className="col-md-4" whileHover={{scale:1.1}}>
      <div className="card listing">
        <img src={props.imgUrl} className="img-fluid card-img-top" alt="img"/>
        <div className="card-body">
        <h4 className="mt-3">{props.time}</h4>
        <p className="mt-2">{props.timeFrame}</p>
        <p className="time-description">{props.timeDescription}</p>
        <p className="price">{props.price}</p>
      </div>
      </div>
    </motion.div>
  )
}

export default PricesCards