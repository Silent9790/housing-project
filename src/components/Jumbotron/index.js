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
    <div style={{ height: 800, clear: "both", paddingTop: 120, textAlign: "center", backgroundColor: " tan" }}
      className="jumbotron"
    >
      {children}
      <Carousel />
      <Mission />
      <div className="row">
        <div className="col s6">
          <CardGrants/>
        </div>
        <div className="col s6">
          <CardLending/>
        </div>
      </div>
      <div className="row">
        <div className="col s6">
          <CardRentals/>
        </div>
        <div className="col s6">
          <CardElders/>
        </div>
      </div>
      <div className="row">
        <div className="col s6">
          <CardTeam/>
        </div>
        <div className="col s6">
          <CardContact/>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;