import React from "react";
import Carousel from "../Carousel";
import Mission from "../MissionStatementCard";

function Jumbotron({ children }) {
  return (
    <div style={{ height: 800, clear: "both", paddingTop: 120, textAlign: "center", backgroundColor: " tan" }}
      className="jumbotron"
    >
      {children}
      <Carousel />
      <Mission />
    </div>
  );
}

export default Jumbotron;