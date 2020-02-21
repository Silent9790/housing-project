import React from "react";
import "./style.css";
import {Link } from "react-router-dom";
import Contact from "../../pictures/contact.png";

function CardContact() {
  return (


<div className="card" style={{width:"20vw", margin: "0 auto"}}>
  
<div className="card-image waves-effect waves-block waves-light">
  <img className="activator" src={Contact} alt="contact"></img>
</div>

<div className="card-content">
  <span className="card-title activator grey-text text-darken-4">Contact<i className="material-icons right">more_vert</i></span>
  <Link to="/contact">Click here to get in touch</Link>
</div>

<div className="card-reveal">
  <span className="card-title grey-text text-darken-4">Contact<i className="material-icons right">close</i></span>
  <p>Need to get in touch? Send us a email or give us a call, we are open Monday threw Friday 8am to 5pm.</p>
</div>
</div>

  );
}

export default CardContact;
