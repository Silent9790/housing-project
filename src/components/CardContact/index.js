import React from "react";
import "./style.css";
import {Link } from "react-router-dom";
import Contact from "../../pictures/contact.jpg";

function CardContact() {
  return (
    <div className="col s7">
      <Link to="/contact">
        <div className="card">
          <div className="card-content">
            <p className="center-align homepage-cards">Contact</p>
          </div>
          <div className="card-image">
            <img alt="contact" src={Contact}></img>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardContact;
