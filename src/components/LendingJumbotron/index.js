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
      <img id="rentalImg" src={lendingImg} alt="Rental Image" />
      <h3 id="rentalTitle">Lending Program</h3>
      <p id="rentalHeadingText">Here is a list of the lending programs we offer.</p>
      {/* <a href="https://drive.google.com/open?id=1PmvEXVUEYmEKdxZVwSyS3Jf9b27xxXrC
" target="_blank"><button id="applyNow">Apply Now</button></a> */}
    </div>
  </div>
  );
}

export default LendingJumbotron;
