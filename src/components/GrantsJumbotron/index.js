import React from "react";
// import "./style.css";
import grantsImg from "../../pictures/sheep.jpg";
// import lego3 from "../../pictures/lego4.jpeg";
import house3 from "../../pictures/b2.jpeg";


function GrantsJumbotron ({ children }) {
  return (
    <div style={{ height: 575, clear: "both", paddingTop: 100, paddingBottom: 100, textAlign: "center", backgroundColor: "white "  }}
      className="jumbotron"
    >
      {children}
      
      <div id="jumboBar">
        <img id="rentalImg" src={house3} alt="Rental Image" />
        <h3 id="rentalTitle">Grants Program</h3>
        {/* <p id="rentalHeadingText">Visit one of our 302 rental properties within or near the reservation.</p> */}
        <p className = "center text-white">
       You get a grant.. you all get a grant. Just Kidding. Only enrolled members get a grant.
         </p>
        <a href="https://drive.google.com/file/d/1DbFm-xqE074PASreCpoHtumR7b_QHGnw/view" target="_blank"><button id="applyNow">Apply Now</button></a>
      </div>
    </div>
  );
}

export default GrantsJumbotron;
