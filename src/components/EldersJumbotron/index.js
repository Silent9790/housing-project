import React from "react";
import HousingProgram from "../../pictures/HousingProgram.png";
import InsuranceAssistance from "../../pictures/InsuranceAssistance.png";
import ElderCard from "../ElderCard"

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
      <ElderCard/>
      <div className="container">
        <div className="row">
          <div className="col s4">
            <a href="https://drive.google.com/file/d/1YoOlWrg4INe04Y6XrcvsWHaBlMV4cwiJ/view?usp=sharing" target="_blank">
              <img src={HousingProgram} alt="pdf" style={{ height: "300px" }} />
            </a>
          </div>
          <div className = "col s3">

          </div>

          <div className="col s4">
            <a href="https://drive.google.com/file/d/1-K8tX2fT0cxdFIvLieAlAYp_gWJDthVg/view?usp=sharing" target="_blank">
              <img
                src={InsuranceAssistance}
                alt="pdf"
                style={{ height: "300px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EldersJumbotron;
