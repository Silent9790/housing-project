import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Elders from "../../pictures/elders.jpg";

function CardElders() {
  return (
    <div className="col s7">
      <Link to="/elders">
        <div className="card">
          <div className="card-content">
            <p className="center-align homepage-cards">Elders</p>
          </div>
          <div className="card-image">
            <img alt="Elders" src={Elders}></img>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardElders;
