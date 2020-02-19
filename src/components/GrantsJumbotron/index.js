// import React from "react";
// import GrantsCarousel from "../GrantsCarousel";
// import GrantsCard1 from "../GrantsCard3";
// import GrantsCard2 from "../GrantsCard2";
// import GrantsCard3 from "../GrantsCard1";
// // import GrantsCard4 from "../GrantsCard4";


import React from "react";
// import "./style.css";
import GrantsCard1 from "../GrantsCard1";
import GrantsCarousel from "../GrantsCarousel";
import GrantsCard2 from "../GrantsCard2";
import GrantsCard3 from "../GrantsCard3";
import GrantsCard4 from "../GrantsCard4";


// import rentalImg from "../../pictures/woman.jpg";

function RentalJumbotron({ children }) {
  return (
    <div style={{ height: 2000, clear: "both", paddingTop: 0, textAlign: "center", backgroundColor: " tan" }}
      className="jumbotron"
    >
      {children}
      {/* <GrantsCard3 />s */}
      <GrantsCarousel />
<GrantsCard1 />
<GrantsCard2 />
<GrantsCard3 />
<GrantsCard4 />
      <div id="grantsJumbo">
        {/* <img id="grantsImg" src={rentalImg} alt="Grants Image" /> */}
        {/* <h3 id="grantsTitle">Grants</h3> */}
        <p id="grantsHeadingText"> </p>
        {/* <button className="red darken-4" id="applyNow">Apply Now</button> */}
        {/* <a href="http://www.muckleshoot.nsn.us/media/44055/down%20payment%20assistance%20application.pdf" */}
      </div>
    </div>

  );
}

export default RentalJumbotron;
