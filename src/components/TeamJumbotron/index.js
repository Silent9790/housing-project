import React from "react";
import "./style.css";
import teamImg from "../../pictures/meeting.jpg";

function TeamJumbotron({ children }) {
  return (
    <div style={{ height: 550, clear: "both", paddingTop: 100, paddingBottom: 100, textAlign: "center", backgroundColor: "white"  }}
      className="jumbotron"
    >
      {children}
      <div id="jumboTeam">
        <img id="teamImg" src={teamImg} alt="Team Image" />
        <h3 id="teamTitle">Muckleshoot Housing Authority Team</h3>
        <a href="#" target="_blank"><button id="meetTeam">Arrange a Meeting</button></a>
      </div>
    </div>
  );
}

export default TeamJumbotron;
