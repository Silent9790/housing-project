import React from "react";
import Carousel from "../Carousel";
import Mission from "../MissionStatementCard";
import CardGrants from "../CardGrants";
import CardLending from "../CardLending";
import CardRentals from "../CardRentals";
import CardElders from "../CardElders";
import CardTeam from "../CardTeam";
import CardContact from "../CardContact";

function Jumbotron({ children }) {
  return (
    <div style={{ height: 2000, clear: "both", textAlign: "center" }}

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