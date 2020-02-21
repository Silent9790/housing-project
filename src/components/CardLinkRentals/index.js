import React from "react";
import "../CardLinkGrants/style.css";
import {
    Link
  } from "react-router-dom";
import Rentals from "../../pictures/rentals.png";

function CardRentals(){
    return(


<div class="card">
  
  <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src={Rentals} alt="Rentals"></img>
  </div>
  
  <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">Rentals<i class="material-icons right">more_vert</i></span>
    <Link to="/rentals">Get Started</Link>
  </div>
  
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">Rentals<i class="material-icons right">close</i></span>
    <p>The Rental Housing Program provides houses and apartments to eligible tribal members at low-cost, affordable rental fees. Services include access to rental homes, rental apartments, recovery house, senior apartments, and transition housing for persons completing treatment.</p>
  </div>
  </div>
    )
}

export default CardRentals
