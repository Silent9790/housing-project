import React from "react";
import Axios from "axios";

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
      <h1>Elders</h1>
      <button onClick = {getPDFHousingProgram}>Get PDF</button>
    </div>
  );
}
export default Elders;
