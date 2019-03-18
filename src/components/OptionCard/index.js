import React from "react";
import "./style.css";

function OptionCard(props) {
  return (
      <div 
        role="img" 
        aria-label="click item" 
        class="click-item"
        onClick={() => props.removeOption(props.id)} className="remove"
      >
        <img alt={props.name} src={props.image} />
      </div>
  );
}

export default OptionCard;
