import React from "react";
import GrantsCarousel from "../GrantsCarousel";
import GrantsCard1 from "../GrantsCard3";
import GrantsCard2 from "../GrantsCard2";
import GrantsCard3 from "../GrantsCard1";
// import GrantsCard4 from "../GrantsCard4";



function GrantsJumbotron({ children }) {
  return (
    <div style={{ height: 2000, clear: "both", paddingTop: 50, textAlign: "center", backgroundColor: "tan" }}
      className="jumbotron"
    >
      {/* <GrantsCarousel /> */}
      <GrantsCard3 />
      <GrantsCard2 />
      <GrantsCard1 />
      {/* <GrantsCard4 /> */}
      {/* <GrantsCard5 /> */}
    </div>

  );
}

export default GrantsJumbotron;
