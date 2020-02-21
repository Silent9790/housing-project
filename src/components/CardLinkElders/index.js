import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Elders from "../../pictures/elders.png";

function CardElders() {
  return (
 
    
<div className="card" style={{width:"20vw", margin: "0 auto"}}>
  
  <div className="card-image waves-effect waves-block waves-light">
    <img className="activator" src={Elders} alt="elders"></img>
  </div>
  
  <div className="card-content">
    <span className="card-title activator grey-text text-darken-4">Elders<i className="material-icons right">more_vert</i></span>
    <Link to="/elders">Get Started</Link>
  </div>
  
  <div className="card-reveal">
    <span className="card-title grey-text text-darken-4">Elders<i className="material-icons right">close</i></span>
    <p> Eligible Muckleshoot tribal elders may qualify for new home construction on their property, services include assistance in obtaining permits, leases and other required approvals.</p>
  </div>
  </div>
  );
}

export default CardElders;
