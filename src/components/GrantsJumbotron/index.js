import React from "react";
// import "./style.css";
import grantsImg from "../../pictures/sheep.jpg";

function GrantsJumbotron ({ children }) {
  return (
    <div style={{ height: 575, clear: "both", paddingTop: 100, paddingBottom: 100, textAlign: "center", backgroundColor: "grey"  }}
      className="jumbotron"
    >
      {children}
      <div id="jumboBar">
        <img id="rentalImg" src={grantsImg} alt="Rental Image" />
        <h3 id="rentalTitle">Grants Program</h3>
        {/* <p id="rentalHeadingText">Visit one of our 302 rental properties within or near the reservation.</p> */}
        <p className = "center">
       You get a grant.. you all get a grant. Just Kidding. Only enrolled members get a grant.
         </p>
        <a href="https://drive.google.com/file/d/1ni7SXj7NiSVokzoPO3eUL5sQ-k6-U3Xq/view?usp=sharing" target="_blank"><button id="applyNow">Apply Now</button></a>
      </div>
    </div>
  );
}

export default GrantsJumbotron;
