import React from "react";
import Carousel from "../Carousel";
import Mission from "../MissionStatementCard";
import CardGrants from "../CardLinkGrants";
import CardLending from "../CardLinkLending";
import CardRentals from "../CardLinkRentals";
import CardElders from "../CardLinkElders";
import CardTeam from "../CardLinkTeam";
import CardContact from "../CardLinkContact";
import Wrapper from '../Wrapper';
import HomeHeader from "../HomeHeader";

function Jumbotron({ children }) {
  return (
    <div
      className="jumbotron main"
    >
      {/* <Carousel /> */}
      <HomeHeader/>
      <Mission />

      <Wrapper>
        <CardGrants/>
        <CardLending/>
        <CardRentals/>
        <CardElders/>
        <CardTeam/>
        <CardContact/>
      </Wrapper>
{/*       
      <div className="row">
        <div className="col s4">
          <CardGrants />
        </div>
        <div className="col s4">
          <CardLending />
        </div>
        <div className="col s4">
          <CardRentals />
        </div>
      </div>
      <div className="row">
        <div className="col s4">
          <CardElders />
        </div>
        <div className="col s4">
          <CardTeam />
        </div>
        <div className="col s4">
          <CardContact />
        </div>
      </div> */}
    </div>
  );
}

export default Jumbotron;
