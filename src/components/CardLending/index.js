import React from "react";
import "../CardGrants/style.css";
import {

    Link
  } from "react-router-dom";
import Lending from "../../pictures/lending.PNG";

function CardLending(){
    return(
<div className="col s7">
<Link to="/lending">
  <div className="card">
    <div className="card-content">
      <p className="center-align homepage-cards">Lending</p>
    </div>
    <div className="card-image">
      <img src={Lending}></img>
    </div>
  </div>
</Link>
</div>
    )
}

export default CardLending
