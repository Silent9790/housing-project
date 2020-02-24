import React from "react";
import elderly from "../../pictures/b2.jpeg";
import "./style.css";


function EldersJumbotron({ children }) {
  return (
    <div style={{ height: 575, clear: "both", paddingTop: 100, paddingBottom: 100, textAlign: "center", backgroundColor: "white"  }}
      className="jumbotron"
    >
      {children}
      <div id="jumboBar">

      <img id="rentalImg" src={elderly} alt="Rental" style = {{width: "40vw", height: "22vw" }}/>
      <div className = "titleDiv">
        <h3 id="rentalTitle">MIT Elder Program</h3>
      </div>
    </div>
    </div> 
  );
}

export default EldersJumbotron;
