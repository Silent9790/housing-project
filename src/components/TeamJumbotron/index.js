import React from "react";
import "./style.css";
import rentalImg from "../../pictures/a9.jpeg";


function RentalJumbotron({ children }) {
  return (
    <div style={{ height: 575, clear: "both", paddingTop: 100, paddingBottom: 100, textAlign: "center", backgroundColor: "white"  }}
      className="jumbotron"
    >
      {children}
      <div id="jumboBar">
        <img id="rentalImg" src={rentalImg} alt="Rental" style = {{width: "40vw", height: "22vw" }}/>
        <div className = "titleDiv">
          <h3 id="rentalTitle">Housing Team</h3>
          <p id="rentalHeadingText">Meet the Housing Team!</p>
        </div>
      </div>
    </div>
  );
}

export default RentalJumbotron;
