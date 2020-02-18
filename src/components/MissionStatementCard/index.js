import React from "react";
import "./style.css";

function Mission ({children}) {
    return (
        <div id="missionCard" style =  {{ height: 150, paddingBottom: 120, textAlign: "center", backgroundColor: "maroon" }}>
            {children}
            <br/><p id="missionText">To provide safe and affordible housing</p>
        </div>
    );
}

export default Mission;