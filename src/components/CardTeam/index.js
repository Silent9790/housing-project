import React from "react";
import "./style.css";
import {
  
    Link
  } from "react-router-dom";
import Team from "../../pictures/guy.jpg";

function CardTeam(){
    return(
<div className="col s7">
<Link to="/team">
  <div className="card">
    <div className="card-content">
      <p className="center-align homepage-cards">Team</p>
    </div>
    <div className="card-image">
      <img src={Team}></img>
    </div>
  </div>
</Link>
</div>
    )
}

export default CardTeam
