import React from "react";
import "../CardGrants/style.css";
import {
    Link
  } from "react-router-dom";
import Rentals from "../../pictures/rentals.jpg";

function CardRentals(){
    return(
<div className="col s10">
<Link to="/rentals">
  <div className="card">
    <div className="card-content">
      <p className="center-align homepage-cards">Rentals</p>
    </div>
    <div className="card-image">
      <img src={Rentals}></img>
    </div>
  </div>
</Link>
</div>
    )
}

export default CardRentals
