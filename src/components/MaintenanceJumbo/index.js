import React from "react";
import "./style.css";
import rentalImg from "../../pictures/b3.jpeg";

function RentalJumbotron({ children }) {
  return (
    <div style={{ height: 575, clear: "both", paddingTop: 100, paddingBottom: 100, textAlign: "center", backgroundColor: "white"  }}
      className="jumbotron"
    >
      {children}
      <div id="jumboBar">
        <img id="rentalImg" src={rentalImg} alt="Rental" style = {{width: "40vw", height: "22vw" }}/>
        <div className = "titleDiv">
          <h3 id="rentalTitle">Housing Maintenance </h3>
          <p id="rentalHeadingText">We're here to help.</p>
        </div>
      </div>
    </div>
  );
}

export default RentalJumbotron;

        // <a href="https://www.google.com/"  rel="noopener noreferrer" target="_blank"><button id="meetTeam">Need Assistance?</button></a>
     