import React from "react";
import lendingImg from "../../pictures/lending.jpg";
import "./style.css";

function LendingJumbotron() {
  return (
    <div
      style={{
        height: 575,
        clear: "both",
        paddingTop: 100,
        paddingBottom: 100,
        textAlign: "center",
        backgroundColor: "white"

      }}
      className="jumbotron"
    >
      <div id="jumboBar">
        <img
          id="lendingImg"
          src={lendingImg}
          alt="Lending"
          style={{ width: "40vw", height: "22vw" }}
        />
        <div className="titleDiv">
          <h3 id="lendingTitle">Lending Program</h3>
          <p id="rentalHeadingText">Here are the programs we offer.</p>
        </div>
      </div>
    </div>
  );
}

export default LendingJumbotron;
