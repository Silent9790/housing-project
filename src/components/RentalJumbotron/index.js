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
        <button className="red darken-4" id="applyNow">Apply Now</button>
      </div>
    </div>
  );
}

export default RentalJumbotron;
