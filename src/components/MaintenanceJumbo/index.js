import React from "react";
// import "./style.css";
import teamImg from "../../pictures/maintenance2.jpeg";

function MaintenanceJumbotron({ children }) {
  return (
    <div style={{ height: 550, clear: "both", paddingTop: 100, paddingBottom: 100, textAlign: "center", backgroundColor: "white"  }}
      className="jumbotron"
    >
      {children}
      <div id="jumboTeam">
        <img id="teamImg" src={teamImg} alt="Team" />
        <h3 id="teamTitle">Muckleshoot Housing Authority Maintenance Team</h3>
        <a href="https://www.google.com/"  rel="noopener noreferrer" target="_blank"><button id="meetTeam">Need Assistance?</button></a>
        {/* <h5>Emergency Number : </h5> */}
      </div>
    </div>
  );
}

export default MaintenanceJumbotron;
