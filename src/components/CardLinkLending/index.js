import React from "react";
import "../CardLinkGrants/style.css";
import {

    Link
  } from "react-router-dom";
import Lending from "../../pictures/lending.PNG";

function CardLending(){
    return(


<div class="card">
  
  <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src={Lending} alt="Lending"></img>
  </div>
  
  <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">Lending<i class="material-icons right">more_vert</i></span>
    <Link to="/lending">Get Started</Link>
  </div>
  
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">Lending<i class="material-icons right">close</i></span>
    <p>Home Loans up to $567,500 (or appraised value, whichever is less) at 1% interest are available for purchases within a 30-mile radius of the former tribal hall chimney</p>
  </div>
  </div>
    )
}

export default CardLending
