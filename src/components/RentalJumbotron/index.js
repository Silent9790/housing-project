import React from "react";
import "./style.css";
import rentalImg from "../../pictures/woman.jpg";

function RentalJumbotron({ children }) {
  return (
    <div style={{ height: 800, clear: "both", paddingTop: 120, textAlign: "center", backgroundColor: " tan" }}
      className="jumbotron"
    >
      {children}
      <div id="jumboBar">
        <img id="rentalImg" src={rentalImg} alt="Rental Image" />
        <h3 id="rentalTitle">Rental Housing Program</h3>
        <p id="rentalHeadingText">Visit one of our 302 rental properties within or near the reservation.</p>
        <button className="red darken-4" id="applyNow">Apply Now</button>
      </div>
    </div>
  );
}

export default RentalJumbotron;
