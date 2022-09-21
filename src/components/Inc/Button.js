import React from "react";

function Button(props){
  return(
    <div>
      <button className="bt bt4">{props.title}</button>
    </div>
  )
}

export default Button