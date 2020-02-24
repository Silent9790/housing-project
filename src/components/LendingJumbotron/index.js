import React from "react";
import lendingImg from "../../pictures/lending.jpg";
import "./style.css";

function LendingJumbotron() {
  return (
    <div style={{ height: 575, clear: "both", paddingTop: 100, paddingBottom: 100, textAlign: "center"  }}
    className="jumbotron"
  >

    <div id="jumboBar">
      <img id="rentalImg" src={lendingImg} alt="Rental" style = {{width: "40vw", height: "22vw" }}/>
      <div className = "titleDiv">

      <h3 id="rentalTitle">Lending Program</h3>
      <p id="rentalHeadingText">Here are the programs we offer.</p>
      </div>

    </div>
  </div>
  );
}

export default LendingJumbotron;
