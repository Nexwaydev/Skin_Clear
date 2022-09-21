import React from "react";
import price1 from "../Images/p1.jpg";
import price2 from "../Images/p2.jpg";
import price3 from "../Images/p3.jpg";
import PricesCards from "./PriceCards";

const Prices = () => {
  const prices = [
    {
      id: 1,
      imgUrl: price1,
      time: "The 30",
      timeFrame: "30 minutes",
      timeDescription: "Short on time but need some TLC? This is for you.",
      price: "$65",
    },
    {
      id: 2,
      imgUrl: price2,
      time: "The 45",
      timeFrame: "45 minutes",
      timeDescription: "A little more time to give your skin  exactly what it needs.",
      price: "$95",
    },
    {
      id: 3,
      imgUrl: price3,
      time: "The 60",
      timeFrame: "60 minutes",
      timeDescription: "When you need a little extra, a little more time to give your skin.",
      price: "$125",
    },
   
  ]
  return(
    <div>
      <section className="services" id="services">
      <div className="container py-5">
        <div className="row mt-5 mx-2 g-5">
         {prices.map((project, index)=>{
          return(
            <PricesCards 
                  key={index}
                      {...project}/>
          )
         })}   
        </div>
      </div>
      </section>
    </div>
  )
}
export default Prices
