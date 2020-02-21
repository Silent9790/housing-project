import React from "react";
import "../CardLinkGrants/style.css";
import {

    Link
  } from "react-router-dom";
import Lending from "../../pictures/lending.PNG";

function CardLending(){
    return(


<div className="card" style={{width:"20vw", margin: "0 auto"}}>
  
  <div className="card-image waves-effect waves-block waves-light">
    <img className="activator" src={Lending} alt="Lending"></img>
  </div>
  
  <div className="card-content">
    <span className="card-title activator grey-text text-darken-4">Lending<i className="material-icons right">more_vert</i></span>
    <Link to="/lending">Get Started</Link>
  </div>
  
  <div className="card-reveal">
    <span className="card-title grey-text text-darken-4">Lending<i className="material-icons right">close</i></span>
    <p>Home Loans up to $567,500 (or appraised value, whichever is less) at 1% interest are available for purchases within a 30-mile radius of the former tribal hall chimney</p>
  </div>
  </div>
    )
}

export default CardLending
