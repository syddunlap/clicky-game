import React from "react";
import "./style.css";

export function Card(props) {
  return (
    <div 
      role="img" 
      className="card img-thumbnail m-4" 
      style={{ backgroundImage : `url(${props.url})` }} 
      alt="Character Image" 
      onClick={props.onClick}
    >
    </div>
  );
}

export default Card;