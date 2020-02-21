import React from "react";
import "./style.css";
import {
  
    Link
  } from "react-router-dom";
import Team from "../../pictures/team.png";

function CardTeam(){
    return(


<div className="card" style={{width:"20vw", margin: "0 auto"}}>
  
  <div className="card-image waves-effect waves-block waves-light">
    <img className="activator" src={Team} alt="Team"></img>
  </div>
  
  <div className="card-content">
    <span className="card-title activator grey-text text-darken-4">Team<i className="material-icons right">more_vert</i></span>
    <Link to="/team">Look At Our Team</Link>
  </div>
  
  <div className="card-reveal">
    <span className="card-title grey-text text-darken-4">Team<i className="material-icons right">close</i></span>
    <p>Take a look at our team!</p>
  </div>
  </div>
    )
}

export default CardTeam
