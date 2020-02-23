import React from "react";
import lendingImg from "../../pictures/lending.jpg";
import "./style.css";

function ContactJumbotron() {
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
          id="rentalImg"
          src={lendingImg}
          alt="Rental"
          style={{ width: "40vw", height: "22vw" }}
        />
        <div className="titleDiv">
          <h3 id="rentalTitle">Contact</h3>
          <p id="rentalHeadingText">
            Need to get in touch? Send us a message below.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactJumbotron;
