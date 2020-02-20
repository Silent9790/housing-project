import React from "react";
import "./style.css";
import {
  
    Link
  } from "react-router-dom";
import Team from "../../pictures/guy.jpg";

function CardTeam(){
    return(


<div class="card">
  
  <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src={Team} alt="Team"></img>
  </div>
  
  <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">Team<i class="material-icons right">more_vert</i></span>
    <Link to="/team">Look At Our Team</Link>
  </div>
  
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">Team<i class="material-icons right">close</i></span>
    <p>Take a look at our team!</p>
  </div>
  </div>
    )
}

export default CardTeam
