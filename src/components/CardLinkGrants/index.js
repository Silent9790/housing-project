import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Grants from "../../pictures/grants.png";

function CardGrants() {
  return (


<div className="card" style={{width:"20vw", margin: "0 auto"}}>
  
<div className="card-image waves-effect waves-block waves-light">
  <img className="activator" src={Grants} alt="grants"></img>
</div>

<div className="card-content">
  <span className="card-title activator grey-text text-darken-4">Grants<i className="material-icons right">more_vert</i></span>
  <Link to="/grants">Get Started</Link>
</div>

<div className="card-reveal">
  <span className="card-title grey-text text-darken-4">Grants<i className="material-icons right">close</i></span>
  <p>La bla bla lala La bla bla lalaLa bla bla lalaLa bla bla lalaLa bla bla lalaLa bla bla lalaLa bla bla lalaLa bla bla lalaLa bla bla lala</p>
</div>
</div>
    
  );
}

export default CardGrants;
