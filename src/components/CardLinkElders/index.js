import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Elders from "../../pictures/elders.jpg";

function CardElders() {
  return (
 
    
<div class="card">
  
  <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src={Elders} alt="elders"></img>
  </div>
  
  <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">Elders<i class="material-icons right">more_vert</i></span>
    <Link to="/elders">Get Started</Link>
  </div>
  
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">Elders<i class="material-icons right">close</i></span>
    <p> Eligible Muckleshoot tribal elders may qualify for new home construction on their property, services include assistance in obtaining permits, leases and other required approvals.</p>
  </div>
  </div>
  );
}

export default CardElders;
