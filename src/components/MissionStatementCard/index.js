import React from "react";
import "./style.css";

function Mission({ children }) {
  return (
    <div
    //   id="missionCard"
      className="red darken-4 missionCard"
      style={{
        // height: "300vh",
        paddingBottom: 30,
        textAlign: "center",
      }}
    >
      {children}
      <br />
      <p id="missionText" className="red darken-4">
        The Muckleshoot Housing Authority aims to provide safe and affordable
        housing for enrolled members. Our goal is to help each family be self
        sufficient and find affordable housing on the Auburn Indian Reservation.
      </p>
      <br />
      <p id="missionText">
        We qualified tribal members a host of services in locating, purchasing,
        and maintaining their homes. Programs offered include:
      </p>
    </div>
    
  );
}

export default Mission;
