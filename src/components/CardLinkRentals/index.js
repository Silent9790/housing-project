import React from "react";
import "../CardLinkGrants/style.css";
import {
    Link
  } from "react-router-dom";
import Rentals from "../../pictures/rentals.png";

function CardRentals(){
    return(


<div className="card" style={{width:"20vw", margin: "0 auto"}}>
  
  <div className="card-image waves-effect waves-block waves-light">
    <img className="activator" src={Rentals} alt="Rentals"></img>
  </div>
  
  <div className="card-content">
    <span className="card-title activator grey-text text-darken-4">Rentals<i className="material-icons right">more_vert</i></span>
    <Link to="/rentals">Get Started</Link>
  </div>
  
  <div className="card-reveal">
    <span className="card-title grey-text text-darken-4">Rentals<i className="material-icons right">close</i></span>
    <p>The Rental Housing Program provides houses and apartments to eligible tribal members at low-cost, affordable rental fees. Services include access to rental homes, rental apartments, recovery house, senior apartments, and transition housing for persons completing treatment.</p>
  </div>
  </div>
    )
}

export default CardRentals
