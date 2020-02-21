import React from "react";
import HousingProgram from "../../pictures/HousingProgram.png";
import InsuranceAssistance from "../../pictures/InsuranceAssistance.png";
import elderly from "../../pictures/elders.jpg";

function EldersJumbotron({ children }) {
  return (
    <div
      style={{
        height: 800,
        clear: "both",
        paddingTop: 120,
        textAlign: "center",
        backgroundColor: " tan"
      }}
      className="jumbotron"
    >
      {children}
      <div id="jumboBar">
        <img id="rentalImg" src={elderly} alt="Rental Image" />
        <h3 id="rentalTitle">Muckleshoot Elder Program</h3>
        {/* <p id="rentalHeadingText">Visit one of our 302 rental properties within or near the reservation.</p> */}
        <p className = "center text-white">
       You get a grant.. you all get a grant. Just Kidding. Only enrolled members get a grant.
         </p>
        <a href="https://drive.google.com/file/d/1DbFm-xqE074PASreCpoHtumR7b_QHGnw/view" target="_blank"><button id="applyNow">Apply Now</button></a>
      </div>
    </div>
    // </div> 
  );
}

export default EldersJumbotron;
