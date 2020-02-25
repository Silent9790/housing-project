import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Elders from "../../pictures/elders.png";

function CardElders() {
  return (
    <div>
      <div className="card cardlink" style={{ margin: "0 auto" }}>
        <div className="card-image">
          <img className="activator" src={Elders} alt="elders"></img>
        </div>

        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4 center-align">
            Elders
          </span>
          <div className="center-align">
            <Link to="/elders">Get Started</Link>
          </div>
        </div>

        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4 center-align">
            <i className="material-icons right">close</i>
            Elders
          </span>
          <p>
            Eligible Muckleshoot tribal elders may qualify for new home
            construction on their property, services include assistance in
            obtaining permits, leases and other required approvals.
          </p>
        </div>
      </div>

      <div className="whitespace"></div>
    </div>
  );
}

export default CardElders;
