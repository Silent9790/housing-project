import React from "react";
import "../CardGrants/style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function CardGrants(){
    return(
<div className="col s6 card">
<Link to="/grants">
  <div className="card">
    <div className="card-content">
      <p className="center-align homepage-cards">Grants</p>
    </div>
    <div className="card-image">
      <img src={Grants}></img>
    </div>
  </div>
</Link>
</div>
    )
}

export default CardGrants
