import React from "react";
import Carousel from "../Carousel";
import Mission from "../MissionStatementCard";
import CardGrants from "../CardLinkGrants";
import CardLending from "../CardLinkLending";
import CardRentals from "../CardLinkRentals";
import CardElders from "../CardLinkElders";
import CardTeam from "../CardLinkTeam";
import CardContact from "../CardLinkContact";

function Jumbotron({ children }) {
  return (
    <div style={{ height: 1800, clear: "both", textAlign: "center" }}

      className="jumbotron"
    >
      {children}
      <Carousel />
      <Mission />
      <div className="row">
        <div className="col s4">
          <CardGrants/>
        </div>
        <div className="col s4">
          <CardLending/>
        </div>
        <div className="col s4">
          <CardRentals/>
        </div>
      </div>
      <div className="row">

        <div className="col s4">
          <CardElders/>
        </div>
        <div className="col s4">
          <CardTeam/>
        </div>
        <div className="col s4">
          <CardContact/>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;