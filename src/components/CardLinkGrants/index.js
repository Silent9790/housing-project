import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Grants from "../../pictures/grants.png";

function CardGrants() {
  return (
    <div>
      <div className="card cardlink" style={{ margin: "0 auto" }}>
        <div className="card-image">
          <img className="activator" src={Grants} alt="grants"></img>
        </div>

        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4 center-align">
            Grants
          </span>
          <div className="center-align">
            <Link to="/grants">Get Started</Link>
          </div>
        
        </div>

        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4 center-align"><i className="material-icons right">close</i>
            Grants
          </span>
          <p>
            Click here to take a look a the grant forms.
          </p>
        </div>
      </div>

      <div className="whitespace"></div>
    </div>
  );
}

export default CardGrants;
