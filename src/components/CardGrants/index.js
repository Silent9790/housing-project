import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Grants from "../../pictures/grants.jpg";

function CardGrants() {
  return (
    <div className="col s10">
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
  );
}

export default CardGrants;
