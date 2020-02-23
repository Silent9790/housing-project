import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Team from "../../pictures/team.png";

function CardTeam() {
  return (
    <div>
      <div className="card cardlink" style={{ margin: "0 auto" }}>
        <div className="card-image">
          <img className="activator" src={Team} alt="Team"></img>
        </div>

        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4 center-align">
            Team
          </span>
          <div className="center-align">
            <Link to="/team">Get Started</Link>
          </div>
        </div>

        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4 center-align">
            <i className="material-icons right">close</i>Team
          </span>
          <p>Take a look at our team!</p>
        </div>
      </div>

      <div className="whitespace"></div>
    </div>
  );
}

export default CardTeam;
