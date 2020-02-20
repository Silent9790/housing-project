import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Grants from "../../pictures/grants.jpg";

function CardGrants() {
  return (


<div class="card">
  
<div class="card-image waves-effect waves-block waves-light">
  <img class="activator" src={Grants}></img>
</div>

<div class="card-content">
  <span class="card-title activator grey-text text-darken-4">Grants<i class="material-icons right">more_vert</i></span>
  <Link to="/grants">Get Started</Link>
</div>

<div class="card-reveal">
  <span class="card-title grey-text text-darken-4">Grants<i class="material-icons right">close</i></span>
  <p>La bla bla lala La bla bla lalaLa bla bla lalaLa bla bla lalaLa bla bla lalaLa bla bla lalaLa bla bla lalaLa bla bla lalaLa bla bla lala</p>
</div>
</div>
    
  );
}

export default CardGrants;
