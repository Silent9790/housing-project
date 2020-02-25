import React from "react";
import "./style.css";
import rentalImg from "../../pictures/woman.jpg";


function RentalJumbotron({ children }) {
  return (
    <div style={{ height: 575, clear: "both", paddingTop: 100, paddingBottom: 100, textAlign: "center", backgroundColor: "white"  }}
      className="jumbotron"
    >
      {children}
      <div id="jumboBar">
        <img id="rentalImg" src={rentalImg} alt="Rental" style = {{width: "40vw", height: "22vw" }}/>
        <div className = "titleDiv">
          <h3 id="rentalTitle">Rental Housing Program</h3>
          <p id="rentalHeadingText">Visit one of our 302 rental properties within or near the reservation.</p>
          <a href="https://drive.google.com/file/d/1ni7SXj7NiSVokzoPO3eUL5sQ-k6-U3Xq/view?usp=sharing"  rel="noopener noreferrer" target="_blank"><button id="applyNow">Apply Now</button></a>
        </div>
      </div>
    </div>
  );
}

export default RentalJumbotron;
