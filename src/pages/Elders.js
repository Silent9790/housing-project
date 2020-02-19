import React from "react";
import EldersJumbotron from "../components/EldersJumbotron";


function Elders() {

  const getPDFHousingProgram = () => {
    const URL = "https://pdfhost.io/v/.UQ~tXPa_MENU_EL_GATO_2020_UKpdf.pdf"

    Axios.get(
      URL
    ).then(response => {
      console.log(response)
    })
  }

  return (
    <div>
      {/* <h1>Elders</h1> */}
      <EldersJumbotron/>
    </div>
  );
}
export default Elders;
//Below is the link for PDF file on GoogleDrive
// https://drive.google.com/drive/folders/17DJzSyjxi4r9g8FMbXAttDIoG-cZeLe8?usp=sharing