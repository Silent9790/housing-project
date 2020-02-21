import React from "react";
import EldersJumbotron from "../components/EldersJumbotron";
import EldersCards from "../components/EldersCards";
// import HousingProgram from "../pictures/HousingProgram.png"
// import InsuranceAssistance from "../pictures/InsuranceAssistance.png"


function Elders() {

  return (
    <div>
      {/* <h1>Elders</h1> */}
      <EldersJumbotron/>
      <EldersCards />
      {/* <a href = "https://drive.google.com/file/d/1YoOlWrg4INe04Y6XrcvsWHaBlMV4cwiJ/view?usp=sharing">
        <img src = {HousingProgram} alt = "pdf"/>
      </a>
      <a href = "https://drive.google.com/file/d/1-K8tX2fT0cxdFIvLieAlAYp_gWJDthVg/view?usp=sharing">
        <img src = {InsuranceAssistance} alt = "pdf"/>
      </a> */}
    </div>
  );
}
export default Elders;
//Below is the link for PDF file on GoogleDrive
// https://drive.google.com/drive/folders/17DJzSyjxi4r9g8FMbXAttDIoG-cZeLe8?usp=sharing

// https://drive.google.com/file/d/13o0642Hlyu8kohWwioozEZZg8gz0CAzW/view?usp=sharing