import React from "react";
import lendingImg from "../../pictures/lending.jpg";
import "./style.css";

function LendingJumbotron({ children }) {
  return (
    <div style={{ height: 575, clear: "both", paddingTop: 100, paddingBottom: 100, textAlign: "center", backgroundColor: "white"  }}
    className="jumbotron"
  >
    {children}
    <div id="jumboBar">
      <img id="rentalImg" src={lendingImg} alt="Rental" />
      <h3 id="rentalTitle">Lending Program</h3>
      <p id="rentalHeadingText">Here are the programs we offer:</p>

    </div>
  </div>
  );
}

export default LendingJumbotron;
