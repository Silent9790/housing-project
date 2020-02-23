import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Contact from "../../pictures/contact.png";

function CardContact() {
  return (
    <div>
      <div className="card cardlink" style={{ margin: "0 auto" }}>
        <div className="card-image">
          <img className="activator" src={Contact} alt="contact"></img>
        </div>

        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4 center-align">
            Contact
          </span>
          <div className="center-align">
            <Link to="/contact">Get Started</Link>
          </div>
        </div>

        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4 center-align"><i className="material-icons right">close</i>
            Contact
          </span>
          <p>
            Need to get in touch? Send us a email or give us a call, we are open
            Monday threw Friday 8am to 5pm.
          </p>
        </div>
      </div>

      <div className="whitespace"></div>
    </div>
  );
}

export default CardContact;
