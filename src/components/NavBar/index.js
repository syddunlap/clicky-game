import React from "react";
import "./style.css";

export function NavBar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
      <a className="navbar-brand" href="/clicky-game/">Clicky Game!</a>
      <span className= {props.text === "success" ? "text-success" : "text-danger"} id="message">{props.message}</span>
      <span className="navbar-text">Score: {props.score} | Top Score: {props.topScore}</span>
    </nav>
  )
}

export default NavBar;