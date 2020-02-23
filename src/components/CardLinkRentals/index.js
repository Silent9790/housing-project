import React from "react";
import "../CardLinkGrants/style.css";
import { Link } from "react-router-dom";
import Rentals from "../../pictures/rentals.png";

function CardRentals() {
  return (
    <div>
      <div className="card cardlink" style={{ margin: "0 auto" }}>
        <div
          className="card-image">
          <img className="activator" src={Rentals} 
          alt="Rentals"></img>
        </div>

        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4 center-align">
            Rentals
          </span>
          <div className="center-align">
            <Link to="/rentals">Get Started</Link>
          </div>
        </div>

        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4 center-align">
            <i className="material-icons right">close</i>
            Rentals
          </span>
          <p>
            The Rental Housing Program provides houses and apartments to
            eligible tribal members at low-cost, affordable rental fees.
            Services include access to rental homes, rental apartments, recovery
            house, senior apartments, and transition housing for persons
            completing treatment.
          </p>
        </div>
      </div>

      <div className="whitespace"></div>
    </div>
  );
}

export default CardRentals;
