import house3 from "../../pictures/a10.jpeg";
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
        <img id="rentalImg" src={house3} alt="Rental" style = {{width: "40vw", height: "22vw" }}/>
        <div className = "titleDiv">
          <h3 id="rentalTitle">Grant Programs</h3>
          <a href="https://drive.google.com/file/d/1KCCTyYqQdzCqjmdpA4R9yy6CaeqyDyZk/view?usp=sharing"  rel="noopener noreferrer" target="_blank"><button id="applyNow">Apply Now</button></a>
        </div>
      </div>
    </div>
  );
}

export default RentalJumbotron;
