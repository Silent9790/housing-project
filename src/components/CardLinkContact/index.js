import React from "react";
import "./style.css";
import {Link } from "react-router-dom";
import Contact from "../../pictures/contact.jpg";

function CardContact() {
  return (


<div class="card">
  
<div class="card-image waves-effect waves-block waves-light">
  <img class="activator" src={Contact}></img>
</div>

<div class="card-content">
  <span class="card-title activator grey-text text-darken-4">Contact<i class="material-icons right">more_vert</i></span>
  <Link to="/contact">Click here to get in touch</Link>
</div>

<div class="card-reveal">
  <span class="card-title grey-text text-darken-4">Contact<i class="material-icons right">close</i></span>
  <p>Need to get in touch? Send us a email or give us a call, we are open Monday threw Friday 8am to 5pm.</p>
</div>
</div>

  );
}

export default CardContact;
