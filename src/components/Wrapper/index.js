import React from "react";
import "./style.css";

const Wrapper = props => 
  <div className= {props.shake === "true" ? "wrapper shake" : "wrapper"}>{props.children}</div>;

export default Wrapper;